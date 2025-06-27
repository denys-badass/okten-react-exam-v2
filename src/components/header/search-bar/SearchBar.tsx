import { BiSearch } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

export const SearchBar = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const rawQuery = query.trim();
        if (e.key === 'Enter') {
            if (rawQuery) {
                navigate('/search', {state: {query: rawQuery}});
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