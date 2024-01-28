import assets from '../assets';
import './main.css';

export const Intro = () => {
	return (
		<div className='intro-section'>
			<div className='container'>
				<div className="intro-content">
					<h2 className='intro-title'>Some text Some text Some text Some text Some text!</h2>
					<p className='intro-info'>Some text Some text Some. </p>
					<a className='intro-btn' href='#!'>What?</a>
				</div>
			</div>
			<div className='intro-envelop__img'>
				<img src={assets.mainEnvelope} alt="envelope" />
			</div>
		</div>
	)
}