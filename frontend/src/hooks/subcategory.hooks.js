import { useMemo } from "react";


export const useAvailableSubcategories = (currentCategory, subcategories) => {
    const availableSubcategories = useMemo(() => {
        return currentCategory
            && subcategories
                .filter(subcategory => currentCategory.subcategoryIds.includes(subcategory._id));
    }, [currentCategory, subcategories]);
    return availableSubcategories;
};
