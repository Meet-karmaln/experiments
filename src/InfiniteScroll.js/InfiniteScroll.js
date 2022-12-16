import { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";

const InfiniteScroll = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [posts, setPosts] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		const fetch = async () => {
			const resp = await axios({
				url: `https://dev.to/api/articles/latest?per_page=50&page=${pageNumber}`,
			});
			setPosts([...posts, ...resp.data]);
			setHasMore(resp.data.length > 0);
			setIsLoading(false);
		};
		fetch();
	}, [pageNumber]);

	const observer = useRef();
	const lastPostOnScreen = useCallback(
		(node) => {
			if (isLoading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					console.log("visible");
					setPageNumber((prevPage) => prevPage + 1);
				}
			});
			if (node) observer.current.observe(node);
		},
		[isLoading, hasMore]
	);

	return (
		<>
			{posts.map((post, index) => {
				if (posts.length === index + 1) {
					return (
						<div key={post.id}>
							<h4 ref={lastPostOnScreen}>{post.title}</h4>
						</div>
					);
				} else {
					return (
						<div key={post.id}>
							<h4>{post.title}</h4>
						</div>
					);
				}
			})}
			{isLoading && <div>Loading....</div>}
		</>
	);
};

export default InfiniteScroll;
