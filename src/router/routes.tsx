import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import {WelcomePage} from "../pages/WelcomePage.tsx";
import {MoviesPage} from "../pages/MoviesPage.tsx";
import {SearchPage} from "../pages/SearchPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {index: true, element: <WelcomePage/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: 'search', element: <SearchPage/>},
        ]},
])