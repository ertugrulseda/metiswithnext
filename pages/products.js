import { sanityClient, urlFor } from '../lib/sanity';
import ProductCard from '../components/productcard';
import ImageLoader from '../components/imageloader';
import styles from '../styles/Products.module.css';
// import ContentLoader from 'react-content-loader';
import { useState } from 'react';
const productItemsQuery = `*[_type=="products" && isActive==true 
] | order(title asc) {
	_id,
	icon,
	image,
	title,
  }`;

export default function Products({ productItems }) {
	return (
		<div className={styles.productswrapper}>
			{productItems.sort().map((item) => (
				<ProductCard key={item._id}>
					<Image src={urlFor(item.image).bg("ff00").url()} alt={item?.title} />
				</ProductCard>
			))}
		</div>
	);
}

const Image = ({ src, alt }) => {
	const [ imageLoaded, setImageLoaded ] = useState(false);

	const handleOnLoad = () => {
		console.log('asdfasdfsadfsadf');
		setImageLoaded(true);
	};

	return (
		<div style={{ position: 'relative', width:'100%', height:'100%' }}>
			<img alt={alt} loading="lazy" src={src} className={`${styles.image} `} onLoad={handleOnLoad} />
			{!imageLoaded && <ImageLoader />}
		</div>
	);
};


export async function getServerSideProps() {
	const productItems = await sanityClient.fetch(productItemsQuery);
	return { props: { productItems } };
}
