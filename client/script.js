document.addEventListener("DOMContentLoaded", () => {
  const postsDiv = document.getElementById("posts");

  const apiEndpoint =
    "http://localhost:1208/api/instagram?fields=id,media_type,media_url,caption,timestamp&access_token=IGQWRPXzhjUDFZAanR3ekR5Y0thU215TFRzbGNfTzdubTR6OUpuX00ydnJiLVp2RGhUN0tzbThuSjFHenBxRVN4U25Fc2ZAoV0ozUExXd3J0dXFpejdBd0czR0ZARaTJxajJydlJSRllhdnRVQkV3WG1VV3ZAvdVRLQlkZD";

  function displayPosts(posts) {
    postsDiv.innerHTML = "";
    posts.forEach((post) => {
      const postHtml = `<div class ="post">
          <img src= "${post.media_url}" alt="post">
          <p>${post.caption}</p>
          <p> ${post.timestamp}</p>
        </div>`;

      postsDiv.innerHTML += postHtml;
    });
  }

  fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => {
      displayPosts(data.data);
    })
    .catch((error) => console.error("Error fetching data ", error));
});
