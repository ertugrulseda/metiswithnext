import { sanityClient, urlFor } from '../lib/sanity';
import ProductCard from '../components/productcard';
import ImageLoader from '../components/imageloader';
import Modal from '../components/modal';
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
	const [modalOpen, setModalOpen] = useState(false);
	const [url, setUrl] = useState("");

	const handleClick = (e) =>{
		setModalOpen(true);
		setUrl(e.target.src);
		console.log(e.target.src);
	}

	return (
		<div className={styles.productswrapper}>
			{productItems.sort().map((item) => (
				<ProductCard key={item._id}>
					<Image src={urlFor(item.image).bg("ff00").url()} alt={item?.title} onClick={handleClick} />
				</ProductCard>
			))}
			<Modal
				shown={modalOpen}
				close={() => {
					setModalOpen(false);
				}}
			>
				<Image src={url} />
			</Modal>
		</div>
	);
}

const Image = ({ src, alt, onClick }) => {
	const [imageLoaded, setImageLoaded] = useState(false);
	const handleOnLoad = () => {
		setImageLoaded(true);
	};

	return (
		<div style={{ position: 'relative', width: '100%', height: '100%' }}>
			<img alt={alt} loading="lazy" src={src} className={`${styles.image} `} onLoad={handleOnLoad} onClick={onClick} />
			{!imageLoaded && <ImageLoader />}
		</div>
	);
};


export async function getServerSideProps() {
	const productItems = await sanityClient.fetch(productItemsQuery);
	return { props: { productItems } };
}
