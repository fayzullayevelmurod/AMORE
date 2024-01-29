import { useState } from "react"
import assets from "../../assets"
import { ValentineCardTwo } from "./valentine-card-two"

// eslint-disable-next-line react/prop-types, no-unused-vars
export const ValentineCard = ({ contentTop, contentBottom }) => {
	const [show] = useState(true);


	return (
		<div className="valentine-card">
			<div className="arrow-img">
				<img className="desktop-arrow__img" src={assets.arrow} alt="arrow img" />
				<img className="media-arrow__img" src={assets.mediaArrow} alt="" />
			</div>
			<div style={{ display: show ? 'block' : 'none' }}>
				<a href="#!" style={{ display: 'block', marginBottom: '46px' }} className="valentine-card__title">{contentTop}</a>
				<a href="#!" className="valentine-card__title">{contentBottom}</a>
			</div>
			<div className="heart-img">
				<img src={assets.heart} alt="heart img" />
			</div>
			<ValentineCardTwo show={show} />
		</div>
	)
}
