import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
    MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight
} from "react-icons/md";
import type {FC} from "react";
import style from "./Pagination.module.css";
import {useSetPage} from "../../hooks/useSetPage.ts";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
}

export const Pagination: FC<PaginationProps> = ({currentPage, totalPages}) => {
    const setPage = useSetPage();
    const MAX_PAGES = totalPages < 500 ? totalPages : 500;

    return (
        <nav className='flex justify-center items-center gap-10'>
            <div className='flex items-center justify-center gap-2'>
                <button onClick={() => setPage('1')} disabled={currentPage === 1} className={style.paginationButton}>
                    <MdOutlineKeyboardDoubleArrowLeft/>
                </button>
                <button onClick={() => setPage(String(currentPage - 1))} disabled={currentPage === 1} className={style.paginationButton}>
                    <MdOutlineKeyboardArrowLeft/>
                </button>
            </div>
            <p>{currentPage}</p>
            <div className='flex items-center justify-center gap-2'>
                <button onClick={() => setPage(String(currentPage + 1))} disabled={currentPage === MAX_PAGES} className={style.paginationButton}>
                    <MdOutlineKeyboardArrowRight/>
                </button>
                <button onClick={() => setPage(String(MAX_PAGES))} disabled={currentPage === MAX_PAGES} className={style.paginationButton}>
                    <MdOutlineKeyboardDoubleArrowRight/>
                </button>
            </div>
        </nav>
    );
};