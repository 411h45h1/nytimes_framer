import { useContext } from "react";
import { motion } from "framer";
import AppContext from "../core/context/appContext";
import ArticleItem from "./ArticleItem";

const NytCont = () => {
  const state = useContext(AppContext);

  const { mostViewed, mostEmailed, mostSocialMediaShared } = state;

  return (
    <div className="NytCont">
      {mostViewed &&
        mostViewed.map((article, k) => <ArticleItem key={k} data={article} />)}
    </div>
  );
};

export default NytCont;
