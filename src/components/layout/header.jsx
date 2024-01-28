import './layout.css';
import assets from '../../assets';

export const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<a className='header-log' href='#!'>
					<img src={assets.logoTwo} alt="amore logo" width='85' height='140' />
				</a>

				<nav>
					<ul className='nav-list'>
						<li className="nav-item">
							<a href="#!" className="nav-link">ROADMAP</a>
						</li>
						<li className="nav-item">
							<a href="#!" className="nav-link">TOKENOMICS</a>
						</li>
						<li className="nav-item">
							<a href="#!" className="nav-link">FAQ</a>
						</li>
						<li className="nav-item social-link">
							<a href="#!" className="nav-link">SOCIALS</a>
							<div className='socials-dropdown'>
								<a href="#!">TELEGRAM</a>
								<a href="#!">TWITTER</a>
							</div>
						</li>
						<a className='get-valentine__btn' href="#!">
							<img src={assets.getValintineIcon} alt="" />
						</a>
					</ul>
				</nav>
			</div>
		</header>
	)
}
