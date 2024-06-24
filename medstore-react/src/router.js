// import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
// import ListPosts from "./components/medicine/Dashboard";
// import CreatePost from "./components/medicine/CreateMedicine";
// import ViewPost from "./components/medicine/ViewMedicine";
// import EditPost from "./components/medicine/EditMedicine";

// const router = createBrowserRouter([
//     { path: '', element: <App/> },
//     // { path: '/dashboard', element: <Dashboard/> },
//     { path: '/login', element: <Login/> },
//     { path: '/register', element: <Register/> },
//     { path : '/dashboard' , element : <ListMedicines/> },
//     { path : '/create' , element : <CreatePost/> },
//     { path: '/view/:postId', element: <ViewPost/>},
//     { path : '/edit/:postId', element: <EditPost/>}
// ]);

// export default router;

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ListMedicines from "./components/medicine/Dashboard";
import CreatePost from "./components/medicine/CreateMedicine";
import ViewPost from "./components/medicine/ViewMedicine";
import EditMedine from "./components/medicine/EditMedicine";

const router = createBrowserRouter([
  { path: "", element: <App /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <ListMedicines /> },
  { path: "/create", element: <CreatePost /> },
  { path: "/view/:postId", element: <ViewPost /> },
  { path: "/edit/:postId", element: <EditMedine /> },
]);

export default router;