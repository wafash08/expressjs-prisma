import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", function () {
  it("should insert comment", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "wafi",
        title: "Contoh Comment",
        description: "Contoh comment description",
      },
      include: {
        customer: true,
      },
    });

    console.info(comment);
    expect(comment.customer_id).toBe("wafi");
  });

  it("should insert multiple comments", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "lulu",
        name: "Lulu",
        email: "lulu@pzn.com",
        phone: "9898989898",
        comments: {
          createMany: {
            data: [
              {
                title: "Comment 1",
                description: "Description 1",
              },
              {
                title: "Comment 2",
                description: "Description 2",
              },
            ],
          },
        },
      },
      include: {
        comments: true,
      },
    });

    console.info(customer);
    expect(customer.comments.length).toBe(2);
  });

  it("should find many with filter relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            title: {
              contains: "Comment",
            },
          },
        },
      },
      include: {
        comments: true,
      },
    });

    console.info(JSON.stringify(customers));
    expect(customers.length).toBe(4);
  });
});
