import styles from '../styles/Map.module.css';
import { Address } from '../components/address';
const Map = () => {
	return (
		<div className={styles.mapcontainer}>
			<iframe
				className={styles.map}
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.8147842139283!2d27.250752314798984!3d40.235420174571345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b6b3eaefeaead9%3A0x81bca99306bbd799!2zTUVUxLDFniDDh0VMxLBLIFlBWSBTQU4uIFZFIFTEsEMuIExURC7FnlTEsA!5e0!3m2!1str!2str!4v1593108828005!5m2!1str!2str"
				frameborder="0"
				allowfullscreen=""
				aria-hidden="false"
				tabindex="0"
			/>
			<Address />
		</div>
	);
};

export default Map;
