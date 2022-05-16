export const usePreventSubmit = () => {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
                e.preventDefault();
                return false;
            }
        
    }

    return handleKeyDown
}