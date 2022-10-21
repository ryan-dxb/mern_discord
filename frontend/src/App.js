import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/authPages/LoginPage/LoginPage";
import RegisterPage from "./pages/authPages/RegisterPage/RegisterPage";
import Dashboard from "./pages/authPages/Dashboard/Dashboard";
import AlertNotification from "./components/shared/AlertNotification";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <AlertNotification />
    </>
  );
}

export default App;
