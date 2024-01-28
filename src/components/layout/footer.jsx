import assets from '../../assets';
import './layout.css';

export const Footer = () => {
	return (
		<footer className='footer'>
			<div className="container">
				<img src={assets.logoTwo} alt="logo" />
				<div className="social-media">
					<a href="#!">
						<img src={assets.telgram} alt="telegram" />
					</a>
					<a href="#!">
						<img src={assets.twitter} alt="twitter" />
					</a>
				</div>
				<nav>
					<ul className='nav-list'>
						<li className="nav-item">
							<a href="#rodmap" className="nav-link">ROADMAP</a>
						</li>
						<li className="nav-item">
							<a href="#tokenomics" className="nav-link">TOKENOMICS</a>
						</li>
						<li className="nav-item">
							<a href="#faq" className="nav-link">FAQ</a>
						</li>
						<a className='get-valintine' href="#!">
							<img src={assets.footerValintineIcon} alt="valitine icon" />
						</a>
					</ul>
				</nav>
			</div>
		</footer>
	)
}
