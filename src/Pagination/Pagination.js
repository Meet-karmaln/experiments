const Pagination = ({ posts, postsPerPage, setPageNumber }) => {
	const numberOfPages = [];

	for (let i = 1; i <= Math.ceil(posts / postsPerPage); i++) {
		numberOfPages.push(i);
	}

	return (
		<ul>
			{numberOfPages.map((number) => (
				<li key={number} className='page-item'>
					<a onClick={() => setPageNumber(number)} href='!#'>
						{number}
					</a>
				</li>
			))}
		</ul>
	);
};

export default Pagination;
