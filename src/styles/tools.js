/** 

02. Tools
The next layer houses your globally available tooling – namely mixins and functions. Any mixin or function that does not need accessing globally should belong in the partial to which it relates. The Tools layer comes after the Settings layer because a mixin may require one of the global settings as a default parameter. Examples of global tools might be gradient mixins, font-sizing mixins and so on.

*/

// https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md
export const media = {
  tablet: (...args) => css`
    @media (max-width: var(--tablet) {
      ${ css(...args)}
    })
  `
}