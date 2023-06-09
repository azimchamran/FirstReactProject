import React from 'react';


const Card = (props) => {
	const { name, email, id } = props;
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
			<img alt='photo' src = {`https://robohash.org/${props.id}?200x200`} />
			<div>
				<h2>{id}</h2>
				<p>{name}</p>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;