import z from 'zod';

export const baseSchema = z.object({
  PORT: z.coerce.number().int().min(0).max(65535),
  DATABASE_URL: z.url()
});

export const jwtSchema = z.object({
  JWT_SECRET: z.string().min(32),
  JWT_EXPIRES_IN: z.coerce.number().int().positive()
});

export const googleSchema = z.object({
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_SECRET: z.string()
});

export const envSchema = baseSchema.and(jwtSchema).and(googleSchema);

export type EnvConfig = z.infer<typeof envSchema>;
