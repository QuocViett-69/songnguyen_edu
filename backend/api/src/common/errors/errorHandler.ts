import type { FastifyInstance } from "fastify";
import { ZodError } from "zod";

import { AppError } from "./AppError.js";
import { ErrorCodes } from "./errorCodes.js";

type FastifyValidationIssue = {
  instancePath?: string;
  message?: string;
  keyword?: string;
  params?: unknown;
};

function isFastifyValidationError(error: unknown): error is {
  validation: FastifyValidationIssue[];
} {
  return Boolean(
    error &&
    typeof error === "object" &&
    "validation" in error &&
    Array.isArray((error as { validation?: unknown }).validation),
  );
}

export function registerErrorHandler(app: FastifyInstance): void {
  app.setErrorHandler((error, request, reply) => {
    request.log.error(error);

    if (error instanceof AppError) {
      void reply.status(error.statusCode).send({
        success: false,
        error: {
          code: error.code,
          message: error.message,
          details: error.details,
        },
      });
      return;
    }

    if (error instanceof ZodError) {
      void reply.status(400).send({
        success: false,
        error: {
          code: ErrorCodes.VALIDATION_ERROR,
          message: "Validation failed",
          details: error.issues.map((issue) => ({
            path: issue.path.join("."),
            code: issue.code,
            message: issue.message,
          })),
        },
      });
      return;
    }

    if (isFastifyValidationError(error)) {
      void reply.status(400).send({
        success: false,
        error: {
          code: ErrorCodes.VALIDATION_ERROR,
          message: "Validation failed",
          details: error.validation.map((issue) => ({
            path: issue.instancePath ?? "",
            code: issue.keyword ?? "validation",
            message: issue.message ?? "Invalid request",
            params: issue.params ?? null,
          })),
        },
      });
      return;
    }

    void reply.status(500).send({
      success: false,
      error: {
        code: ErrorCodes.INTERNAL_ERROR,
        message: "Internal server error",
        details: null,
      },
    });
  });
}
