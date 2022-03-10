import 'styled-components';

declare module 'styled-components' {
  interface StyleObjectType {
    [index: string]: string;
  }
  export interface DefaultTheme {
    fontSizes: StyleObjectType;
    colors: StyleObjectType;
  }
}
