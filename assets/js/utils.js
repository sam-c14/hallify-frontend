export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);
export const on = (el, evt, cb) => el.addEventListener(evt, cb);
