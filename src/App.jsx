import "./App.css";
import AboutUs from "./components/aboutUs/AboutUs";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import MainPage from "./components/mainPage/MainPage";
import Navbar from "./components/navbar/Navbar";
import News from "./components/news/News";
import Transport from "./components/transport/Transport";

function App() {
  return (
    <section className="app_container">
      <Navbar />
      <News />
      <MainPage />
      <AboutUs />
      <Transport />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
