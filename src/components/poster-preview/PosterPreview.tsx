import type {FC} from "react";
import {FaRegWindowClose} from "react-icons/fa";
import ReactDOM from "react-dom";

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
        <div className='fixed inset-0 z-100 flex items-center justify-center' onClick={handleClose}>
            <div className='absolute inset-0 bg-gray-900/70 backdrop-blur-sm'></div>

            <div className='relative z-101 rounded-lg overflow-hidden shadow-2xl'
                 onClick={(e) => e.stopPropagation()}>
                <img
                    src={fullPosterUrl}
                    alt='Movie Poster'
                    className='w-full h-full object-contain'
                />
                <button
                    className='absolute top-4 right-4 text-gray-200 hover:text-indigo-600 bg-gray-800/50 hover:bg-gray-800/80 rounded-full p-2 transition-all duration-300 cursor-pointer'
                    onClick={handleClose}
                >
                    <FaRegWindowClose size={24} />
                </button>
            </div>
        </div>,
        document.body
    );
};