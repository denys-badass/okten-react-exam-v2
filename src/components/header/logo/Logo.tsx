import {Link} from "react-router-dom";

export const Logo = () => {
    return (
        <div className='w-1/3 h-full flex items-center'>
            <Link to={'/'}>
                <img src="/main-logo.svg" alt="MovieHub logo"/>
            </Link>
        </div>
    );
};