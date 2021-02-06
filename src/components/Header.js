import { useParams } from "react-router-dom";
import NYT from "../NYT";
import Button from "./Button";

const Header = () => {
  const { page } = useParams;
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
      </div>
      <NYT style={{ marginTop: 10 }} home />
    </header>
  );
};

export default Header;
