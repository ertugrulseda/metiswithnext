import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { sanityClient, urlFor } from '../lib/sanity';
const navbarItemsQuery = `*[_type=="home" && isActive==true]{
	_id,
	icon,
	image,
	title,
  }`;


  export default function Home ( {homeItems }) {
	return (
		<div>
           {
		     homeItems?.length>0 &&
		     homeItems.map((item)=>(
			 <h1>{item.title}</h1>)
	      )
	     }
		</div>	
	);
}
export async function getStaticProps() {
	const homeItems = await sanityClient.fetch(navbarItemsQuery);
	debugger;
	return { props: { homeItems } };
}