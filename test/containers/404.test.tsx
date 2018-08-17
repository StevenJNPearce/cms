import React from 'react'
import { mount } from 'enzyme'
import Page404, {
  headerText,
  homepageUrl,
  docsUrl,
  faqUrl,
} from '@containers/404'

const expectedValues = {
  headerText,
  numberOfLinks: 3,
  homepageUrl,
  docsUrl,
  faqUrl,
}

describe('/404 page', () => {
  it(`should render an h2 with text: "${expectedValues.headerText}"`, () => {
    const wrapper = mount(<Page404 />)
    expect(
      wrapper
        .find('h2')
        .at(0)
        .text()
    ).toEqual(expectedValues.headerText)
  })

  it(`should render ${expectedValues.numberOfLinks} links`, () => {
    const wrapper = mount(<Page404 />)
    expect(wrapper.find('li a').length).toEqual(expectedValues.numberOfLinks)
  })

  it(`should render ${expectedValues.homepageUrl} links`, () => {
    const wrapper = mount(<Page404 />)
    expect(
      wrapper
        .find('li a')
        .at(0)
        .prop('href')
    ).toEqual(expectedValues.homepageUrl)
  })

  it(`should render ${expectedValues.faqUrl} links`, () => {
    const wrapper = mount(<Page404 />)
    expect(
      wrapper
        .find('li a')
        .at(1)
        .prop('href')
    ).toEqual(expectedValues.faqUrl)
  })

  it(`should render ${expectedValues.docsUrl} links`, () => {
    const wrapper = mount(<Page404 />)
    expect(
      wrapper
        .find('li a')
        .at(2)
        .prop('href')
    ).toEqual(expectedValues.docsUrl)
  })
})
