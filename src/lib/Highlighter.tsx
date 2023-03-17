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

          return (
            // to avoid passing highlightIndex and activeIndex props to html components
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <HighlightComponent
              className={
                isActive ? mergeClassNames(highlightClassName, activeClassName) : highlightClassName
              }
              style={isActive ? { ...highlightStyle, ...activeStyle } : highlightStyle}
              key={index}
              {...(typeof HighlightComponent !== 'string' && { highlightIndex, activeIndex })}
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
