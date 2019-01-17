import window from 'global/window';

export const minWidth600px = () => window.matchMedia('(min-width: 600px)').matches;
export const minWidth960px = () => window.matchMedia('(min-width: 960px)').matches;
export const minWidth1280px = () => window.matchMedia('(min-width: 1280px)').matches;
export const minWidth1920px = () => window.matchMedia('(min-width: 1920px)').matches;
