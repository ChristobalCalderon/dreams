import * as React from "react";
import Layout from "../components/Layout";
import TimerCountDown from "../components/TimerCountDown";

export interface TimerProps {}

export default function Timer(props: TimerProps) {
  return (
    <div>
      <Layout>
        <TimerCountDown></TimerCountDown>
      </Layout>
    </div>
  );
}
