import React, { useState, useEffect } from "react";
import {client} from "./client";
import MainCarousel from "../scenes/home/MainCarousel";

const SanityHeroBanner = () => {
    const [heroBanners, setHeroBanners] = useState(null);

	useEffect(() => {
		const bannerQuery = '*[_type == "banner"]';
		// const bannerData = await client.fetch(bannerQuery);

		client
			.fetch(bannerQuery)
			.then((data) => {
				console.log(data);
				setHeroBanners(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<MainCarousel heroBanners={heroBanners}>
		</MainCarousel>
	);
}

export default SanityHeroBanner