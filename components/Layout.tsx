import { Box, Button } from "@material-ui/core";
import React from "react";
import { useFetchUser } from "../lib/user";
import NavBar from "./Nav/NavBarAmazing";
import { useRouter } from "next/router";

export default function Layout(props: any) {
  const { user, loading } = useFetchUser();
  const router = useRouter();

  if (!loading && !user) {
    router.push("/api/login");
  }

  return (
    <>
      {loading && <p>Loading login info...</p>}

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
