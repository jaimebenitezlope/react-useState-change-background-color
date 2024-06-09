import styled from 'styled-components';

const StyledDiv = styled.div`
	width: 200px;
	height: 200px;
	background-color: ${props => (props.isRed ? 'red' : 'green')};
`;

const StyledButton = styled.button`
	margin-top: 35%;
	margin-left: 35%;
	width: 50px;
	height: 50px;
	background-color: white;
`;

export { StyledDiv, StyledButton };
