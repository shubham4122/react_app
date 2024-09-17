import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const HomePage = lazy(() => import("./components/Home"));
const Cart = lazy(() => import("./components/Cart"));
// const Login = lazy(() => import("./components/Login"));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
