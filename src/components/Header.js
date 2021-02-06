import NYT from "../NYT";
import Button from "./Button";

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
        <Button id="button" to="/Most_Shared">
          Top Stories
        </Button>
      </div>
      <NYT style={{ marginTop: 10 }} />
    </header>
  );
};

export default Header;
