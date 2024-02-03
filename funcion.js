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
        image.src = `https://rickandmortyapi.com/api/location/${number}`;
        image.alt = `Image ${number}`;
        const description = document.createElement("p");
        description.textContent = `RICK SANCHEZ ${number}`;

        imageDiv.appendChild(image);
        imageDiv.appendChild(description);
        imageContainer.appendChild(imageDiv);
    }

    function deleteLastImage() {
        const lastImage = imageContainer.lastElementChild;
        if (lastImage) {
            imageContainer.removeChild(lastImage);
        }
    }
});