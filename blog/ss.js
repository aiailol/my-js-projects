// Massive for keeping posts
let posts = [];

// Func for displaying Posts
function displayPosts() {
    const blogPosts = document.getElementById("blogPosts");
    blogPosts.innerHTML = "";
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post"); // corrected this line
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;

        const commentInput = document.createElement("input");
        commentInput.setAttribute("type", "text");
        commentInput.setAttribute("placeholder", "Leave a comment...");
        commentInput.classList.add("commentInput");

        const commentButton = document.createElement("button"); // corrected this line
        commentButton.innerText = "add a comment";
        commentButton.addEventListener("click", () => {
            const commentText = commentInput.value;
            if (commentText) {
                post.comments.push(commentText);
                displayPosts();
                commentInput.value = "";
            }
        })

        post.comments.forEach(comment => {
            const commentElement = document.createElement("div");
            commentElement.classList.add("comment");
            commentElement.innerText = comment;
            postElement.appendChild(commentElement);
        })

        postElement.appendChild(commentInput);
        postElement.appendChild(commentButton);
        blogPosts.appendChild(postElement); // corrected this line
    })
}

// Func for adding a new post
function addPost(title, body) {
    const newPost = {
        title: title,
        body: body,
        comments: []
    };
    posts.push(newPost);
    displayPosts();
}

// Example adding a few posts
addPost("First note", "This is my first note hello everyone");
addPost("Second note", "This is my second post again hi everyone");

displayPosts(); // corrected this line
