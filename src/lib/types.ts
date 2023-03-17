import { GetChunksType } from 'highlight-string'
import { ComponentType, CSSProperties, HTMLAttributes, ReactHTML } from 'react'

type WithActiveIndex = {
  /**
   * The class name to be applied to an active match. Use along with activeIndex
   */
  activeClassName?: string
  /**
   * Specify the match index that should be actively highlighted. Use along with activeClassName
   */
  activeIndex: number
  /**
   * The inline style to be applied to an active match. Use along with activeIndex
   */
  activeStyle?: CSSProperties
}

type WithoutActiveIndex = {
  activeClassName?: never
  activeIndex?: never
  activeStyle?: never
}

export type HighlightComponentProps = {
  activeIndex: number
  highlightIndex: number
  /**
   * CSS class or classes that will contain `activeClassName` and `highlightClassName` if they were provided
   */
  className?: string
} & HTMLAttributes<Element>

export type HighlighterProps = GetChunksType &
  (WithActiveIndex | WithoutActiveIndex) & {
    /**
     * CSS class name applied to the outer/wrapper span
     */
    className?: string
    /**
     * 	CSS class name applied to highlighted text or object mapping search term matches to class names.
     */
    highlightClassName?: string
    /**
     * Inline styles applied to highlighted text
     */
    highlightStyle?: CSSProperties
    /**
     * Type of tag to wrap around highlighted matches. Defaults to mark but can also be a React component (class or functional) */
    highlightComponent?: keyof ReactHTML | ComponentType<HighlightComponentProps>
    /**
     * CSS class name applied to unhighlighted text
     */
    unhighlightClassName?: string
    /**
     * Inline styles applied to unhighlighted text
     */
    unhighlightStyle?: CSSProperties
    /**
     * 	Type of tag applied to unhighlighted parts. Defaults to React Fragment but can also be a React component (class or functional)
     */
    unhighlightComponent?: keyof ReactHTML | ComponentType<HTMLAttributes<Element>>
  } & HTMLAttributes<HTMLSpanElement>
