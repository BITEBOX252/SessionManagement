import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLogin from "./pages/auth/UserLogin";
import UserRegister from "./pages/auth/UserRegister";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
function App() {
  
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />

          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
