function showVid() {
    const modal = document.getElementById("videoModal");
    modal.style.display = "block";

    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function hideVid() {
    const modal = document.getElementById("videoModal");
    modal.classList.remove('show');

    setTimeout(() => {
        modal.style.display = "none";
    }, 10);
}

function showVidphone() {
    const modal = document.getElementById("videoModal-side");
    modal.style.display = "block";

    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function hideVidphone() {
    const modal = document.getElementById("videoModal-side");
    modal.classList.remove('show');

    setTimeout(() => {
        modal.style.display = "none";
    }, 10);
}