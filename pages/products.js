import { sanityClient, urlFor } from '../lib/sanity';
import ProductCard from '../components/productcard';
import styles from '../styles/Product.module.css';
const productItemsQuery = `*[_type=="products" && isActive==true] {
	_id,
	icon,
	image,
	title,
  }`;

export default function Products({ productItems }) {
	return <div>{productItems.map((item) => <img src={urlFor(item.image).url()} className={styles.image} />)}</div>;
}

export async function getStaticProps() {
	const productItems = await sanityClient.fetch(productItemsQuery);
	return { props: { productItems } };
}
