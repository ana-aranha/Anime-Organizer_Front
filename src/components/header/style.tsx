import styled from "styled-components";

export const HeaderStyle = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 70px;
	background-color: #335470;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #ffffff;
	padding-top: 10px;

	h1 {
		font-size: 35px;
		font-family: "Saira Stencil One", cursive;
	}
`;

export const DivButton = styled.button`
	border-style: none;
	color: #ffffff;
	background-color: rgba(82, 182, 253, 1);
	width: 10%;
	height: 50px;
	border-radius: 5px;
	font-size: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Form = styled.form`
	gap: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	align-items: center;
	input {
		margin: 5px 0;
		width: 40%;
		max-width: 800px;
		//min-width: 300px;
		height: 50px;
		border-radius: 5px;
		padding-left: 10px;
		font-size: 20px;
		border: 1px solid #d4d4d4;
		text-align: center;
	}
`;
