export const removeUnderscoreAndName = (text) => text
    .replace('Shumilova_N_N_', '')
    .replace(/_/g, ' ');