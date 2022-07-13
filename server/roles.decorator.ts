import { SetMetadata } from '@nestjs/common'

export const Roles = (...Roles: string[]) => SetMetadata('roles', Roles)
