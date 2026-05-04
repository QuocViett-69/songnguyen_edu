import { config as loadEnv } from "dotenv";
import { z } from "zod";

loadEnv();

const envSchema = z
  .object({
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    PORT: z.coerce.number().default(3000),
    DATABASE_URL: z.string().min(1),
    USE_REDIS: z.coerce.boolean().default(true),
    REDIS_URL: z.string().min(1).optional(),
    JWT_SECRET: z.string().min(16),
    JWT_REFRESH_SECRET: z.string().min(16),
    JWT_ACCESS_EXPIRES: z.string().default("15m"),
    JWT_REFRESH_EXPIRES: z.string().default("7d"),
    FRONTEND_URL: z.string().url(),
    ADMIN_URL: z.string().url(),
    RATE_LIMIT_WINDOW_MS: z.coerce.number().default(900000),
    RATE_LIMIT_MAX_API: z.coerce.number().default(200),
    RATE_LIMIT_MAX_LOGIN: z.coerce.number().default(10),
    RATE_LIMIT_MAX_PUBLIC: z.coerce.number().default(20),
    RESEND_API_KEY: z.string().optional(),
    EMAIL_FROM: z.string().optional(),
    NEXTJS_REVALIDATE_URL: z.string().url().optional(),
    NEXTJS_REVALIDATE_SECRET: z.string().min(8).optional(),
    SETTINGS_CACHE_PREFIX: z.string().default("settings"),
  })
  .superRefine((data, ctx) => {
    if (data.USE_REDIS && !data.REDIS_URL) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["REDIS_URL"],
        message: "REDIS_URL is required when USE_REDIS=true",
      });
    }
  });

export const env = envSchema.parse(process.env);
