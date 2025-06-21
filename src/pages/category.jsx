import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductTopBar from "../category/product_topBar";
import BrassProducts from "../category/brassProduct";
import ProductSidebar from "../category/productSidebar";

function Category() {
  return (
    <div className="flex ">

      <ProductSidebar />

      <div>
        <ProductTopBar />

        <BrassProducts />
      </div>
    </div>
  );
}

export default Category;
