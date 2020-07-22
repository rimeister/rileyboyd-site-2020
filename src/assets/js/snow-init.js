import { options } from './parts/_options';

if (typeof window.Snow !== 'undefined') {
    window.Snow.setOptions(options);
    window.Snow.init();
}
