import * as React from "react";
import Layout from "../components/Layout";
import NutritionSchedule from "../components/NutritionSchedule";

export interface NutritionProps {}

export default function Nutrition(props: NutritionProps) {
  return (
    <div>
      <Layout>
        <NutritionSchedule></NutritionSchedule>
      </Layout>
    </div>
  );
}
