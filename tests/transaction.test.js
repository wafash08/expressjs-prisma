import { prismaClient } from "../src/prisma-client";

describe("Transaction", () => {
  it("should can execute sequential transaction", async () => {
    const [wafi, lulu] = await prismaClient.$transaction([
      prismaClient.customer.create({
        data: {
          id: "wafi",
          email: "wafi@pzn.com",
          name: "Wafi",
          phone: "25334534534543",
        },
      }),
      prismaClient.customer.create({
        data: {
          id: "lulu",
          email: "lulu@pzn.com",
          name: "Lulu",
          phone: "3453453543",
        },
      }),
    ]);

    expect(wafi.name).toBe("Wafi");
    expect(lulu.name).toBe("Lulu");
  });

  it("should can execute interactive transaction", async () => {
    const [wafi, lulu] = await prismaClient.$transaction(
      async prisma => {
        const wafi = await prisma.customer.create({
          data: {
            id: "wafi2",
            email: "wafi2@pzn.com",
            name: "Wafi",
            phone: "253345345345432",
          },
        });
        const lulu = await prisma.customer.create({
          data: {
            id: "lulu2",
            email: "lulu2@pzn.com",
            name: "Lulu",
            phone: "34534535432",
          },
        });

        return [wafi, lulu];
      },
      { timeout: 5 }
    );

    expect(wafi.name).toBe("Wafi");
    expect(lulu.name).toBe("Lulu");
  });
});
