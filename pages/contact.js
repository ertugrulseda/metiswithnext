import styles from '../styles/Contact.module.css';
import Map from '../components/map';
import Emailform from '../components/emailform';

const Contact = () => {
	return (
		<div className={styles.contactcontainer}>
			<Map />	
			{
				/*
				<Emailform  />
				*/
			}	
			
		</div>
	);
};
export default Contact;
