// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import Features from "./components/features";
import Reviews from "./components/reviews";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <Banner />
        <Features />
        <Reviews />
      </main>
    </>
  );
}

export default App;
