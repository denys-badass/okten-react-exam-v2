import { BiSearch } from 'react-icons/bi';
import styles from "./SearchBar.module.css";
import {useAppSearch} from "./useAppSearch.ts";

export const SearchBar = () => {
    const { query, setQuery, handleKeyDown } = useAppSearch();

    return (
        <div className={styles.searchInput}>
            <input
                type="text"
                placeholder='Search...'
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <BiSearch
                className={styles.searchIcon}
                size={18}
            />
        </div>
    );
};