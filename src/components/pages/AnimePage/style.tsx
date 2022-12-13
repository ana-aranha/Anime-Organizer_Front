import styled from "styled-components";

export const PagePopUp = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.1);
	z-index: 5;

	div {
		width: 85%;
		padding: 10px;
		background-color: rgb(214, 217, 219);
		box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
	}
`;
