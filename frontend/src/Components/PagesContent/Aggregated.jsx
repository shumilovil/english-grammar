import React from "react";
import { AbcStreetCat } from "./AbcStreet/AbcStreetCat";
import { AbcStreetChildrenSubcat } from "./AbcStreet/AbcStreetChildrenSubcat";
import { FileList } from "../FileList/FileList";
import { TeachersSubcat } from "./Common/TeachersSubcat";
import { GrammarSmileCat } from "./GrammarSmile/GrammarSmileCat";


// String keys match the category names in state
export const pagesContent = {
    'ABC Street': {
        category: <AbcStreetCat />,
        subcategory: {
            'Detyam': <AbcStreetChildrenSubcat />,
            'Uchitelyam': <TeachersSubcat />,
            'Files': <FileList />
        }
    },
    'Grammar Smile': {
        category: <GrammarSmileCat />,
        subcategory: {
            'Uchitelyam': <TeachersSubcat />,
            'Files': <FileList />
        }
    },
    'Questions': {
        // category: <GrammarSmileCat />,
        subcategory: {
            // 'Uchitelyam': <TeachersSubcat />,
            'Files': <FileList />
        }
    }
};