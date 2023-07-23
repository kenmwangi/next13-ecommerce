import Container from "@/components/Container";
import FormSubmitButton from "@/components/Buttons/FormSubmitButton";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Add product",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Please fill all fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

export default function AddProduct() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <section className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h3 mb-3">Fill in Your Product</h1>
          </div>

          {/* Add Product form */}
          <div className="max-w-sm mx-auto">
            <form action={addProduct}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    htmlFor="name"
                    className="block text-gray-800 text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    required
                    name="name"
                    placeholder="Product name"
                    type="text"
                    className="form-input w-full text-gray-800"
                  />
                </div>
              </div>
              {/* Description */}
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    htmlFor="description"
                    className="block text-gray-800 text-sm font-medium mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    required
                    name="description"
                    placeholder="Description"
                    className="form-textarea w-full text-gray-800"
                  ></textarea>
                </div>
              </div>
              {/* Image Url */}
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    htmlFor="imageUrl"
                    className="block text-gray-800 text-sm font-medium mb-1"
                  >
                    Image URL
                  </label>
                  <input
                    required
                    name="imageUrl"
                    placeholder="Image Url"
                    type="url"
                    className="form-input w-full text-gray-800"
                  />
                </div>
              </div>
              {/* Item Number */}
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    htmlFor="price"
                    className="block text-gray-800 text-sm font-medium mb-1"
                  >
                    Item Number
                  </label>
                  <input
                    required
                    name="price"
                    placeholder="Price"
                    type="number"
                    className="form-input w-full text-gray-800"
                  />
                </div>
              </div>

              <FormSubmitButton className="btn-sm mt-6 w-full bg-blue-500 text-white">
                Submit
              </FormSubmitButton>
            </form>
          </div>
        </section>
      </Container>
    </div>
  );
}
