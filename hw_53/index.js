import { clearNode, createNode } from "./helper.js";

async function fetchPost(postId) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	);
	if (!response.ok) {
		throw new Error("Post not found!");
	}
	return await response.json();
}

async function fetchComments(postId) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
	);
	if (!response.ok) {
		throw new Error("Comments not found!");
	}
	return await response.json();
}

function createCommentContent({ comments, title, body }) {
	const fragment = document.createDocumentFragment();
	const commentsList = document.createElement("ul");
	const commentItems = comments.map((comment) => {
		const commentItem = document.createElement("li");
		commentItem.textContent = comment.body;
		return commentItem;
	});

	commentsList.append(...commentItems);
	fragment.append(title, body, commentsList);

	return fragment;
}

async function handler(container, title, body, postId) {
	try {
		clearNode(container);
		const comments = await fetchComments(postId);
		container.append(createCommentContent({ comments, title, body }));
	} catch (error) {
		container.textContent = `Error: ${error.message}`;
	}
}

function createPostContent(container, post, title, body, postId) {
	title.textContent = post.title;
	body.textContent = post.body;
	clearNode(container);

	const buttonComment = createNode({
		tagName: "button",
		className: "button",
		children: "Get comments",
		event: "click",
		handler: () => handler(container, title, body, postId),
	});

	container.append(title, body, buttonComment);
}

function makePost() {
	const elements = getPostOptions();
	const { container, id, title, body } = elements;

	document
		.querySelector(".button")
		.addEventListener("click", async function () {
			const postId = id.value;

			try {
				const post = await fetchPost(postId);
				createPostContent(container, post, title, body, postId);
			} catch (error) {
				container.textContent = `Error: ${error.message}`;
			}
		});
}

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

makePost();
