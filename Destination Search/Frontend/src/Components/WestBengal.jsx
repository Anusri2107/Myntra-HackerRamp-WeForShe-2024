import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function WestBengal() {

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

  const WestBengal = product.filter((d) => d.place==="West Bengal");
  const WestBengalWomen = WestBengal.filter((d) => d.category==="Women");
  const WestBengalMen = WestBengal.filter((d) => d.category==="Men");

  console.log(WestBengal);
  console.log(WestBengalWomen);
  console.log(WestBengalMen);

  return (
    <div className="py-10">
      <div className="border-2 p-5">
        <h1 className="text-2xl font-semibold">WestBengal</h1>
        <div>
          <h1 className="font-semibold text-xl mt-10">Women</h1>
          <div className="flex flex-wrap gap-2">
            {WestBengalWomen.map((item) => (
              <Card item={item} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-xl mt-10">Men</h1>
          <div className="flex flex-wrap gap-2">
            {WestBengalMen.map((item) => (
              <Card item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WestBengal;
