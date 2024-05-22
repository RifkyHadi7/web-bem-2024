import React from "react";
import { motion } from "framer-motion";

const ArahItem = ({item}) => (
  <motion.div
              initial={{ opacity: 0, x:-100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  duration: 3.0,
                  damping: 15,
                  stiffness: 50,
                },
              }}  className="box-border bg-black rounded-full my-20 mx-20 p-4 ">
    <p className="text-center font-lato text-cust-white">{item}</p>
    </motion.div>
);

export default ArahItem;