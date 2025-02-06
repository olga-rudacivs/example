import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import SignIn from "./components/signIn/signIn";
import SignUp from "./components/signUp/signUp";
import CardR from "./components/card/card";
import Home from "./components/Home/home";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/auth" element={<CardR />}>
          <Route path="/auth/signIn" element={<SignIn />} />{" "}
          {/* путь для первой вкладки */}
          <Route path="/auth/signUp" element={<SignUp />} />{" "}
          {/* путь для второй вкладки */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
