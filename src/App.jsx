import "./App.css";
import AboutUs from "./components/aboutUs/AboutUs";
import MainPage from "./components/mainPage/MainPage";
import Navbar from "./components/navbar/Navbar";
import Transport from "./components/transport/Transport";

function App() {
  return (
    <>
      <Navbar />
      <MainPage />
      {/* <AboutUs /> */}
      <Transport />
    </>
  );
}

export default App;
