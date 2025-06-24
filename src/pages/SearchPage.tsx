import {useLocation} from "react-router-dom";

export const SearchPage = () => {
    const location = useLocation();
    const {query} = location.state || {};

    // const searchParams = // ... your search params logic

    return (
        <div>
            <h1>Search Results for: {query}</h1>
            {/*<MovieList<ISearchParams>*/}
            {/*    params={searchParams}*/}
            {/*    queryFn={searchService.searchMovies}*/}
            {/*    queryKey="search"*/}
            {/*/>*/}
        </div>
    );
};