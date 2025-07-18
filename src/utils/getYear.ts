export const getYear = (date: string): string => {
    if (!date) {
        return 'Unknown';
    }

    return String(new Date(date).getFullYear());
}