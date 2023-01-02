const AirbnbInnerLower = () => {
	return (
		<form className='form'>
			<label htmlFor='where' className='label'>
				<div>
					Where
					<input
						type='text'
						id='where'
						className='destination'
						placeholder='Search destinations'
					/>
				</div>
			</label>
			<label htmlFor='start' className='label'>
				<div>
					Check in
					<input type='date' id='start' placeholder='Add dates' />
				</div>
			</label>
			<label htmlFor='end' className='label'>
				<div>
					Check out
					<input type='date' id='end' placeholder='Add dates' />
				</div>
			</label>
			<label htmlFor='guests' className='label'>
				<div>
					Who
					<input type='text' id='guests' placeholder='Add guest' />
				</div>
			</label>
		</form>
	);
};

export default AirbnbInnerLower;
