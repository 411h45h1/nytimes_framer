import React from "react";
import { motion } from "framer";
import { useHistory } from "react-router-dom";
import { Button as SButton } from "semantic-ui-react";

const Button = (props) => {
  const history = useHistory();
  return props.goBack ? (
    <SButton icon="reply" onClick={() => history.goBack()} color="black" />
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
