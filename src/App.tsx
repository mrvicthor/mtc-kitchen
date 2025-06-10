import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import Features from "./components/features";
import Reviews from "./components/reviews";
import Galleries from "./components/gallery";
import Footer from "./components/footer";

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
      <Footer />
    </>
  );
}

export default App;
