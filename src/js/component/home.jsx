import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="pictures row justify-content-center mt-3">
				<div className="col-3">
					<Card class="sapo"
						image="https://static.vecteezy.com/system/resources/thumbnails/036/005/652/small_2x/isolated-toad-animal-on-a-transparent-background-format-png.png"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in qup sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis nam nobis ilo aspernatur vitae fugiat numquam repeliat"
					/>
				</div>
				<div className="col-3">
					<Card class="pingüino"
						image="https://static.vecteezy.com/system/resources/thumbnails/011/097/898/small_2x/3d-penguin-model-illustration-png.png"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in qup sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis nam nobis ilo aspernatur vitae fugiat numquam repeliat"
					/>
				</div>
				<div className="col-3">
					<Card class="perro"
						image="https://static.vecteezy.com/system/resources/thumbnails/016/761/881/small_2x/the-dog-smiles-because-he-is-happy-png.png"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in qup sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis nam nobis ilo aspernatur vitae fugiat numquam repeliat"
					/>
				</div>
				<div className="col-3">
					<Card class="jirafa"
						image="https://images.rawpixel.com/image_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjc5LTEzNC14LmpwZw.jpg"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in qup sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis nam nobis ilo aspernatur vitae fugiat numquam repeliat"
					/>
				</div>
			</div>

		</div>
	);
};

export default Home;
