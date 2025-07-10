import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

export const useAppSearch = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (!location.pathname.startsWith('/search')) {
            setQuery('');
        }
    }, [location.pathname]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const rawQuery = query.trim();
        if (e.key === 'Enter') {
            if (rawQuery) {
                navigate(`/search?query=${(rawQuery)}&page=1`, { replace: true });
            } else {
                navigate('/movies');
            }
        }
    };

    return {
        query,
        setQuery,
        handleKeyDown
    };
}