"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const React = require("react");
const enzyme_1 = require("enzyme");
describe('react dom element container test', () => {
    test('simple mount unmount test', () => {
        const $ = enzyme_1.mount(React.createElement(index_1.default, { el: document.createElement('h1') }));
        expect($.html()).toMatch('h1');
        $.setProps({ el: document.createElement('h2') });
        expect($.html()).not.toMatch('h1');
        expect($.html()).toMatch('h2');
        $.setProps({ el: null });
        expect($.html()).toMatch(`<div></div>`);
    });
});
