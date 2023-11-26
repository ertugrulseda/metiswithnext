import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import { useRef } from 'react';


  export default function Navbar () {

	const mainpage = useRef(null);
	const production = useRef(null);
	const products = useRef(null);
	const about = useRef(null);
	const contact = useRef(null);

	const clicked = (page) => {
		console.log('clicked');
		//seçilen spanın rengini değiştir
		if (page === 'mainpage') {
			mainpage.current.style.color = '#ffbb05';
			production.current.style.color = 'black';
			products.current.style.color = 'black';
			about.current.style.color = 'black';
			contact.current.style.color = 'black';
		}
		if (page === 'production') {
			production.current.style.color = '#ffbb05';
			mainpage.current.style.color = 'black';
			products.current.style.color = 'black';
			about.current.style.color = 'black';
			contact.current.style.color = 'black';
		}
		if (page === 'products') {
			products.current.style.color = '#ffbb05';
			production.current.style.color = 'black';
			mainpage.current.style.color = 'black';
			about.current.style.color = 'black';
			contact.current.style.color = 'black';
		}
		if (page === 'about') {
			about.current.style.color = '#ffbb05';
			products.current.style.color = 'black';
			production.current.style.color = 'black';
			mainpage.current.style.color = 'black';
			contact.current.style.color = 'black';
		}
		if (page === 'contact') {
			contact.current.style.color = '#ffbb05';
			about.current.style.color = 'black';
			products.current.style.color = 'black';
			production.current.style.color = 'black';
			mainpage.current.style.color = 'black';
		}
	};

	return (
		<header className={styles.toolbar}>
			<div className={styles.brandlink}>
				<Link href="/">
					<a onClick={() => clicked('mainpage')}>
						<div>
							<Image src="/LogoKucuk.svg" width={200} height={92} alt="metiş-logo"/>
						</div>
						<span className={styles.span}>Hayata Esneklik Katıyoruz</span>
					</a>
				</Link>
			</div>
			<nav className={styles.nav}>
				<ul className={styles.navlist}>             
					<li className={styles.navlistitem}>
						<Link href="/">
							<a onClick={() => clicked('mainpage')}>
								<div className={styles.imgdiv}>
									<Image src="/home-icon.svg" width={50} height={50} alt="metiş-ana-sayfa"/>
								</div>
								<span ref={mainpage} className={styles.span}>
									{' '}
									Ana Sayfa
								</span>
							</a>
						</Link>
					</li>
					<li className={styles.navlistitem}>
						<Link href="/production">
							<a onClick={() => clicked('production')}>
								<div className={styles.imgdiv}>
									<Image src="/projects-icon.svg" width={50} height={50} alt="metiş-projeler"/>
								</div>
								<span ref={production} className={styles.span}>
									{' '}
									Üretim
								</span>
							</a>
						</Link>
					</li>
					<li className={styles.navlistitem}>
						<Link href="/products">
							<a onClick={() => clicked('products')}>
								<div className={styles.imgdiv}>
									<Image src="/featured-icon.svg" width={50} height={50} alt="metiş-ürünler" />
								</div>
								<span ref={products} className={styles.span}>
									{' '}
									Ürünler
								</span>
							</a>
						</Link>
					</li>
					<li className={styles.navlistitem}>
						<Link href="/about">
							<a onClick={() => clicked('about')}>
								<div className={styles.imgdiv}>
									<Image src="/about-icon.svg" width={50} height={50} alt="metiş-hakkımızda"/>
								</div>
								<span ref={about} className={styles.span}>
									{' '}
									Hakkımızda
								</span>
							</a>
						</Link>
					</li>
					<li className={styles.navlistitem}>
						<Link href="/contact">
							<a onClick={() => clicked('contact')}>
								<div className={styles.imgdiv}>
									<Image src="/contact-icon.svg" width={50} height={50} alt="metiş-iletişim"/>
								</div>
								<span ref={contact} className={styles.span}>
									{' '}
									İletişim
								</span>
							</a>
						</Link>
					</li>
				</ul>
			</nav>	
		</header>
	);
};




