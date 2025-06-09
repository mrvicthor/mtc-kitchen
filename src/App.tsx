// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import Features from "./components/features";
import Reviews from "./components/reviews";
import Galleries from "./components/gallery";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <Banner />
        <Features />
        <Reviews />
        <Galleries />
      </main>
    </>
  );
}

export default App;
