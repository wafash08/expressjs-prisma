import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to connect to the database", async () => {
    await prismaClient.$connect();

    // do something

    await prismaClient.$disconnect();
  });
});
