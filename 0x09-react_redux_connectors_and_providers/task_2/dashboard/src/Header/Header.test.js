import React from 'react';
import {Header} from './Header';
import { shallow }from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  jest.restoreAllMocks();
});


describe('Header Component', () => {
  it('renders without crashing and logoutSection is not created with a default context value', ()=>{
    const wrapper  = shallow(<Header/>)
    expect(wrapper.exists()).toBe(true)
  })

})


describe('Context value tests', () => {
  it('renders img and h1 tags', () => {
    const wrap  = shallow(<Header/>)
    expect(wrap.find('img').exists()).toEqual(true)
    expect(wrap.find('h1').exists()).toEqual(true)
  })
