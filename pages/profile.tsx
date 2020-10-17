import * as React from "react";
import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";

export interface ProfileProps {}

export default function Profile(props: ProfileProps) {
  const { user, loading } = useFetchUser();

  return (
    <div>
      <Layout>
        {user && (
          <div>
            <h3>Profile (client rendered)</h3>
            <img src={user.picture} alt="user picture" />
            <p>nickname: {user.nickname}</p>
            <p>name: {user.name}</p>
          </div>
        )}
      </Layout>
    </div>
  );
}
