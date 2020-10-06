import React from "react";
import NavBar from "./Nav/Navbar";

export default function Layout(props: any) {
  return (
    <>
      <NavBar>
        <div className="Layout">
          <div className="Content">{props.children}</div>
        </div>
        <footer className={"footer"}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={"logo"} />
          </a>
        </footer>
      </NavBar>
    </>
  );
}
