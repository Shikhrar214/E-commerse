import React from 'react';
import ProductSidebar from '../category/productSidebar';
import ProductTopBar from '../category/product_topBar';
import BrassProducts from '../category/brassProduct';

const ProductPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9f9f9]">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-gray-200 bg-[#fdf6ec]">
        <ProductSidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <ProductTopBar totalItems={51732} />
        <BrassProducts />
      </main>
    </div>
  );
};

export default ProductPage;





// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import ProductTopBar from "../category/product_topBar";
// import BrassProducts from "../category/brassProduct";
// import ProductSidebar from "../category/productSidebar";

// function Category() {
//   return (
//     <div className="flex ">

//       <ProductSidebar />

//       <div>
//         <ProductTopBar />

//         <BrassProducts />
//       </div>
//     </div>
//   );
// }

// export default Category;
