import { prismaClient } from "../src/prisma-client";

describe("Prisma Crud", () => {
  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "wafa",
        email: "wafa@pzn.com",
        name: "Wafa",
        phone: "0821241243124",
      },
    });

    expect(customer.id).toBe("wafa");
    expect(customer.email).toBe("wafa@pzn.com");
    expect(customer.name).toBe("Wafa");
    expect(customer.phone).toBe("0821241243124");
  });

  it("should be able to update customer", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: "Wafa Saefulhaq",
      },
      where: {
        id: "wafa",
      },
    });

    expect(customer.id).toBe("wafa");
    expect(customer.email).toBe("wafa@pzn.com");
    expect(customer.name).toBe("Wafa Saefulhaq");
    expect(customer.phone).toBe("0821241243124");
  });

  it("should be able to read customer", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "wafa",
      },
    });

    expect(customer.id).toBe("wafa");
    expect(customer.email).toBe("wafa@pzn.com");
    expect(customer.name).toBe("Wafa");
    expect(customer.phone).toBe("0821241243124");
  });

  it("should be able to delete customer", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "wafa",
      },
    });

    expect(customer.id).toBe("wafa");
    expect(customer.email).toBe("wafa@pzn.com");
    expect(customer.name).toBe("Wafa Saefulhaq");
    expect(customer.phone).toBe("0821241243124");
  });
});
