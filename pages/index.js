import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { sanityClient, urlFor } from '../lib/sanity';
const navbarItemsQuery = `*[_type=="navbar" && isActive==true]{
	_id,
	icon,
	image,
	title,
  }`;


  export default function Home ( {navbarItems }) {
	return (
		<div>
           {
		     navbarItems?.length>0 &&
		     navbarItems.map((item)=>(
			 <h1>{item.title}</h1>
			)
	      )
	     }
		</div>
	 
	
	);
}
export async function getStaticProps() {
	const navbarItems = await sanityClient.fetch(navbarItemsQuery);
	debugger;
	return { props: { navbarItems } };
}