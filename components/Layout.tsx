import React from "react";
import NavBar from "./Nav/NavBarAmazing";

export default function Layout(props: any) {
  return (
    <>
      <NavBar>
        <div className="Layout">
          <div className="Content">{props.children}</div>
        </div>
      </NavBar>
    </>
  );
}
