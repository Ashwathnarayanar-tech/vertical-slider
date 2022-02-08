import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import VerticalSlider from '../VerticalSlider'

configure({ adapter: new Adapter() })

test('Slider component rendered properly', () => {
  const component = shallow(
    <VerticalSlider
      arrayOfImages={[
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg',
      ]}
    />
  )
  const SliderExists = component.find('Slider').exists()
  expect(SliderExists).toBe(true)
})
test('arrayOfImages props exists.', () => {
  const component = shallow(
    <VerticalSlider
      arrayOfImages={[
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg',
      ]}
    />
  )
  const arrayOfImages = component.find('div Slider').exists()
  expect(arrayOfImages).toBe(true)
})
