import { sanityClient, urlFor } from '../lib/sanity';
import ProductCard from '../components/productcard';
import ImageLoader from '../components/imageloader';
import Modal from '../components/modal';
import styles from '../styles/Products.module.css';
import Image from 'next/image';
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


	const handleClick = (e) => {
		const urlRegex = /url=([^&]+)/;
		const inputString = e.target.src;
		const match = inputString.match(urlRegex);
		if (match) {
			// Eğer eşleşme bulunduysa, URL'yi al
			const foundURL = decodeURIComponent(match[1]);
			console.log(foundURL);
			setModalOpen(true);
			setUrl(foundURL);
			console.log(e.target.src);
		} else {
			console.log("URL bulunamadı");
		}

	}

	return (
		<div className={styles.productswrapper}>
			{

				productItems.sort().map((item) => {
					const url = urlFor(item.image).url();
					const alt = item.icon;

					return (
						(url && alt) && <ProductCard key={item._id}>
							<Image src={url} alt={alt} layout='fill' onClick={handleClick} />
						</ProductCard>)

				})
			}
			<Modal
				shown={modalOpen}
				close={() => {
					setModalOpen(false);
				}}
			>
				<div className={styles.container} >
					<div className={styles.div}>
					<Image src={url} width={"400px"} height={"400px"} alt='dhfhf' />
					</div>
					
					<div  className={styles.div} >
						<h1 style={{textAlign:"center" }}>Açıklama</h1>
						<p style={{textAlign:"center" }}>Deneme</p>
					</div>
				</div>
			</Modal>
		</div>
	);
}

/* const MyImage = ({ src, alt, onClick }) => {
	const [imageLoaded, setImageLoaded] = useState(false);
	const handleOnLoad = () => {
		setImageLoaded(true);
	};

	return (
		<div style={{ position: 'relative', width: '100%', height: '100%' }}>
			<Image src={src} width={"250px"} height={"250px"} alt={alt} />
			{!imageLoaded && <ImageLoader />}
		</div>
	);
}; */


export async function getServerSideProps() {
	const productItems = await sanityClient.fetch(productItemsQuery);
	return { props: { productItems } };
}
