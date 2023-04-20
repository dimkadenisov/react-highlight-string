import { getChunks } from 'highlight-string'

import { HighlighterProps } from './types'
import { mergeClassNames } from './utils'

export function Highlighter({
  text,
  substrings,
  caseSensitive,
  sanitize,
  activeClassName,
  activeIndex,
  activeStyle,
  highlightClassName,
  highlightStyle,
  highlightComponent: HighlightComponent = 'mark',
  unhighlightClassName,
  unhighlightStyle,
  unhighlightComponent: UnhighlightComponent = 'span',
  ...htmlProps
}: HighlighterProps) {
  const chunks = getChunks({
    text,
    substrings,
    caseSensitive,
    sanitize,
  })

  let highlightIndex = -1

  return (
    <span {...htmlProps}>
      {chunks.map(({ text, highlighted }, index) => {
        if (highlighted) {
          highlightIndex++
          const isActive = activeIndex === highlightIndex

          return typeof HighlightComponent === 'string' ? (
            <HighlightComponent
              className={
                isActive ? mergeClassNames(highlightClassName, activeClassName) : highlightClassName
              }
              style={isActive ? { ...highlightStyle, ...activeStyle } : highlightStyle}
              key={index}
            >
              {text}
            </HighlightComponent>
          ) : (
            <HighlightComponent
              className={
                isActive ? mergeClassNames(highlightClassName, activeClassName) : highlightClassName
              }
              style={isActive ? { ...highlightStyle, ...activeStyle } : highlightStyle}
              key={index}
              highlightIndex={highlightIndex}
              activeIndex={activeIndex}
            >
              {text}
            </HighlightComponent>
          )
        }

        return (
          <UnhighlightComponent
            className={unhighlightClassName}
            style={unhighlightStyle}
            key={index}
          >
            {text}
          </UnhighlightComponent>
        )
      })}
    </span>
  )
}
