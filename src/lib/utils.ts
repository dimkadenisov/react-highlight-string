export function mergeClassNames(...classNames: (string | null | undefined)[]): string {
  return classNames.filter(Boolean).join(' ')
}
