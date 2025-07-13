import type {FC} from "react";
import {FaRegWindowClose} from "react-icons/fa";
import ReactDOM from "react-dom";
import styles from "./PosterPreview.module.css";

type PosterPreviewProps = {
    posterUrl: string;
    setShowPoster: (show: boolean) => void;
}

export const PosterPreview: FC<PosterPreviewProps> = ({posterUrl, setShowPoster}) => {
    const handleClose = () => {
        setShowPoster(false);
    };

    const fullPosterUrl = posterUrl
        ? `${import.meta.env.VITE_MOVIE_IMAGE_URL}/w500${posterUrl}`
        : '/poster-placeholder.jpg';

    return ReactDOM.createPortal(
        <div className={styles.posterContainer} onClick={handleClose}>
            <div className={styles.posterBg}></div>

            <div className={styles.posterBlock} onClick={(e) => e.stopPropagation()}>
                <img
                    src={fullPosterUrl}
                    alt='Movie Poster'
                    className={styles.posterImg}
                />
                <button
                    className={styles.closeBtn}
                    onClick={handleClose}
                >
                    <FaRegWindowClose size={24} />
                </button>
            </div>
        </div>,
        document.body
    );
};