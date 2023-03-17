import './index.css'

import { useState } from 'react'
import { HighlightComponentProps, Highlighter } from 'react-highlight-string'

function HighlightComponent({ children, ...restProps }: HighlightComponentProps) {
  return <b {...restProps}>{children}</b>
}

const components = [
  <Highlighter text="Hello word" substrings={['hello']} />,
  <Highlighter text="Hello word" substrings={['hello']} caseSensitive />,
  <Highlighter text="Hello word" substrings={['hello', 'w']} />,
  <Highlighter text="Hello word" substrings={['hello', 'w']} caseSensitive />,
  <Highlighter text="Hello word" substrings={['hello']} className="highlighter" />,
  <Highlighter
    text="Hello word"
    substrings={['hello']}
    highlightComponent={HighlightComponent}
    unhighlightComponent={({ children, ...props }) => <i {...props}>{children}</i>}
  />,
]

function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="layout">
      {components.map((component, index) => (
        <div className="layout_item" key={index}>
          {component}
        </div>
      ))}
      <div className="layout_item">
        <button
          onClick={() => {
            setActiveIndex((prev) => Math.max(prev - 1, 0))
          }}
        >
          (-) Decrease active index
        </button>
        <button
          onClick={() => {
            setActiveIndex((prev) => Math.min(prev + 1, 3))
          }}
        >
          (+) Increase active index
        </button>
        <br />
        <br />
        <div>
          <span>Active Index:</span> {activeIndex}
        </div>
        <br />
        <Highlighter
          text="Somewhere over the rainbow Bluebirds fly And the dreams that you dream of Dreams really do come true-ooh-ooh Someday I'll wish upon a star Wake up where the clouds are far behind me Where trouble melts like lemon drops High above the chimney tops that's where You'll find me, oh"
          substrings={['the']}
          className="highlighter"
          activeIndex={activeIndex}
          activeClassName="active"
        />
      </div>
    </div>
  )
}

export default App
