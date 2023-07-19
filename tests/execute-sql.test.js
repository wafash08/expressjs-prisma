import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to execute sql", async () => {
    const id = "2";
    const name = "Wafa";

    const impacted =
      await prismaClient.$executeRaw`insert into sample(id, name) values (${id}, ${name})`;
    console.log(impacted);
    expect(impacted).toBe(1);
  });
});
