
function modalInfoBox_Header(things) {
    document.getElementById("modal-title").innerHTML = `${things}`;

}

function modalInfoBox_Content(things) {
    document.getElementById("my-modal-text").innerHTML = `${things}`;

}

function profile_modal_Header(things) {
    document.getElementById("modal-title").innerHTML = `${things}`;

}

function profile_modal_Content(things) {
    document.getElementById("my-modal-text").innerHTML = `${things}`;

}

function profile_modal_Content2(things) {
    document.getElementById("my-modal-text2").innerHTML = `${things}`;

}


document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("[data-bs-toggle='modal']");

    images.forEach((image) => {
        image.addEventListener("click", () => {
            const title = image.getAttribute("data-title");
            const paragraph = image.getAttribute("data-paragraph");
            const videoSrc = image.getAttribute("data-video");

            updateModalContent(title, paragraph, videoSrc);
        });
    });
});

function updateModalContent(title, paragraph, videoSrc) {
    document.getElementById("modal-title").textContent = title;

    const paragraphElement = document.querySelector("#myModal .modal-body p");
    if (paragraphElement) {
        paragraphElement.textContent = paragraph;
    }

    const videoElement = document.querySelector("#myModal .modal-body video");
    if (videoElement) {
        const sourceElement = videoElement.querySelector("source");
        if (sourceElement) {
            sourceElement.src = videoSrc;
            videoElement.load();
        }
    }
}
