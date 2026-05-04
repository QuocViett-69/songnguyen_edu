import { z } from "zod";

export const SettingKeyParamSchema = z.object({
  key: z.string().trim().min(2).max(120),
});

export const SettingCategorySchema = z.enum([
  "SEO",
  "PRICING",
  "LANDING_PAGE",
  "BANKING",
  "SYSTEM",
]);

export const SettingsListQuerySchema = z.object({
  category: SettingCategorySchema.optional(),
});

export const UpsertSettingBodySchema = z.object({
  category: SettingCategorySchema,
  value: z.any().refine((value) => value !== undefined, {
    message: "value is required",
  }),
  description: z.string().trim().max(500).optional(),
  revalidatePaths: z.array(z.string().trim().min(1)).max(50).optional(),
});
