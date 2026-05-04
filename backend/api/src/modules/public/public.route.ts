import type { FastifyInstance } from "fastify";

import { errorResponseSchema, successSchema } from "../../common/utils/docs.js";
import { success } from "../../common/utils/response.js";

const stringIdParamSchema = {
  type: "object",
  required: ["id"],
  properties: {
    id: { type: "string" },
  },
};

const classRequestBodySchema = {
  type: "object",
  required: ["parentName", "parentPhone", "subject", "grade", "district"],
  properties: {
    parentName: { type: "string" },
    parentPhone: { type: "string" },
    parentEmail: { type: "string", format: "email" },
    subject: { type: "string" },
    grade: { type: "string" },
    district: { type: "string" },
    budgetPerHour: { type: "number" },
    note: { type: "string" },
  },
};

const tutorRegisterBodySchema = {
  type: "object",
  required: ["fullName", "email", "phone", "password"],
  properties: {
    fullName: { type: "string" },
    email: { type: "string", format: "email" },
    phone: { type: "string" },
    password: { type: "string", minLength: 6 },
    subjects: {
      type: "array",
      items: { type: "string" },
    },
    districts: {
      type: "array",
      items: { type: "string" },
    },
  },
};

const uploadDocumentsBodySchema = {
  type: "object",
  required: ["documents"],
  properties: {
    documents: {
      type: "array",
      items: {
        type: "object",
        required: ["type", "url"],
        properties: {
          type: { type: "string" },
          url: { type: "string" },
        },
      },
    },
  },
};

export async function registerPublicRoutes(
  app: FastifyInstance,
): Promise<void> {
  app.get(
    "/classes",
    {
      schema: {
        tags: ["Public"],
        summary: "List public classes",
        response: {
          200: successSchema({
            type: "array",
            items: { type: "object", additionalProperties: true },
          }),
        },
      },
    },
    async (_request, reply) => {
      void reply.send(success([]));
    },
  );

  app.get(
    "/classes/:id",
    {
      schema: {
        tags: ["Public"],
        summary: "Get class detail",
        params: stringIdParamSchema,
        response: {
          200: successSchema({
            type: "object",
            required: ["id"],
            properties: {
              id: { type: "string" },
            },
          }),
          404: errorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      void reply.send(success({ id: (request.params as { id: string }).id }));
    },
  );

  app.get(
    "/tutors",
    {
      schema: {
        tags: ["Public"],
        summary: "List public tutors",
        response: {
          200: successSchema({
            type: "array",
            items: { type: "object", additionalProperties: true },
          }),
        },
      },
    },
    async (_request, reply) => {
      void reply.send(success([]));
    },
  );

  app.post(
    "/class-requests",
    {
      schema: {
        tags: ["Public"],
        summary: "Create class request",
        body: classRequestBodySchema,
        response: {
          200: successSchema({
            type: "object",
            required: ["created"],
            properties: {
              created: { type: "boolean" },
            },
          }),
          400: errorResponseSchema,
        },
      },
    },
    async (_request, reply) => {
      void reply.send(success({ created: true }));
    },
  );

  app.post(
    "/tutors/register",
    {
      schema: {
        tags: ["Public"],
        summary: "Register tutor profile",
        body: tutorRegisterBodySchema,
        response: {
          200: successSchema({
            type: "object",
            required: ["tutorId", "uploadToken"],
            properties: {
              tutorId: { type: "string" },
              uploadToken: { type: "string" },
            },
          }),
          400: errorResponseSchema,
        },
      },
    },
    async (_request, reply) => {
      void reply.send(
        success({ tutorId: "pending-tutor-id", uploadToken: "upload-token" }),
      );
    },
  );

  app.post(
    "/tutors/:id/documents",
    {
      schema: {
        tags: ["Public"],
        summary: "Upload tutor verification documents",
        params: stringIdParamSchema,
        body: uploadDocumentsBodySchema,
        response: {
          200: successSchema({
            type: "object",
            required: ["uploaded"],
            properties: {
              uploaded: { type: "boolean" },
            },
          }),
          400: errorResponseSchema,
        },
      },
    },
    async (_request, reply) => {
      void reply.send(success({ uploaded: true }));
    },
  );
}
