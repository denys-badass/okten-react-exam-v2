import {useSearchParams} from "react-router-dom";

export const useSetPage = () => {
    const [, setQuery] = useSearchParams();

    return (page: string) => {
        setQuery((prev) => {
            const newParams = new URLSearchParams(prev);
            newParams.set('page', page);
            return newParams;
        });
    }
}