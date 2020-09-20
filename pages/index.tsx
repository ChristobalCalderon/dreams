import Head from "next/head";
import connectToDatabase from "../util/mongodb";
import Nav from "../components/nav";
import styles from "../styles/Home.module.css";

export default function Home({ isConnected }) {
  return (
    <div className={"container"}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"main"}>
        <div>
          <Nav />
          <div className="py-20">
            <h1 className="text-5xl text-center text-accent-1">
              Next.js + Tailwind CSS
            </h1>
          </div>
        </div>

        {isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
            for instructions.
          </h2>
        )}

        <h1 className={"title"}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={"description"}>
          Get started by editing <code className={"code"}>pages/index.js</code>
        </p>

        <div className={"grid"}>
          <a href="https://nextjs.org/docs" className={"card"}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={"card"}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={"card"}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={"card"}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={"footer"}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={"logo"} />
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = client.isConnected();

  return {
    props: { isConnected },
  };
}
