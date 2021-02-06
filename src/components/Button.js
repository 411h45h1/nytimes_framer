import React from "react";
import { motion } from "framer";
import { useHistory } from "react-router-dom";

const Button = (props) => {
  const history = useHistory();
  return props.goBack ? (
    <motion.div
      id="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => history.goBack()}
    >
      <i class="fas fa-arrow-left"></i>
    </motion.div>
  ) : (
    <motion.div
      id="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => history.push(props.to)}
    >
      {props.children}
    </motion.div>
  );
};

export default Button;
