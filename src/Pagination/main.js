import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination/Pagination";

function Main() {
	const [posts, setPosts] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const postsPerPage = 10;

	useEffect(() => {
		const fetch = async () => {
			const resp = await axios("https://jsonplaceholder.typicode.com/posts");
			setPosts(resp.data);
		};
		fetch();
	}, []);

	const lastPost = pageNumber * postsPerPage;
	const firstPost = lastPost - postsPerPage;
	const paginatedData = posts.slice(firstPost, lastPost);

	return (
		<>
			{paginatedData.map((post) => {
				return (
					<div key={post.id}>
						<h4>{post.title}</h4>
					</div>
				);
			})}
			<Pagination
				posts={posts.length}
				postsPerPage={postsPerPage}
				setPageNumber={setPageNumber}
			/>
		</>
	);
}

export default Main;
