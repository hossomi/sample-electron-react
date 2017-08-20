const React = require('react');

module.exports = ({ name }) => (
    <h1>Hello {name || 'world'}</h1>
);