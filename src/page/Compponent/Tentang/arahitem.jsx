import React from "react";
import { motion } from "framer-motion";

const ArahItem = ({item}) => (
  <div className="box-border bg-black rounded-full my-20 mx-20 p-4 ">
    <p className="text-center font-lato text-cust-white">{item}</p>
  </div>
);

export default ArahItem;