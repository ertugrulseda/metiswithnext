import styles from '../styles/Contact.module.css';
import Map from '../components/map';
import Emailform from '../components/emailform';

const Contact = () => {
	const clickedSendMail = () => {
		console.log('Mail Gönderildi');
	};
	return (
		<div className={styles.contactcontainer}>
			<Map />		
			<Emailform onClick={clickedSendMail} />
		</div>
	);
};
export default Contact;
