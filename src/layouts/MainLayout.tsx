import {Outlet} from "react-router-dom";
import {Header} from "../components/header/Header.tsx";

const MainLayout = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                    <Outlet/>
            </main>
        </div>
    );
};

export default MainLayout;