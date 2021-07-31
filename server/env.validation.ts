import { plainToClass } from 'class-transformer';
import { IsEnum, IsNumber, validateSync } from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Staging = 'staging'
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;
}

export function validate(config: Record<string, unknown>) {
  const validateConfig = plainToClass(
    EnvironmentVariables,
    config,
    { enableImplicitConversion: true }
  );

  const errors = validateSync(validateConfig, { skipMissingProperties: false });

  if(errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validateConfig;
}