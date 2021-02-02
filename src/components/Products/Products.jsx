import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Headset",
    description: "Gaming Headset",
    price: "£50",
    image:
      "https://legitreviews.com/wp-content/uploads/2017/01/Logitech-G533_Carmen_BTY3.jpg",
  },
  {
    id: 2,
    name: "Shoes",
    description: "Running Shoes",
    price: "£30",
    image:
      "https://res.cloudinary.com/eastern/image/upload/w_1000,q_auto,f_auto/2046070_089_main.jpg",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
