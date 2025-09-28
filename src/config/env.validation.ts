import { envSchema } from 'src/config/env.schema';

export function validate(config: unknown) {
  const { data, success, error } = envSchema.safeParse(config);
  if (!success) {
    console.log(error);
    throw new Error('Env variable validation failed');
  }
  return data;
}
