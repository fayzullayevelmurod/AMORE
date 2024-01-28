import assets from '../../assets';
import './rodmap.css';

export const Rodmap = () => {
	return (
		<div className='rodmap-section'>
			<div className="title">
				<h2 className="title-text__pink">ROADMAP</h2>
			</div>
			<div className="rodmap-content">
				<div className="rodmap-content__box">
					<div className="title">
						<img src={assets.numberOne} alt="number one" />
						<h2 className='rodmap-content__title'>TITLE</h2>
					</div>
					<p className='rodmap-content__info'>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
					</p>
				</div>
			</div>

			<div className="rodmap-content">
				<div className="rodmap-content__box rodmap-content__two">
					<div className="title">
						<img src={assets.numberTwo} alt="number two" />
						<h2 className='rodmap-content__title'>TITLE</h2>
					</div>
					<p className='rodmap-content__info'>
						Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
					</p>
				</div>
			</div>

			<div className="rodmap-content">
				<div className="rodmap-content__box">
					<div className="title">
						<img src={assets.numberThree} alt="number one" />
						<h2 className='rodmap-content__title'>TITLE</h2>
					</div>
					<p className='rodmap-content__info'>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
					</p>
				</div>
			</div>

			<div className="rodmap-content">
				<div className="rodmap-content__box rodmap-content__two">
					<div className="title">
						<img src={assets.numberThree} alt="number two" />
						<h2 className='rodmap-content__title'>TITLE</h2>
					</div>
					<p className='rodmap-content__info'>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
					</p>
				</div>
			</div>
		</div>
	)
}
