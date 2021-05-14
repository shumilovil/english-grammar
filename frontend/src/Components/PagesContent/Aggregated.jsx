import React from "react";
import { AbcStreetCategory } from "./AbcStreet/AbcStreetCategory";
import { AbcStreetKidsSubcategory } from "./AbcStreet/AbcStreetKidsSubcategory";
import { FileList } from "../FileList/FileList";
import { TeachersSubcategory } from "./Common/TeachersSubcategory";
import { GrammarSmileCategory } from "./GrammarSmile/GrammarSmileCategory";


// String keys match the category names in state
export const pagesContent = {
    'abc street': {
        category: <AbcStreetCategory />,
        subcategory: {
            'detyam': <AbcStreetKidsSubcategory />,
            'uchitelyam': <TeachersSubcategory />,
            'files': <FileList />
        }
    },
    'grammar smile': {
        category: <GrammarSmileCategory />,
        subcategory: {
            'uchitelyam': <TeachersSubcategory />,
            'files': <FileList />
        }
    },
    'questions': {
        // category: <GrammarSmileCategory />,
        subcategory: {
            // 'uchitelyam': <TeachersSubcategory />,
            'files': <FileList />
        }
    }
};