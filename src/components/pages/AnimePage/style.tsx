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

	> div {
		width: 85%;
		max-height: 90vh;
		overflow-y: scroll;
		padding: 10px;
		background-color: rgb(214, 217, 219);
		box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		div {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 100%;
		}
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

	h3 {
		position: absolute;
		top: 5;
		left: 2;
		z-index: 8;
	}
`;
