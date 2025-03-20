import { useMutation, useQuery } from "@tanstack/react-query";
import { message } from "antd";
import axios from "axios";
import React from "react";
const getFun = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};
const postFun = async (payload) => {
  const { data } = await axios.post(
    "https://fakestoreapi.com/products",
    payload
  );
  return data;
};
function Home() {
  const { data } = useQuery({ queryKey: ["id"], queryFn: getFun });
  const mutation = useMutation({
    mutationFn: postFun,
    onSuccess: (res) => {
      console.log("res", res);
      message.success(res.id);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = () => {
    const payload = {
      title: "rajan",
      description: "gg",
      price: 56,
      category: "ghjv",
      image: "adjgsau",
    };
    mutation.mutate(payload);
  };
  console.log("data", data);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="max-w-6xl mx-auto">hello i am mohan krishna shrestha</div>
      <button onClick={onSubmit}>Submit</button>
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
