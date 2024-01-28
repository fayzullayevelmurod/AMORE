import assets from "../../assets"
import './tokenomics.css'
export const Tokenomics = () => {
	return (
		<div className="tokenomics-section">
			<div className="title">
				<img className="money-heart" src={assets.moneyHeart} alt="money heart img" height='162' />
				<h2 className="title-text">TOKENOMICS</h2>
				<img className="token-heart" src={assets.tokenHeart} alt="heart" />
			</div>
			<img className="tokenomics-heart" src={assets.heartTwo} alt="heart" />
		</div>
	)
}
