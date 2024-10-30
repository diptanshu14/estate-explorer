import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Single from "./pages/single/Single"

const App = () => {
  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/list",
        element: <List />
      },
      {
        path: "/:id",
        element: <Single />
      }
    ]
  }])

  return (
    <RouterProvider router={router} />
  )
}

export default App