import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient({
  errorFormat: "pretty",
  log: ["info", "error", "warn", "query"],
});
