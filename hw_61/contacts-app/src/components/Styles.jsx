import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 10px;
	background-color: #f9f9f9;
	box-shadow: 0 2px 10px #0000001a;
`;

export const Title = styled.h1`
	color: blue;
`;

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-bottom: 20px;
`;

export const Thead = styled.thead`
	background-color: #007bff;
	color: white;
`;

export const Tr = styled.tr`
	border-bottom: 1px solid #ddd;
`;

export const Th = styled.th`
	padding: 10px;
	text-align: left;
	border: 1px solid #ddd;
`;

export const Td = styled.td`
	padding: 10px;
	text-align: left;
	border: 1px solid grey;
`;

export const Tbody = styled.tbody`
	background-color: #d4e0e4;
`;

export const Button = styled.button`
	width: 100px;
	padding: 10px;
	margin: 10px 5px;
	border: none;
	border-radius: 5px;
	background-color: #007bff;
	color: white;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #0056b3;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	margin-bottom: 15px;
`;

export const Input = styled.input`
	width: 400px;
	padding: 10px;
	margin: 5px 0;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-sizing: border-box;
`;
