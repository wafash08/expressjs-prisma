import { prismaClient } from "../src/prisma-client";

describe("CRUD many", () => {
  it("should create many records", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "joko",
          email: "joko@pzn.com",
          phone: "34534534534545",
          name: "Joko",
        },
        {
          id: "budi",
          email: "budi@pzn.com",
          phone: "34534545",
          name: "Budi",
        },
      ],
    });

    expect(count).toBe(2);
  });

  it("should update many records", async () => {
    await prismaClient.customer.updateMany({
      data: {
        email: "jokolagi@pzn.com",
      },
      where: {
        name: "joko",
      },
    });
  });

  it("should delete many records", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "wafi",
      },
    });

    expect(count).toBe(2);
  });

  it("should get many records", async () => {
    const customers = await prismaClient.customer.findMany({});

    expect(customers.length).toBe(2);
  });
});
