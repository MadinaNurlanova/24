import MainPage from "./pages/MainPage";
import PokemonPage from "./pages/PokemonPage";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Outlet from "./components/Outlet";

const App = () => { 

    const router = createBrowserRouter([
        {
            path: "/",
            element:<Outlet><MainPage /></Outlet> 
        },
        {
            path: "pokemon/:name",
            element:<Outlet><PokemonPage /></Outlet> 
        }
    ])
    
    return (
        <>
            <RouterProvider router= {router}/>           
        </>
    );
};

export default App;