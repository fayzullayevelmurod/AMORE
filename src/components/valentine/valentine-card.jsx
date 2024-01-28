import assets from "../../assets"

// eslint-disable-next-line react/prop-types
export const ValentineCard = ({ contentTop, contentBottom }) => {
	return (
		<div className="valentine-card">
			<div className="arrow-img">
				<img src={assets.arrow} alt="arrow img" />
			</div>
			<h2 className="valentine-card__title">{contentTop}</h2>
			<h2 className="valentine-card__title">{contentBottom}</h2>
			<div className="heart-img">
				<img src={assets.heart} alt="heart img" />
			</div>
		</div>
	)
}
