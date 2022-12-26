import ContentLoader from 'react-content-loader';

const ImageLoader = (props) => {
	return (
		<div style={{ position: 'absolute', left: 0, top: 0 }}>
			<ContentLoader
				speed={2}
				width={250}
				height={250}
				viewBox="0 0 250 250"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
				{...props}
			>
				<rect x="0" y="0" rx="2" ry="2" width="250" height="250" />
			</ContentLoader>
		</div>
	);
};

export default ImageLoader;