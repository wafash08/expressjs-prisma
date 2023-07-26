import { prismaClient } from "../src/prisma-client";

describe("One to One Relation", () => {
  it("should create one to one relation", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "wafa",
        customer_id: "wafa",
        balance: 1000000,
      },
      include: {
        customer: true,
      },
    });

    console.info(wallet);

    expect(wallet.id).toBe("wafa");
  });

  it("should create one to one with relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "wafi",
        name: "Wafi",
        email: "wafi@gmail.com",
        phone: "1234567890",
        wallet: {
          create: {
            id: "wafi",
            balance: 1000000,
          },
        },
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
    expect(customer.id).toBe("wafi");
  });

  it("should find one to one with relation", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "wafi",
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
    expect(customer.wallet.balance).toBe(1000000);
  });

  it("should find one to one with relation filter", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null,
        },
      },
      include: {
        wallet: true,
      },
    });

    console.info(customers);
  });
});
