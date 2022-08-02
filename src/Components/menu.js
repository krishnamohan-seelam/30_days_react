import {
  Navbar,
  NavbarHeading,
  NavbarGroup,
  NavbarDivider,
  Button,
  Icon,
} from "@blueprintjs/core";
import { IconName } from "@blueprintjs/icons";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Navbar>
        <NavbarGroup>
          <NavbarHeading>Learn React in 30 Days</NavbarHeading>
          <NavbarDivider />
          <Button icon="home">
            <Link to="/">Home</Link>
          </Button>
          <Button icon="user">
            <Link to="/profile">Profile</Link>
          </Button>
          <Button icon="list">
            <Link to="/mapnumbers">list</Link>
          </Button>
          <Button icon="color-fill">
            <Link to="/colorbox">colorbox</Link>
          </Button>
        </NavbarGroup>
      </Navbar>
    </div>
  );
}

export default Menu;
