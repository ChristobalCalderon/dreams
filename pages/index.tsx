import * as React from "react";
import Layout from "../components/Layout";
import Reviews from "../components/Start/Reviews";

export interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <div>
      <Layout>
        <Reviews></Reviews>
      </Layout>
    </div>
  );
}
