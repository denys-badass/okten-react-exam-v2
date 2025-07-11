import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import {WelcomePage} from "../pages/welcome-page/WelcomePage.tsx";
import {MoviesPage} from "../pages/MoviesPage.tsx";
import {SearchPage} from "../pages/SearchPage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {LoginRoute} from "../components/login-route/LoginRoute.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {index: true, element: <WelcomePage/>},
            {path: 'movies', element: <LoginRoute><MoviesPage/></LoginRoute>},
            {path: 'search', element: <LoginRoute><SearchPage/></LoginRoute>},
            {path: 'login', element: <LoginPage/>}
        ]},
])