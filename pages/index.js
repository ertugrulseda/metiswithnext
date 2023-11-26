import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { sanityClient, urlFor } from '../lib/sanity';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const navbarItemsQuery = `*[_type=="home" && isActive==true] | order(title asc){
	_id,
	icon,
	image,
	title,
  }`;

export default function Home({ homeItems }) {
	return (
		<div className={styles.content} key={""}>
			<Splide
				options={{
					rewind: true,
					width: '80vw',
					perPage: 1,

				}}
				aria-label="Home Page Images">
				{homeItems.map((item) => {
					console.log(urlFor(item.image).url())
					return (<SplideSlide id={item._id} key={item._id}>
						<div className={styles.sliderimage}>
							<Image src={urlFor(item.image).url()}
								width={"969px"}
								height={"356px"}
								alt={item.title}
							/>
						</div>

					</SplideSlide>)
				})}
			</Splide>
		</div>
	);
}
export async function getServerSideProps() {
	const homeItems = await sanityClient.fetch(navbarItemsQuery);
	return { props: { homeItems } };
}
