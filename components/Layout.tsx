import { Box, Button } from "@material-ui/core";
import React from "react";
import { useFetchUser } from "../lib/user";
import NavBar from "./Nav/NavBarAmazing";

export default function Layout(props: any) {
  const { user, loading } = useFetchUser();

  return (
    <>
      {loading && <p>Loading login info...</p>}
      {!loading && !user && (
        <Button
          variant="contained"
          color="primary"
          href="/api/login"
          style={{ margin: "20px" }}
        >
          Login in
        </Button>
      )}
      {user && (
        <NavBar>
          <div className="Layout">
            <div className="Content">{props.children}</div>
          </div>
        </NavBar>
      )}
    </>
  );
}
