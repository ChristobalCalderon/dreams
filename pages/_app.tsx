import "../styles/globals.css";
import "../styles/tailwind.css";

export const App = ({ Component, pageProps }: any) => {
  return (
    <div className={"container"}>
      <Component {...pageProps} />;
    </div>
  );
};

export default App;
