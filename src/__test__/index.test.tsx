import ReactDOMElementContainer from '../index';
import * as React from 'react';
import { mount } from 'enzyme';

describe('react dom element container test', () => {
  test('simple mount unmount test', () => {
    const $ = mount(<ReactDOMElementContainer el={document.createElement('h1')}/>);
    expect($.html()).toMatch('h1');
    $.setProps({ el: document.createElement('h2') });
    expect($.html()).not.toMatch('h1');
    expect($.html()).toMatch('h2');
    $.setProps({ el: null });
    expect($.html()).toMatch(`<div></div>`);
  });
});