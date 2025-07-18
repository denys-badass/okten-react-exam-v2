import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
    MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight
} from "react-icons/md";
import type {FC} from "react";
import styles from "./Pagination.module.css";
import {useSetPage} from "../../hooks/useSetPage.ts";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
}

export const Pagination: FC<PaginationProps> = ({currentPage, totalPages}) => {
    const setPage = useSetPage();
    const MAX_PAGES = totalPages < 500 ? totalPages : 500;

    return (
        <nav className={styles.nav}>
            <div className={styles.buttonContainer}>
                <button onClick={() => setPage('1')} disabled={currentPage === 1} className={styles.paginationButton}>
                    <MdOutlineKeyboardDoubleArrowLeft/>
                </button>
                <button onClick={() => setPage(String(currentPage - 1))} disabled={currentPage === 1} className={styles.paginationButton}>
                    <MdOutlineKeyboardArrowLeft/>
                </button>
            </div>
            <p>{currentPage}</p>
            <div className={styles.buttonContainer}>
                <button onClick={() => setPage(String(currentPage + 1))} disabled={currentPage === MAX_PAGES} className={styles.paginationButton}>
                    <MdOutlineKeyboardArrowRight/>
                </button>
                <button onClick={() => setPage(String(MAX_PAGES))} disabled={currentPage === MAX_PAGES} className={styles.paginationButton}>
                    <MdOutlineKeyboardDoubleArrowRight/>
                </button>
            </div>
        </nav>
    );
};