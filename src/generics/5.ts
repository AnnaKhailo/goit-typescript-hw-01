export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
type UserRoleDescription = Record<UserRole, string>;

const RoleDescription: UserRoleDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

console.log(RoleDescription);
