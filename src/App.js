import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs } from "./formSource";
import ListUser from "./pages/user/ListUser";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./components/Layout";
import ListCompany from "./pages/company/ListCompany";
import EditUser from "./pages/user/EditUser";
import ViewUser from "./pages/user/ViewUser";
import CreateUser from "./pages/user/CreateUser";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />} >
              <Route index element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="companies" element={<ProtectedRoute><ListCompany /></ProtectedRoute>} />
              <Route path="users" element={<ProtectedRoute><ListUser /></ProtectedRoute>} />
              <Route path="users/view" element={<ProtectedRoute><ViewUser /></ProtectedRoute>} />
              <Route path="users/:userId" element={<ProtectedRoute><EditUser /></ProtectedRoute>} />
              <Route path="users/new" element={<ProtectedRoute><CreateUser inputs={userInputs} title="Add New User" /></ProtectedRoute>} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
