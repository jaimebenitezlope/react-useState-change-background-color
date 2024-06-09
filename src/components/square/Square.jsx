import { useState } from 'react';
import { StyledButton, StyledDiv } from './square.styles';

const Square = () => {
	const [isRed, setIsRed] = useState(true);

	const changeColor = () => {
		setIsRed(!isRed);
	};

	return (
		<>
			<StyledDiv isRed={isRed}>
				<StyledButton onClick={changeColor}>Change Color</StyledButton>
			</StyledDiv>
		</>
	);
};

export default Square;
