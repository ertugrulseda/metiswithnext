import styles from '../styles/Production.module.css';
import YoutubeVideo from '../components/youtubevideo';

const Production = () => {
	return (
		<div className={styles.productionwrapper}>
			<div className={styles.griditem}>
				<YoutubeVideo />{' '}
			</div>
			<div className={styles.griditem}>
				<div className={styles.history}>
					<p>
						Kurulduğu günden itibaren Çelik Yay konusunda üretim yapan uzman kadroya sahip olan şirketimiz;
						Beyaz eşya ve elektronik sektörü, Oyuncak sektörü, Savunma sanayi, Otomotiv sektörü ve iddialı
						olduğumuz Tarım sektöründe talepler doğrultusunda; her türlü
					</p>

					<h5>Baskı yayları, basma yay, form yay, itici yaylar, helezon yay,</h5>
					<h5>Çekme yayları, gergi yayı, gerdirme yay, kurma yay</h5>
					<h5>Paslanmaz yay, krom çelik yaylar,halka segman,mibzer yayı</h5>
					<h5>D kopça, S kanca, D kanca, R pim, kopilya, r firkete</h5>
					<h5>Tel-Form yay,ot tırmık yayı,T tırmık yayı,kapı kolu yayları</h5>
					<h5>Trambolin yayı, elek yayı, zirai alet yayları, tente yayları,askı yayı</h5>
					<h5>0,20mm ile 40mm arasında ki tüm yayların</h5>

					<p>
						üretiminde hizmet vermektedir.Hizmetlerimiz imalat sonrası; Isıl işlem, Taşlama, Galvaniz
						kaplama, Paketleme ve Yurtiçi ve Yurtdışı lojistik operasyonlarını da kapsamaktadır.
					</p>
				</div>
			</div>
		</div>
	);
};
export default Production;
