import { useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../core/context/appContext";
import ArticleItem from "./ArticleItem";
import Button from "./Button";

const NytCont = () => {
  const state = useContext(AppContext);

  const { mostViewed, mostSocialMediaShared, mostEmailed } = state;
  let { sid } = useParams();

  return (
    <>
      <div className="NytController">
        <Button id="button" to="/most/Most_Viewed">
          Most Viewed Articles
        </Button>
        <Button id="button" to="/most/Most_Shared">
          Most Shared Articles
        </Button>
        <Button id="button" to="/most/Most_Emailed">
          Most Emailed Articles
        </Button>
      </div>
      <div className="NytCont">
        {sid === "Most_Shared"
          ? mostSocialMediaShared &&
            mostSocialMediaShared.map((article, k) => (
              <ArticleItem key={k} data={article} />
            ))
          : sid === "Most_Emailed"
          ? mostEmailed &&
            mostEmailed.map((article, k) => (
              <ArticleItem key={k} data={article} />
            ))
          : mostViewed &&
            mostViewed.map((article, k) => (
              <ArticleItem key={k} data={article} />
            ))}
      </div>
    </>
  );
};

export default NytCont;
