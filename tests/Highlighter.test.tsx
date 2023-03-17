import React from 'react'
import renderer from 'react-test-renderer'
import { expect, test } from 'vitest'

import { HighlightComponentProps, Highlighter } from '../src/lib'

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)

  return result as renderer.ReactTestRendererJSON
}

test('Simple test', () => {
  const component = renderer.create(<Highlighter text="Hello word" substrings={['hello']} />)

  const tree = toJson(component)

  expect(tree).toMatchSnapshot()
})

test('Case sensitive', () => {
  const component = renderer.create(
    <Highlighter text="Hello word" substrings={['hello']} caseSensitive />,
  )

  const tree = toJson(component)

  expect(tree).toMatchSnapshot()
})

test('Multiple substrings', () => {
  const component = renderer.create(<Highlighter text="Hello word" substrings={['hello', 'w']} />)

  const tree = toJson(component)

  expect(tree).toMatchSnapshot()
})

test('Multiple substrings case sensitive', () => {
  const component = renderer.create(
    <Highlighter text="Hello word" substrings={['hello', 'w']} caseSensitive />,
  )

  const tree = toJson(component)

  expect(tree).toMatchSnapshot()
})

test('With class name', () => {
  const component = renderer.create(
    <Highlighter text="Hello word" substrings={['hello']} className="highlighter" />,
  )

  const tree = toJson(component)

  expect(tree).toMatchSnapshot()
})

test('Active index and class name', () => {
  const component = renderer.create(
    <Highlighter
      text="Somewhere over the rainbow Bluebirds fly And the dreams that you dream of Dreams really do come true-ooh-ooh Someday I'll wish upon a star Wake up where the clouds are far behind me Where trouble melts like lemon drops High above the chimney tops that's where You'll find me, oh"
      substrings={['the']}
      className="highlighter"
      activeIndex={0}
      activeClassName="active"
    />,
  )
  const tree = toJson(component)

  expect(tree).toMatchSnapshot()

  tree.activeIndex = 1

  expect(tree).toMatchSnapshot()

  tree.activeIndex = 2

  expect(tree).toMatchSnapshot()

  tree.activeIndex = 3

  expect(tree).toMatchSnapshot()

  tree.activeIndex = 4

  expect(tree).toMatchSnapshot()
})

function HighlightComponent({ children, highlightIndex, className }: HighlightComponentProps) {
  return <mark className={`${className} ${highlightIndex % 2 ? 'odd' : 'even'}`}>{children}</mark>
}

test('Highlight component', () => {
  const component = renderer.create(
    <Highlighter
      text="Hello word"
      substrings={['hello']}
      className="highlighter"
      highlightComponent={HighlightComponent}
      unhighlightComponent={({ children, ...props }) => <i {...props}>{children}</i>}
    />,
  )

  const tree = toJson(component)

  expect(tree).toMatchSnapshot()
})
