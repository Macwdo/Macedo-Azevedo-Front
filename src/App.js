import { 
  createBrowserRouter, 
  RouterProvider, 
  Outlet,
  Navigate, 
} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Processos from "./pages/processos";
import Login from "./pages/login";
import Register from "./pages/register";
import "./style.scss";

const Layout = () => {
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ]
  },
  {
    path: "/processos",
    element: <Processos />,
  },
 {
  path: "/login",
  element: <Login />,
 },
 {
  path: "/register",
  element: <Register />,
 },
 {
  path: "/*",
  element: <Navigate to="/" replace={true}/>
 }
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
