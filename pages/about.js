import styles from '../styles/About.module.css';
import { sanityClient, urlFor } from '../lib/sanity';
const aboutItemsQuery = `*[_type=="about" && isActive==true] | order(icon asc){
	_id,
	icon,
	image,
	title,
  }`;
const About = ({ aboutItems }) => {
	return (
		<div className={styles.gridcontainer}>
			<div className={styles.griditem}>
				{aboutItems[0].title}
				<img src={urlFor(aboutItems[0].image).url()} />
			</div>
			<div className={styles.griditem}>
				<h4>BİZ KİMİZ?</h4>
				<span>
					Metiş yay 1978 yılında Mehmet Ertuğrul tarafından kurulmuştur. İlk olarak küçük bir atölyede yay
					üretimine başlayan Met-iş, yaptığı kaliteli ürünleriyle hızla büyüyerek 1998 yılında
					şirketleşmiştir. Deneyimli kadrosu ve sürekli yenilenen makina parkuru ile günlük üretim
					kapasitesini 900.000 adet yay üretim kapasitesine ulaştırmıştır. Kurulduğu ilk andan itibaren
					kaliteye verdiği önem, müşteri memnuniyeti ve zoru başarma azmi sayesinde yay sektöründe tanınmış ve
					bu ilkelerinden asla ödün vermemiştir.Firmamızın değişmez prensipleri; daima kalite, hizmet,
					zamanında teslim, müşteri memnuniyeti ve uygun fiyat olmuştur.
				</span>
			</div>
			<div className={styles.griditem}>
				<h4>NE YAPARIZ?</h4>
				<span>
					Tüm karmaşıklıkları kucaklayıp,olumsuzlukları fırsata çevirme becerimiz ile işimize değer katıp fark
					yaratmak; Müşterilerimizin güvenilir çözüm ortağı olmak ve çalışanlarımızın mutluluk düzeyini
					yükseltmek; Çevremize ve paydaşlarımıza olan sorumluluklarımızı yerine getirmek ve bugünden daha
					ileriye taşımak için varız. ‘’Üretim de başarı ve sürekliliğin teminatı, Hizmette dürüstlük ve
					Kalitedir.’’ Prensibi ile çalışan Met-İş Çelik Yay ailesi olarak sizlere bugün ve gelecekte en
					kaliteli hizmeti uygun fiyata vermeyi temin ederiz
				</span>
			</div>
			<div className={styles.griditem}>
				{aboutItems[1].title}
				<img src={urlFor(aboutItems[1].image).url()} />
			</div>
		</div>
	);
};
export default About;

export async function getStaticProps() {
	const aboutItems = await sanityClient.fetch(aboutItemsQuery);
	return { props: { aboutItems } };
}
