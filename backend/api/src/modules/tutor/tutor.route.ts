import type { FastifyInstance } from "fastify";

import { errorResponseSchema, successSchema } from "../../common/utils/docs.js";
import { success } from "../../common/utils/response.js";

const classIdParamSchema = {
  type: "object",
  required: ["classId"],
  properties: {
    classId: { type: "string", format: "uuid" },
  },
};

const paymentBodySchema = {
  type: "object",
  required: ["amount", "billImageUrl"],
  properties: {
    amount: { type: "number" },
    billImageUrl: { type: "string" },
    classId: { type: "string", format: "uuid" },
    note: { type: "string" },
  },
};

export async function registerTutorRoutes(app: FastifyInstance): Promise<void> {
  app.get(
    "/profile",
    {
      schema: {
        tags: ["Tutor"],
        summary: "Get tutor profile",
        response: {
          200: successSchema({ type: "object", additionalProperties: true }),
        },
      },
    },
    async (_request, reply) => {
      void reply.send(success({}));
    },
  );

  app.patch(
    "/profile",
    {
      schema: {
        tags: ["Tutor"],
        summary: "Update tutor profile",
        body: { type: "object", additionalProperties: true },
        response: {
          200: successSchema({
            type: "object",
            required: ["updated"],
            properties: {
              updated: { type: "boolean" },
            },
          }),
          400: errorResponseSchema,
        },
      },
    },
    async (_request, reply) => {
      void reply.send(success({ updated: true }));
    },
  );

  app.get(
    "/classes",
    {
      schema: {
        tags: ["Tutor"],
        summary: "List available classes for tutor",
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
    "/classes/:classId/apply",
    {
      schema: {
        tags: ["Tutor"],
        summary: "Apply to a class",
        params: classIdParamSchema,
        body: {
          type: "object",
          properties: {
            note: { type: "string" },
          },
        },
        response: {
          200: successSchema({
            type: "object",
            required: ["applied"],
            properties: {
              applied: { type: "boolean" },
            },
          }),
          400: errorResponseSchema,
        },
      },
    },
    async (_request, reply) => {
      void reply.send(success({ applied: true }));
    },
  );

  app.delete(
    "/classes/:classId/apply",
    {
      schema: {
        tags: ["Tutor"],
        summary: "Cancel class application",
        params: classIdParamSchema,
        response: {
          200: successSchema({
            type: "object",
            required: ["cancelled"],
            properties: {
              cancelled: { type: "boolean" },
            },
          }),
        },
      },
    },
    async (_request, reply) => {
      void reply.send(success({ cancelled: true }));
    },
  );

  app.get(
    "/applications",
    {
      schema: {
        tags: ["Tutor"],
        summary: "List tutor applications",
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
    "/payments",
    {
      schema: {
        tags: ["Tutor"],
        summary: "Submit payment proof",
        body: paymentBodySchema,
        response: {
          200: successSchema({
            type: "object",
            required: ["submitted"],
            properties: {
              submitted: { type: "boolean" },
            },
          }),
          400: errorResponseSchema,
        },
      },
    },
    async (_request, reply) => {
      void reply.send(success({ submitted: true }));
    },
  );

  app.get(
    "/payments",
    {
      schema: {
        tags: ["Tutor"],
        summary: "List tutor payment submissions",
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
}
