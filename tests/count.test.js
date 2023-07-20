import { prismaClient } from "../src/prisma-client";

describe("Count", () => {
  it("should return total items of column", async () => {
    const customers = await prismaClient.customer.count({
      where: {
        name: "wafa",
      },
    });

    expect(customers).toBe(1);
  });
});
