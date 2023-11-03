import styles from '../styles/About.module.css';
import { sanityClient, urlFor } from '../lib/sanity';
import Image from 'next/image'
const aboutItemsQuery = `*[_type=="about" && isActive==true] | order(icon asc){
	_id,
	icon,
	image,
	title,
  }`;
export default function About({ aboutItems }) {
	return (
		<div>
			<div className={styles.gridcontainer}>
				<div className={styles.griditem}>
					<Image src={urlFor(aboutItems[0].image).url()} />
				</div>
				<div className={styles.griditem}>
					<h4>BİZ KİMİZ?</h4>
					<p className={styles.paragraph}>
						Metiş yay 1978 yılında Mehmet Ertuğrul tarafından kurulmuştur. İlk olarak küçük bir atölyede yay
						üretimine başlayan Met-iş, yaptığı kaliteli ürünleriyle hızla büyüyerek 1998 yılında
						şirketleşmiştir. Deneyimli kadrosu ve sürekli yenilenen makina parkuru ile günlük üretim
						kapasitesini 900.000 adet yay üretim kapasitesine ulaştırmıştır. Kurulduğu ilk andan itibaren
						kaliteye verdiği önem, müşteri memnuniyeti ve zoru başarma azmi sayesinde yay sektöründe
						tanınmış ve bu ilkelerinden asla ödün vermemiştir.Firmamızın değişmez prensipleri; daima kalite,
						hizmet, zamanında teslim, müşteri memnuniyeti ve uygun fiyat olmuştur.
					</p>
				</div>

				<div className={styles.griditem}>
					<h4>NE YAPARIZ?</h4>
					<p className={styles.paragraph}>
						Tüm karmaşıklıkları kucaklayıp,olumsuzlukları fırsata çevirme becerimiz ile işimize değer katıp
						fark yaratmak; Müşterilerimizin güvenilir çözüm ortağı olmak ve çalışanlarımızın mutluluk
						düzeyini yükseltmek; Çevremize ve paydaşlarımıza olan sorumluluklarımızı yerine getirmek ve
						bugünden daha ileriye taşımak için varız. ‘’Üretim de başarı ve sürekliliğin teminatı, Hizmette
						dürüstlük ve Kalitedir.’’ Prensibi ile çalışan Met-İş Çelik Yay ailesi olarak sizlere bugün ve
						gelecekte en kaliteli hizmeti uygun fiyata vermeyi temin ederiz
					</p>
				</div>
				<div className={styles.griditem}>
					<img src={urlFor(aboutItems[1].image).url()} />
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const aboutItems = await sanityClient.fetch(aboutItemsQuery);
	return { props: { aboutItems } };
}
