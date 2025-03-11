// import React from 'react'

// const shops = () => {
//   return (
//     <div>shops</div>
//   )
// }

// export default shops
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import ShopForm from "../Components/ShopForm";
// import ShopList from "../Components/ShopList";

interface Shop {
  id: number;
  name: string;
  description: string;
  logo: string;
}

const Shops: React.FC = () => {
  const [shops, setShops] = useState<Shop[]>([]);

  const fetchShops = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/shops"
        // "https://shop-yangudb.onrender.com/shops"
      );
      setShops(response.data);
    } catch (error) {
      console.error("Error fetching shops:", error);
    }
  };

  // useEffect(() => {
  //   fetchShops();
  // }, []);

  // const fetchShops = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/shops");
  //     // Invoke-WebRequest -Uri "http://localhost:3000/shops"

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     setShops(data);
  //   } catch (error) {
  //     console.error("Error fetching shops:", error);
  //   }
  // };

  useEffect(() => {
    fetchShops();
  }, []);

  console.log({ shops });

  return (
    <div className="px-2 md:px-6 py-4 md:py-4">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 font-montserrat">
        Shops Management
      </h1>
      <div className="mb-6">{/* <ShopForm onShopAdded={fetchShops} /> */}</div>
      <div>
        <h2 className="text-xl font-bold mb-4 font-montserrat">
          List of Shops
        </h2>
        {/* <ShopList shops={shops} onShopUpdated={fetchShops} /> */}
      </div>
    </div>
  );
};

export default Shops;
