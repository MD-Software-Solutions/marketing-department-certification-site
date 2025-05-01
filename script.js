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
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = modal.querySelector(".modal-body .grid-layout-video");

    document.querySelectorAll("[data-bs-toggle='modal']").forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const title = trigger.getAttribute("data-title");
            const paragraph = trigger.getAttribute("data-paragraph");
            const videos = trigger.getAttribute("data-video").split(", ");

            // Set modal title
            modalTitle.textContent = title;

            // Clear existing content
            modalBody.innerHTML = "";

            // Create video elements for each video
            videos.forEach((videoSrc) => {
                const videoWrapper = document.createElement("div");
                const videoElement = document.createElement("video");
                videoElement.controls = true;

                const sourceElement = document.createElement("source");
                sourceElement.src = videoSrc;
                sourceElement.type = "video/mp4";

                videoElement.appendChild(sourceElement);
                videoWrapper.appendChild(videoElement);
                modalBody.appendChild(videoWrapper);
            });

            // Add paragraph
            const paragraphElement = document.createElement("p");
            paragraphElement.textContent = paragraph;
            modalBody.appendChild(paragraphElement);
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


function openPptModal(pptUrl) {
    document.getElementById('pptFrame').src = pptUrl;
}

document.addEventListener('DOMContentLoaded', () => {
    // Select all the thumbnails that should open the modal
    const triggers = document.querySelectorAll('[data-bs-toggle="modal"][data-video]');
    const modalTitleEl = document.getElementById('modal-title');
    const videosContainer = document.getElementById('videos-container');
    const paragraphContainer = document.getElementById('paragraph-container');
  
    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        // 1. Title
        const title = trigger.dataset.title || '';
        modalTitleEl.textContent = title;
  
        // 2. Videos (comma-separated in data-video)
        const rawVideos = trigger.dataset.video || '';
        const videoList = rawVideos.split(',').map(s => s.trim()).filter(s => s);
  
        // Clear out any previous content
        videosContainer.innerHTML = '';
        paragraphContainer.innerHTML = '';
  
        // Adjust grid columns to # of videos
        const cols = videoList.length > 1 ? videoList.length : 1;
        videosContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  
        // Create and append each <video>
        videoList.forEach(src => {
          const vidWrapper = document.createElement('div');
          const videoEl = document.createElement('video');
          videoEl.setAttribute('controls', '');
          const sourceEl = document.createElement('source');
          sourceEl.src = src;
          sourceEl.type = 'video/mp4';
          videoEl.appendChild(sourceEl);
          vidWrapper.appendChild(videoEl);
          videosContainer.appendChild(vidWrapper);
        });
  
        // 3. Paragraph
        const paraText = trigger.dataset.paragraph || '';
        const p = document.createElement('p');
        p.textContent = paraText;
        paragraphContainer.appendChild(p);
      });
    });
  });
