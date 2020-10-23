import * as React from "react";
import ExerciseWeight from "../components/ExerciseWeight";
import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";
import WeightsModel from "../pages/api/weights";

export interface WeightsProps {
  data: WeightsModel[];
}

export default function Weights(props: WeightsProps) {
  console.log(props.data);

  return (
    <div>
      <Layout>
        <ExerciseWeight data={props.data} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  console.log("Chris2: " + context.req.headers.cookie);
  const res = await fetch(
    process.env.apiUrl +
      "/api/currentWeights?user=google-oauth2|103690837770829713433",
    {
      headers: context.req ? { cookie: context.req.headers.cookie } : undefined,
    }
  );

  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
}
