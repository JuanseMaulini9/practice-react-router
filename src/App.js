import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import UsersPages from "./components/UsersPage";
import Navbar from "./components/Navbar";
import UserPage from "./components/UserPage";
import Dashbhoard from "./components/Dashbhoard";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPages />} />
        <Route path="/usuarios" element={<Navigate to="/users" />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/dashbhoard/*" element={<Dashbhoard />} >
          <Route path="welcome" element={<p>welcome</p>}/>
          <Route path="goodbye" element={<p>goodbye</p>}/>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
