import React, { useContext, useState } from "react";
import AppContext from "../core/context/appContext";
import ArticleItem from "./ArticleItem";
import { Select } from "semantic-ui-react";
import Button from "./Button";
import NYT from "../NYT";

const TopStories = () => {
  const state = useContext(AppContext);
  const [timesSelection, setTimesSelection] = useState("viewed");

  const { onTopStories, topStories } = state;

  const renderTopStories = (section) => {
    onTopStories(section);
    return timesSelection !== "topStories"
      ? setTimesSelection("topStories")
      : null;
  };

  const storyOption = [
    { key: "us", value: "us", text: "US" },
    { key: "world", value: "world", text: "World" },
    { key: "arts", value: "arts", text: "Arts" },
    { key: "travel", value: "travel", text: "Travel" },
    { key: "books", value: "books", text: "Books" },
    { key: "business", value: "business", text: "Business" },
    { key: "fashion", value: "fashion", text: "Fashion" },
    { key: "food", value: "food", text: "Food" },
    { key: "science", value: "science", text: "Science" },
    { key: "sports", value: "sports", text: "Sports" },
    { key: "health", value: "health", text: "Health" },
    { key: "insider", value: "insider", text: "Insider" },
    { key: "magazine", value: "magazine", text: "Magazine" },
    { key: "movies", value: "movies", text: "Movies" },
    { key: "nyregion", value: "nyregion", text: "New York Region" },
    { key: "obituaries", value: "obituaries", text: "Obituaries" },
    { key: "opinion", value: "opinion", text: "Opinion" },
    { key: "politics", value: "politics", text: "Politics" },
    { key: "home", value: "home", text: "Home" },
    { key: "technology", value: "technology", text: "Technology" },
    { key: "upshot", value: "upshot", text: "The Upshot" },
    { key: "theater", value: "theater", text: "Theater" },
    { key: "t-magazine", value: "t-magazine", text: "T-Magazine" },
    { key: "automobiles", value: "automobiles", text: "Automobiles" },
    { key: "sundayreview", value: "sundayreview", text: "Sunday Review" },
    { key: "realestate", value: "realestate", text: "Realestate" },
  ];

  return (
    <>
      <header
        style={{
          width: "90%",
          marginTop: 5,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button goBack />
        </div>
        <NYT style={{ marginTop: 10 }} />
      </header>
      <div className="NytController">
        <Select
          fluid
          placeholder="Choose a Section"
          options={storyOption}
          onChange={(e, { value }) => renderTopStories(value)}
        />
      </div>
      <div className="NytCont">
        {topStories ? (
          topStories.map((article, k) => (
            <ArticleItem key={k} data={article} topStories />
          ))
        ) : (
          <div
            style={{
              display: "flex",
              height: "70%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Select a section above</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default TopStories;
