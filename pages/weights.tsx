import * as React from "react";
import ExerciseWeight from "../components/ExerciseWeight";
import Layout from "../components/Layout";

export interface WeightsProps {}

export default function Weights(props: WeightsProps) {
  return (
    <div>
      <Layout>
        <ExerciseWeight />
      </Layout>
    </div>
  );
}
