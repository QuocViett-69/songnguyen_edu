import fp from "fastify-plugin";
import type { FastifyInstance } from "fastify";
import apiReference from "@scalar/fastify-api-reference";

export const registerScalarDocs = fp(async (app: FastifyInstance) => {
  await app.register(apiReference, {
    routePrefix: "/reference",
    configuration: {
      title: "SNE API Reference",
    },
  });
});
