import type {FC} from "react";
import type {Sort} from "../../models/IMovieParams.ts";

type SortProps = {
    sort: Sort;
    setSort: (sortBy: Sort) => void;
};

export const SortBar: FC<SortProps> = ({sort, setSort}) => {

    return (
        <>
            <label>Sort by:
                <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className='ml-2' defaultValue='popularity.desc'>
                    <option value='popularity.desc'>Popularity ↓</option>
                    <option value='popularity.asc'>Popularity ↑</option>
                    <option value='title.desc'>Title ↓</option>
                    <option value='title.asc'>Title ↑</option>
                    <option value='primary_release_date.desc'>Release Date ↓</option>
                    <option value='primary_release_date.asc'>Release Date ↑</option>
                    <option value='vote_average.desc'>Rating ↓</option>
                    <option value='vote_average.asc'>Rating ↑</option>
                    <option value='vote_count.desc'>Review ↓</option>
                    <option value='vote_count.asc'>Review ↑</option>
                </select>
            </label>
        </>
    );
};