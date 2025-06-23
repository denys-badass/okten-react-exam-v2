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
                className='py-1 pl-3 pr-9 w-[200px] border border-gray-500 rounded-[20px] focus:outline-0 focus:border-2 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-indigo-500 transition-colors'
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