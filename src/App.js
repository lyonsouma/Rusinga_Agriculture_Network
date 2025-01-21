import "./App.css";
import NavBar from "./components/Navbar";
import { Helmet } from "react-helmet";
import AppRoutes from "./Routes/routes"; // Ensure this file contains valid routes.
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rusinga Agriculture Network</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <NavBar />
      <AppRoutes /> 
      <Footer/>
    </div>
  );
}

export default App;
