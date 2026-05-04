import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import type { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

export const registerSwaggerDocs = fp(async (app: FastifyInstance) => {
  await app.register(swagger, {
    openapi: {
      info: {
        title: "SNE API",
        description: "Song Nguyen Education API documentation",
        version: "0.1.0",
      },
      servers: [{ url: "/" }],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      tags: [
        { name: "Health", description: "Service health check endpoints" },
        { name: "Auth", description: "Authentication endpoints" },
        { name: "Public", description: "Public website endpoints" },
        { name: "Tutor", description: "Tutor portal endpoints" },
        { name: "Admin", description: "Admin dashboard endpoints" },
        { name: "Settings", description: "Admin settings endpoints" },
      ],
    },
  });

  await app.register(swaggerUi, {
    routePrefix: "/docs",
    staticCSP: true,
    uiConfig: {
      docExpansion: "list",
      deepLinking: true,
    },
  });
});
