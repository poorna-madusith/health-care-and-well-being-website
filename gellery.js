document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll(".image-container");
    const zoomedImageContainer = document.getElementById("zoomed-image-container");
    const zoomedImage = document.getElementById("zoomed-image");
    const zoomedDescription = document.getElementById("zoomed-description");
    const closeBtn = document.getElementById("close-btn");

    imageContainers.forEach(container => {
        container.addEventListener("click", function () {
            const img = container.querySelector("img");
            const description = container.querySelector(".description").textContent;

            zoomedImage.src = img.src;
            zoomedDescription.textContent = description;

            zoomedImageContainer.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function () {
        zoomedImageContainer.style.display = "none";
    });
});
