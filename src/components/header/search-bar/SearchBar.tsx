import { BiSearch } from 'react-icons/bi';
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

export const SearchBar = () => {
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

    return (
        <div className="relative">
            <input
                type="text"
                placeholder='Search...'
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <BiSearch
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
            />
        </div>
    );
};