// Create DOM
const { window } = new JSDOM('<!doctype html><html><body><div id="root-app"></div></body></html>', { url: 'http://localhost/' });

global.window = window;
global.document = window.document;