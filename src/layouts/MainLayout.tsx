import {Outlet} from "react-router-dom";
import {Header} from "../components/header/Header.tsx";

const MainLayout = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <header>
                <Header/>
            </header>
            <main className='pt-[100px]'>
                <div className='py-10 bg-gray-50 dark:bg-gray-900 min-h-[90dvh]'>
                    <Outlet/>
                </div>
            </main>
        </div>
    );
};

export default MainLayout;