import React from 'react';
import YouTube from 'react-youtube';

export default class YoutubeVideo extends React.Component {
	render() {
		const opts = {
			height: '440',
			width: '440',
			playerVars: {
				autoplay: 1
			}
		};

		return (
			<div>
				<YouTube videoId={`${'ll57_Cy8SeE'}`} string text opts={opts} onReady={this._onReady} />
			</div>
		);
	}

	_onReady(event) {
		//event.target.pauseVideo();
        event.target.autoplay = true;
	}
}
