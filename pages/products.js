import { sanityClient, urlFor } from '../lib/sanity';
import ProductCard from '../components/productcard';
import styles from '../styles/Products.module.css';
const productItemsQuery = `*[_type=="products" && isActive==true]  {
	_id,
	icon,
	image,
	title,
  }`;

export default function Products({ productItems }) {
	return (
		<div className={styles.productswrapper}>
			{productItems.map((item) => (
				<ProductCard>	
					<img src={urlFor(item.image).url()} className={styles.image} />
				</ProductCard>
			))}
		</div>
	);
}

export async function getStaticProps() {
	const productItems = await sanityClient.fetch(productItemsQuery);
	return { props: { productItems } };
}
