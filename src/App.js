import logo from "./logo.svg";
import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import Head from "./pages/Head";
import Productspage from "./pages/Products";
import Routesone from "./components/Routes";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routesone />
      {/* <Form /> */}
    </div>
  );
}

export default App;
