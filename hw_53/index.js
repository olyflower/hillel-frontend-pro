import { clearNode, createNode } from "./helper.js";

function getPost() {
	const elements = getPostOptions();
	const { container, id, title, body } = elements;

	document
		.querySelector(".button")
		.addEventListener("click", async function () {
			const postId = id.value;

			try {
				const response = await fetch(
					`https://jsonplaceholder.typicode.com/posts/${postId}`
				);

				if (!response.ok) {
					throw new Error("Can not find post!");
				}

				const post = await response.json();

				if (post) {
					title.textContent = post.title;
					body.textContent = post.body;
					clearNode(container);

					const buttonComment = createNode({
						tagName: "button",
						className: "button",
						children: "Get comments",
						event: "click",
						handler: () => handler(container, title, body, id),
					});

					container.append(title, body, buttonComment);
				}
			} catch (error) {
				container.textContent = `Error: ${error.message}`;
			}
		});
}

const handler = async function (container, title, body, id) {
	const postId = id.value;
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
		);
		if (!response.ok) {
			throw new Error("No comments!");
		}
		const postComments = await response.json();

		clearNode(container);

		const commentsList = document.createElement("ul");

		const commentItems = postComments.map((comment) => {
			const commentItem = document.createElement("li");
			commentItem.textContent = comment.body;
			return commentItem;
		});

		commentsList.append(...commentItems);
		container.append(title, body, commentsList);
	} catch (error) {
		container.textContent = `Error: ${error.message}`;
	}
};

const getElements = () => {
	let elements = null;
	return () => {
		if (!elements) {
			elements = {
				container: document.querySelector(".post__container"),
				id: document.getElementById("id"),
				title: document.querySelector(".post__title"),
				body: document.querySelector(".post__body"),
			};
		}
		return elements;
	};
};

const getPostOptions = getElements();

getPost();
