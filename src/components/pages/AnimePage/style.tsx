import styled from "styled-components";

export const PagePopUp = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 5;

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 85%;
		padding: 10px;
		background-color: rgb(214, 217, 219);
		box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
	}

	p {
		margin-top: 20px;
		text-align: justify;
	}

	h3,
	h2 {
		font-weight: bold;
		margin: 20px;
	}
`;
