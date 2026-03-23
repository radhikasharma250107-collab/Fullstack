const form = document.getElementById("postForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;

    try {
        const response = await fetch("/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                body: body
            })
        });

        if (response.ok) {
            message.textContent = "Post submitted successfully!";
            form.reset();
        } else {
            message.textContent = "Failed to submit post.";
        }

    } catch (error) {
        message.textContent = "Error submitting post.";
    }
});