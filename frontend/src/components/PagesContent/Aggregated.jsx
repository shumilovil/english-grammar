import React from 'react';
import { AbcStreetCategory } from './AbcStreet/AbcStreetCategory';
import { AbcStreetKidsSubcategory } from './AbcStreet/AbcStreetKidsSubcategory';
import { TeachersSubcategory } from './Common/TeachersSubcategory';
import { GrammarSmileCategory } from './GrammarSmile/GrammarSmileCategory';
import { GrammarSmileKidsSubcategory } from './GrammarSmile/GrammarSmileKidsSubcategory';
import { QuestionsCategory } from './Questions/QuestionsCategory';
import { QuestionsKidsSubcategory } from './Questions/QuestionsKidsSubcategory';
import { FilesPage } from './../FilesPage/FilesPage';


// String keys match the category names in state
export const pagesContent = {
    'abc street': {
        category: <AbcStreetCategory />,
        subcategories: {
            'detyam': <AbcStreetKidsSubcategory />,
            'uchitelyam': <TeachersSubcategory />,
            'files': <FilesPage />
        }
    },
    'grammar smile': {
        category: <GrammarSmileCategory />,
        subcategories: {
            'detyam': <GrammarSmileKidsSubcategory />,
            'uchitelyam': <TeachersSubcategory />,
            'files': <FilesPage />
        }
    },
    'questions': {
        category: <QuestionsCategory />,
        subcategories: {
            'detyam': <QuestionsKidsSubcategory />,
            'uchitelyam': <TeachersSubcategory />,
            'files': <FilesPage />
        }
    }
};