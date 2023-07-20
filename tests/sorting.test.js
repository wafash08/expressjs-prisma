import { prismaClient } from "../src/prisma-client.js";

describe("Sorting", () => {
  it("should can do sorting", async () => {
    const customers = await prismaClient.customer.findMany({
      skip: 0,
      take: 10,
      orderBy: {
        name: "desc",
      },
    });
  });
});
