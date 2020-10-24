import * as React from "react";
import Layout from "../../components/Layout";
import ExercisesDescribtionList from "../../components/ExercisesDescribtionList";

export default function ExercisesPage(props: any) {
  return (
    <div>
      <Layout>
        <ExercisesDescribtionList></ExercisesDescribtionList>
      </Layout>
    </div>
  );
}
