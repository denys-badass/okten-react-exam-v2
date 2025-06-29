import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
    MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight
} from "react-icons/md";
import type {FC} from "react";
import './Pagination.css'
import {useSetPage} from "../../hooks/useSetPage.ts";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
}

export const Pagination: FC<PaginationProps> = ({currentPage, totalPages}) => {
    const setPage = useSetPage();
    const MAX_PAGES = 500;

    return (
        <nav className='flex justify-center items-center gap-10'>
            <div className='flex items-center justify-center gap-2'>
                <button onClick={() => setPage('1')} disabled={currentPage === 1}>
                    <MdOutlineKeyboardDoubleArrowLeft/>
                </button>
                <button onClick={() => setPage(String(currentPage - 1))} disabled={currentPage === 1}>
                    <MdOutlineKeyboardArrowLeft/>
                </button>
            </div>
            <p>{currentPage}</p>
            <div className='flex items-center justify-center gap-2'>
                <button onClick={() => setPage(String(currentPage + 1))} disabled={currentPage === MAX_PAGES || currentPage === totalPages}>
                    <MdOutlineKeyboardArrowRight/>
                </button>
                <button onClick={() => setPage(String(MAX_PAGES))} disabled={currentPage === MAX_PAGES || currentPage === totalPages}>
                    <MdOutlineKeyboardDoubleArrowRight/>
                </button>
            </div>
        </nav>
    );
};