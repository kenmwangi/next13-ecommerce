import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Add product",
};

export default function AddProduct() {
  return (
    <div>
      <h1 className="h3 mb-3">Add Product</h1>
      <form>
        <input type="text" className="form-input" />
      </form>
    </div>
  );
}
