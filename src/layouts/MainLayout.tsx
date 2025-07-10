import {Outlet} from "react-router-dom";
import {Header} from "../components/header/Header.tsx";

const MainLayout = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <div>
                    <Outlet/>
                </div>
            </main>
        </div>
    );
};

export default MainLayout;