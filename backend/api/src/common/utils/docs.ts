import { zodToJsonSchema } from "zod-to-json-schema";
import type { z } from "zod";

export type JsonSchema = Record<string, unknown>;

export function fromZodSchema(schema: z.ZodTypeAny): JsonSchema {
  const jsonSchema = zodToJsonSchema(schema, {
    target: "jsonSchema7",
    $refStrategy: "none",
  }) as JsonSchema & { $schema?: string };

  delete jsonSchema.$schema;
  return jsonSchema;
}

export const errorResponseSchema: JsonSchema = {
  type: "object",
  required: ["success", "error"],
  properties: {
    success: { type: "boolean", const: false },
    error: {
      type: "object",
      required: ["code", "message", "details"],
      properties: {
        code: { type: "string" },
        message: { type: "string" },
        details: {},
      },
    },
  },
};

const paginationMetaSchema: JsonSchema = {
  type: "object",
  required: ["page", "limit", "total", "totalPages"],
  properties: {
    page: { type: "number" },
    limit: { type: "number" },
    total: { type: "number" },
    totalPages: { type: "number" },
  },
};

export function successSchema(dataSchema: JsonSchema): JsonSchema {
  return {
    type: "object",
    required: ["success", "data"],
    properties: {
      success: { type: "boolean", const: true },
      data: dataSchema,
    },
  };
}

export function successListSchema(itemSchema: JsonSchema): JsonSchema {
  return {
    type: "object",
    required: ["success", "data", "meta"],
    properties: {
      success: { type: "boolean", const: true },
      data: {
        type: "array",
        items: itemSchema,
      },
      meta: paginationMetaSchema,
    },
  };
}
