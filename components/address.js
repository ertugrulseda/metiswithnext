import React from 'react';
import Image from 'next/image';
import styles from '../styles/Address.module.css';

export const Address = () => {
	return (
		<div >
			<div>Adres: 2 Nolu Sanayi sitesi 14.Blok No:53 </div>
			<div>Biga / Çanakkale</div>
			<div>Mail : metisyay@gmail.com </div>
			<div>Telefon: (0286) 316 27 38 - (0286) 317 01 59 </div>
			<div> GSM : 0542 316 27 38 </div>
			<div className={styles.wp}>
				<Image src="/whatsapp.svg" width={24} height={24} alt="metis-whatsapp" />
				<span className={styles.wpNumber}>0544 404 88 98</span>
			</div>
			<div  className={styles.socialmediaicons} >
				<a href="https://www.facebook.com/metis.yaybiga" target="_blank" rel="noreferrer">
					<Image src="/facebook.svg" width={48} height={48} alt="metis-facebook"/>
				</a>
				<a href="https://www.youtube.com/@met-iscelikyay2781" target="_blank" rel="noreferrer">
					<Image src="/youtube.svg" width={48} height={48} alt="metis-youtube"/>
				</a>
				<a href="https://www.instagram.com/metis.yay/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer">
					<Image src="/instagram.svg" width={48} height={48} alt="metis-instagram"/>
				</a>
			</div>
		</div>
	);
};
