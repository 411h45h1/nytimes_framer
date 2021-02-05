import React from "react";
import { motion } from "framer";
import { useHistory } from "react-router-dom";

const Button = (props) => {
  const history = useHistory();
  return (
    <motion.button
      id="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => history.push(props.to)}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
