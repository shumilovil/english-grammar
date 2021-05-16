import React from "react";
import { AbcStreetCategory } from "./AbcStreet/AbcStreetCategory";
import { AbcStreetKidsSubcategory } from "./AbcStreet/AbcStreetKidsSubcategory";
import { FileList } from "../FileList/FileList";
import { TeachersSubcategory } from "./Common/TeachersSubcategory";
import { GrammarSmileCategory } from "./GrammarSmile/GrammarSmileCategory";
import { GrammarSmileKidsSubcategory } from "./GrammarSmile/GrammarSmileKidsSubcategory";
import { QuestionsCategory } from "./Questions/QuestionsCategory";
import { QuestionsKidsSubcategory } from "./Questions/QuestionsKidsSubcategory";


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
            'detyam': <GrammarSmileKidsSubcategory />,
            'uchitelyam': <TeachersSubcategory />,
            'files': <FileList />
        }
    },
    'questions': {
        category: <QuestionsCategory />,
        subcategory: {
            'detyam': <QuestionsKidsSubcategory/>,
            'uchitelyam': <TeachersSubcategory />,
            'files': <FileList />
        }
    }
};