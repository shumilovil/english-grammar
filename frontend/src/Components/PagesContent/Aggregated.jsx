import React from "react";
import { AbcStreetCat } from "./AbcStreet/AbcStreetCat";
import { AbcStreetChildrenSubcat } from "./AbcStreet/AbcStreetChildrenSubcat";
import { AbcStreetFilesSubcat } from "./AbcStreet/AbcStreetFilesSubcat";
import { AbcStreetTeachersSubcat } from "./AbcStreet/AbcStreetTeachersSubcat";
import { GrammarSmileCat } from "./Categories/GrammarSmile/GrammarSmileCat";



export const pagesContent = {
    'ABC Street': {
        category: <AbcStreetCat />,
        subcategory: {
            'Detyam': <AbcStreetChildrenSubcat />,
            'Uchitelyam': <AbcStreetTeachersSubcat />,
            'Files': <AbcStreetFilesSubcat />
        }
    },
    'Grammar Smile': {
        category: <GrammarSmileCat />
    }
};