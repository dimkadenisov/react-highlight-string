Tiny react component to highlight given string in text. Written in **TypeScript**. Based on [highlight-string](https://github.com/dimkadenisov/highlight-string).

## Usage

Just pass a text and an array of strings to search for.

```tsx
import ReactDOM from 'react-dom/client'
import { Highlighter } from 'react-highlight-string'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Highlighter text="Hello word" substrings={['hello']} />,
)
```

## API

### `Highlighter`

| Parameter            | Type                                                        | Description                                                                                                                     |
| -------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| text                 | `string`                                                    | Text to search and highlight. **Required.**                                                                                     |
| substrings           | `Array<string>`                                             | Array of strings to search for. **Required.**                                                                                   |
| caseSensitive        | `boolean`                                                   | Pass `true` if search should be case sensitive. `false` by default.                                                             |
| sanitize             | `(text: string) => string`                                  | Sanitize function.                                                                                                              |
| activeClassName      | `string`                                                    | The class name to be applied to an active match. Use along with activeIndex.                                                    |
| activeIndex          | `number`                                                    | Specify the match index that should be actively highlighted. Use along with activeClassName.                                    |
| activeStyle          | `CSSProperties`                                             | The inline style to be applied to an active match. Use along with activeIndex.                                                  |
| className            | `string`                                                    | CSS class name applied to the outer/wrapper span.                                                                               |
| highlightClassName   | `string`                                                    | CSS class name applied to highlighted text or object mapping search term matches to class names.                                |
| highlightStyle       | `CSSProperties`                                             | Inline styles applied to highlighted text.                                                                                      |
| highlightComponent   | `keyof ReactHTML \| ComponentType<HighlightComponentProps>` | Type of tag to wrap around highlighted matches. Defaults to mark but can also be a React component (class or functional).       |
| unhighlightClassName | `string`                                                    | CSS class name applied to unhighlighted text.                                                                                   |
| unhighlightStyle     | `CSSProperties`                                             | Inline styles applied to unhighlighted text.                                                                                    |
| unhighlightComponent | `keyof ReactHTML \| ComponentType<HTMLAttributes<Element>>` | Type of tag applied to unhighlighted parts. Defaults to React Fragment but can also be a React component (class or functional). |
| \*                   |                                                             | Any other html attribute for wrapper `span`.                                                                                    |

### `HighlightComponent`

| Parameter      | Type     | Description                                                                                                                            |
| -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| activeIndex    | `number` | Passed from parent component.                                                                                                          |
| highlightIndex | `number` | Passed from parent component.                                                                                                          |
| className      | `string` | CSS class or classes that will contain `activeClassName` and `highlightClassName` if they were provided. Passed from parent component. |

## License

MIT
