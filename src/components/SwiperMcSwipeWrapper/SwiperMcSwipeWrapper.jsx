import React from 'react';
import './SwiperMcSwipeWrapper.scss';
import phones from '../../assets/img/phones.png';

const SwiperMcSwipeWrapper = () => {
	return (
		<div id="phonesWrapper">
			<div className="untitledClassName">
				<img src={phones} id="phonesImg" />
				<div className="animationContainer">
					<div id="phoneViewport">
						<div className="phoneScreen frame-one" />
						<div className="phoneScreen frame-two" />
						<div className="phoneScreen frame-three" />
						<div className="phoneScreen frame-four" />
						<div className="phoneScreen frame-five" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SwiperMcSwipeWrapper;
