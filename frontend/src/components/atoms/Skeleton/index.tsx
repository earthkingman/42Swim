import styled, { css } from "styled-components";

interface SProps {
  height?: string;
  width?: string;
}

const Skeleton = styled.div<SProps>`
	width: 500px;
	height: 120px; /* change height to see repeat-y behㅊavior */

	background-image:
			linear-gradient( 100deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80% ),
			linear-gradient( grey 20px, transparent 0 ),
			linear-gradient( grey 20px, transparent 0 ),
			linear-gradient( grey 20px, transparent 0 ),
			linear-gradient( grey 20px, transparent 0 );

		background-repeat: no-repeat;

		background-size:
			50px 200px, /* highlight */
			150px 200px,
			350px 200px,
			300px 200px,
			250px 0px;

		background-position:
			0 0, /* highlight */
			0 0,
			0 40px,
			0 80px,
			0 120px;

		animation: shine 1s infinite;
	}

	@keyframes shine {
		to {
			background-position:
				100% 0, /* move highlight to right */
				0 0,
				0 40px,
				0 80px,
				0 120px;
	${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
	${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
`;

export default Skeleton;
