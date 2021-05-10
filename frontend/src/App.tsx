import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Routes from "routes";
import { BrowserRouter } from "react-router-dom";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
}