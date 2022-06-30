import { Role } from '../user/role';

export interface User {
  displayName: string;
  email: string;
  institution?: string;
  website?: string;
  enabled: boolean;
  role: Role;
}
