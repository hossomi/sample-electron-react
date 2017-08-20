// ========================================
// Electron renderer-process
// There is only one in this sample, so I can use
// a very generic name such as 'client' :)
// ========================================

const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/app.js');

// Important to use on-load!
// As the scripts are loaded in the HTML <head>, this ensures
// the DOM is ready.
window.onload = () => {
    ReactDOM.render(<App name="Hossomi"/>, document.getElementById('content'));
}