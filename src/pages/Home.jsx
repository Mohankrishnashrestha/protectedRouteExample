import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
const getFun = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};
function Home() {
  const { data } = useQuery({ queryKey: ["id"], queryFn: getFun });
  console.log("data", data);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="max-w-6xl mx-auto">hello i am mohan krishna shrestha</div>
      <ul className="grid grid-cols-3 gap-3">
        {data?.map((item, index) => (
          <li key={index} className="border p-5">
            <img src={item.image} alt="image" />
            <h1>{item.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
