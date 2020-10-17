import * as React from "react";
import Canvas from "../components/Canvas";
import Layout from "../components/Layout";
import ProgramPhases from "../components/ProgramPhases";

export interface ProgramProps {}

export default function Program(props: ProgramProps) {
  return (
    <div>
      <Layout>
        <ProgramPhases></ProgramPhases>
      </Layout>
    </div>
  );
}
