import window from 'global/window';
import document from 'global/document';

export const width = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

export const height = () => window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;
