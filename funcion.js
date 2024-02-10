document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.getElementById("image-container");
    const addButton = document.getElementById("add-button");
    const deleteButton = document.getElementById("delete-button");
    let imageCount = 0;

    addButton.addEventListener("click", () => {
        imageCount++;
        createImage(imageCount);
    });

    deleteButton.addEventListener("click", () => {
        if (imageCount > 0) {
            deleteLastImage();
            imageCount--;
        }
    });

    function createImage(number) {
        const imageDiv = document.createElement("div");
        imageDiv.className = "gallery-item";
        const image = document.createElement("img");
        image.src = "https://elcomercio.pe/resizer/4WQWP7E1GEiSxQgSDeKSaLYa0eo=/580x330/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/KRKOINCP7JGR7KWT4HNBDSJPDA.jpg";
        const description = document.createElement("p");
        const description1 = document.createElement("p");
        const description2 = document.createElement("p");
        const description3 = document.createElement("p");
        const description4 = document.createElement("p");
        const description5 = document.createElement("p");
        description.textContent = `${number}`;
        description1.textContent = `Rick Sanchez`;
        description2.textContent = `wubba lubba dub dub`;
        description3.textContent = `${number}`;
        description4.textContent = `${number}`;

        imageDiv.appendChild(image);
        imageDiv.appendChild(description);
        imageDiv.appendChild(description1);
        imageDiv.appendChild(description2);
        imageContainer.appendChild(imageDiv);
    }

    function deleteLastImage() {
        const lastImage = imageContainer.lastElementChild;
        if (lastImage) {
            imageContainer.removeChild(lastImage);
        }
    }
});