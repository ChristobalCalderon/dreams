import "../styles/globals.css";
import "../styles/tailwind.css";
import "../node_modules/react-vis/dist/style.css";

export const App = ({ Component, pageProps }: any) => {
  return (
    <div className={"container"}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
