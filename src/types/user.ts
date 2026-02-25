import { Role } from "./roles";

export type User = {
  id: string;
  email: string;
  role: Role;
  createdAt: Date;
};