import React from 'react';
import Image from 'next/image';
import styles from '../styles/Address.module.css';

export const Address = () => {
	return (
		<div>
			<div>Adres: 2 Nolu Sanayi sitesi 14.Blok No:53 </div>
			<div>Biga / Çanakkale</div>
			<div>Mail : info@metisyay.com</div>
			<div>Telefon: (0286)316 27 38 - (0286)317 01 59 </div>
			<div> GSM : 0542 316 27 38 - 0532 432 98 70 </div>
			<div className={styles.wp}>
				<Image src="/whatsapp.svg" width={24} height={24} />
				<span className={styles.wpNumber}>0544 404 88 98</span>
			</div>
			<div>
				<Image src="/facebook.svg" width={48} height={48} />
				<Image src="/youtube.svg" width={48} height={48} />
				<Image src="/instagram.svg" width={48} height={48} />
			</div>
		</div>
	);
};
