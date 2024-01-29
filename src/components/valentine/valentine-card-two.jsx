import './valentine.css';

// eslint-disable-next-line react/prop-types
export const ValentineCardTwo = ({ show }) => {
	return (
		<div className='valentine-card__two' style={{ display: show ? 'none' : 'flex' }}>
			<button>
				<h2>TWIT $AMORE</h2>
			</button>
		</div>
	);
};
