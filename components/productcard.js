import styles from '../styles/Productcard.module.css';

const ProductCard = ({ children }) => {
	return (
		<div className={`${styles.productcardwrapper}`}>
			{children}
		</div>
	);
};

export default ProductCard;
