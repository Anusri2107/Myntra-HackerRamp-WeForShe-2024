import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function Maharashtra() {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("http://localhost:4001/product");
        console.log(res.data);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  console.log(product);

  const Maharashtra = product.filter((d) => d.place==="Maharashtra");
  const MaharashtraWomen = Maharashtra.filter((d) => d.category==="Women");
  const MaharashtraMen = Maharashtra.filter((d) => d.category==="Men");

  console.log(Maharashtra);
  console.log(MaharashtraWomen);
  console.log(MaharashtraMen);

  return (
    <div className="py-10">
      <div className="border-2 p-5">
        <h1 className="text-2xl font-semibold">Maharashtra</h1>
        <div>
          <h1 className="font-semibold text-xl mt-10">Women</h1>
          <div className="flex flex-wrap gap-2">
            {MaharashtraWomen.map((item) => (
              <Card item={item} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-xl mt-10">Men</h1>
          <div className="flex flex-wrap gap-2">
            {MaharashtraMen.map((item) => (
              <Card item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maharashtra;
