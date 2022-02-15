import 'styled-components';

declare module 'styled-components' {
	// ThemeProvider theme에 적용할 타입으로, theme의 속성과 동일하게 작성
	export interface DefaultTheme {
		color: string;
		// dark: {
		// 	mainBackground: string;
		// 	// neutral color
		// 	title: string;
		// 	primaryText: string;
		// 	secondaryText: string;
		// 	disable: string;
		// 	border: string;
		// 	divider: string;
		// 	background: string;
		// 	tableHeader: string;
		// };
		// light: {
		// 	mainBackground: string;
		// 	// neutral color
		// 	title: string;
		// 	primaryText: string;
		// 	secondaryText: string;
		// 	disable: string;
		// 	border: string;
		// 	divider: string;
		// 	background: string;
		// 	tableHeader: string;
		// 	// point-color
		// 	// point-color
		// };
	}
}
