import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs } from "./formSource";
import ListUser from "./pages/user/list/ListUser";
import AddNewUser from "./pages/user/add/AddNewUser";
import ViewUser from "./pages/user/view/ViewUser";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./components/Layout";
import CompanyList from "./pages/company/list/CompanyList";

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
              <Route path="companies" element={<ProtectedRoute><CompanyList /></ProtectedRoute>} />
              <Route path="users" element={<ProtectedRoute><ListUser /></ProtectedRoute>} />
              <Route path="users/:userId" element={<ProtectedRoute><ViewUser /></ProtectedRoute>} />
              <Route path="users/new" element={<ProtectedRoute><AddNewUser inputs={userInputs} title="Add New User" /></ProtectedRoute>} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
