import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Home from './Pages/Home/Home'
import Blogs from "./Pages/Blogs/Blogs";

const route = createBrowserRouter([
  {path: '/', element: <Header />, children: [
    {index: true, element: <Home />},
    {path: 'blogs', element: <Blogs />}
  ]}
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={route}>
        <Header />
      </RouterProvider>
    </div>
  );
}

export default App;
