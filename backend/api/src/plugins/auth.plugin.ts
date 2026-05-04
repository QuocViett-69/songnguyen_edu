import fastifyJwt from "@fastify/jwt";
import fp from "fastify-plugin";
import type { FastifyInstance, FastifyRequest } from "fastify";

import { env } from "../config/env.js";
import { AppError } from "../common/errors/AppError.js";
import type { UserRole } from "../modules/auth/auth.types.js";

export const registerAuth = fp(async (app: FastifyInstance) => {
  await app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
  });

  app.decorate("requireAuth", async (request: FastifyRequest) => {
    try {
      await request.jwtVerify();
    } catch {
      throw new AppError("AUTH_REQUIRED", 401, "Authentication required");
    }
  });

  app.decorate(
    "requireRole",
    (request: FastifyRequest, role: UserRole | UserRole[]) => {
      const acceptedRoles = Array.isArray(role) ? role : [role];

      if (!request.user || !acceptedRoles.includes(request.user.role)) {
        throw new AppError("FORBIDDEN", 403, "Insufficient permission");
      }
    },
  );
});
