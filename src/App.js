import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/users" element={<ProtectedRoute><List /></ProtectedRoute>} />
            <Route path="/users/:userId" element={<ProtectedRoute><Single /></ProtectedRoute>} />
            <Route path="/users/new" element={<ProtectedRoute><New inputs={userInputs} title="Add New User" /></ProtectedRoute>} />
            <Route path="/products" element={<ProtectedRoute><List /></ProtectedRoute>} />
            <Route path="/products/:productId" element={<ProtectedRoute><Single /></ProtectedRoute>} />
            <Route path="/products/new" element={<ProtectedRoute><New inputs={productInputs} title="Add New Product" /></ProtectedRoute>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
