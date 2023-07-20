import { prismaClient } from "../src/prisma-client";

describe("Select Fields", () => {
  it("should can create and select fields", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "wafa",
        email: "wafa@pzn.com",
        name: "Wafa",
        phone: "0821241243124",
      },
      select: {
        id: true,
        name: true,
      },
    });

    console.info(customer);

    expect(customer.id).toBe("wafa");
    expect(customer.name).toBe("Wafa");
    expect(customer.email).toBeUndefined();
    expect(customer.phone).toBeUndefined();
  });

  it("should can select fields", async () => {
    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    console.info(customers);

    for (let customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeUndefined();
      expect(customer.phone).toBeUndefined();
    }
  });
});
