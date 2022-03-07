import { css } from "@emotion/react";

export const globalStyle = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
	}

	html {
		height: 100%;
		font-size: 16px;
	}

	/* body {
		display: flex;
		flex-direction: column;
		height: 100%;
		margin: 0;
		overflow: auto;
		font-size: 1rem;
		-webkit-overflow-scrolling: touch;

		/* scroll-snap-type: y mandatory;
		position: relative; } */
`;
