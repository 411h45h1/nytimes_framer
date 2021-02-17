import React from "react";
import { Button as SButton } from "semantic-ui-react";
import NYT from "../NYT";
import Button from "./Button";

const { app } = window.require("electron").remote;
const Header = () => {
  return (
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
        <Button to="/Top_Stories">Top Stories</Button>
        <SButton.Group compact id="NoDrag">
          <SButton
            size="small"
            color="black"
            content="Click here for the repository"
            as={"a"}
            href="https://github.com/AhmedAlihashi/nytimes"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SButton
            icon="sync alternate"
            color="blue"
            onClick={() => {
              app.relaunch();
              app.exit();
            }}
          />
          <SButton
            icon="power off"
            color="red"
            onClick={() => {
              app.quit();
            }}
          />
        </SButton.Group>
      </div>
      <NYT style={{ marginTop: 10 }} home />
    </header>
  );
};

export default Header;
