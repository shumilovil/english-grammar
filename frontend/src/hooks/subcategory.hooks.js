import { useMemo } from "react";


export const useAvailableSubcat = (currentCategory, subcategories) => {
    const availableSubcategories = useMemo(() => {
        return currentCategory
            && subcategories
                .filter(subcategory => currentCategory.subcategoryIds.includes(subcategory._id));
    }, [currentCategory, subcategories]);
    return availableSubcategories;
};
