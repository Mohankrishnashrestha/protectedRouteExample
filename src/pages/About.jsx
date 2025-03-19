import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
const getFunc = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};
function About() {
  const { data } = useQuery({ queryKey: ["id"], queryFn: getFunc });
  console.log("data", data);
  return <div>About</div>;
}

export default About;
