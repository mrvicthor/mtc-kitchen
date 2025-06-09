// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import Features from "./components/features";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <Banner />
        <Features />
      </main>
    </>
  );
}

export default App;
