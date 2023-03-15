import React from 'react';
import HomeVideo from '../assets/video/new-cutting-video.mp4';
import { H1 } from './styled/FrontHeader';
import { VideoWrapper, Wrapper } from './styled/Wrappers';

export const HomeVideoBackground = () => {
	return (
		<>
			<Wrapper>
				<H1>REACTAURANGEN</H1>
				<VideoWrapper autoPlay loop muted playsInline preload='auto'>
					<source src={HomeVideo} type='video/mp4' />
					Your browser does not support HTML5 videos
				</VideoWrapper>
			</Wrapper>
		</>
	);
};
