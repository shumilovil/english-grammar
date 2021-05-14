import React from 'react';
import { DownloadIcon } from './DownloadIcon';
import { KidIcon } from './KidIcon';
import { TeacherIcon } from './TeacherIcon';

// String keys match the category names in state
export const icons = {
    'detyam': <KidIcon />,
    'uchitelyam': <TeacherIcon />,
    'files': <DownloadIcon />
};