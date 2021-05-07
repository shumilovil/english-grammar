import React from "react";
import { AbcStreetCategory } from "./AbcStreet/AbcStreetCategory";
import { AbcStreetKidsSubcategory } from "./AbcStreet/AbcStreetKidsSubcategory";
import { FileList } from "../FileList/FileList";
import { TeachersSubcategory } from "./Common/TeachersSubcategory";
import { GrammarSmileCategory } from "./GrammarSmile/GrammarSmileCategory";


// String keys match the category names in state
export const pagesContent = {
    'ABC Street': {
        category: <AbcStreetCategory />,
        subcategory: {
            'Detyam': <AbcStreetKidsSubcategory />,
            'Uchitelyam': <TeachersSubcategory />,
            'Files': <FileList />
        }
    },
    'Grammar Smile': {
        category: <GrammarSmileCategory />,
        subcategory: {
            'Uchitelyam': <TeachersSubcategory />,
            'Files': <FileList />
        }
    },
    'Questions': {
        // category: <GrammarSmileCategory />,
        subcategory: {
            // 'Uchitelyam': <TeachersSubcategory />,
            'Files': <FileList />
        }
    }
};