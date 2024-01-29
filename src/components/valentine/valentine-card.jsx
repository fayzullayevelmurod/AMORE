import { useState } from "react"
import assets from "../../assets"
import { ValentineCardTwo } from "./valentine-card-two"

// eslint-disable-next-line react/prop-types, no-unused-vars
export const ValentineCard = ({ contentTop, contentBottom }) => {
	const [show] = useState(true);


	return (
		<div className="valentine-card">
			<div className="arrow-img">
				<img src={assets.arrow} alt="arrow img" />
			</div>
			<div style={{ display: show ? 'block' : 'none' }}>
				<h2 className="valentine-card__title">{contentTop}</h2>
				<h2 className="valentine-card__title">{contentBottom}</h2>
			</div>
			<div className="heart-img">
				<img src={assets.heart} alt="heart img" />
			</div>
			<ValentineCardTwo show={show} />
		</div>
	)
}
