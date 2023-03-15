import MeatOnPlate from '../assets/img/meat-2.jpeg';
import { H2 } from './styled/FrontHeader';
import { ImageSecondWrapper, Wrapper } from './styled/Wrappers';

export const HomeSecondBackground = () => {
	return (
		<>
			<Wrapper>
				<div>
					<ImageSecondWrapper
						src={MeatOnPlate}
						alt='man cooking meat'
					></ImageSecondWrapper>
					<H2>REACTAURANGEN</H2>
				</div>
			</Wrapper>
		</>
	);
};
