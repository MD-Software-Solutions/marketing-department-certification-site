function showVid() {
    var modal = document.getElementById("videoModal");
    modal.style.display = "block";
    setTimeout(function() {
        modal.classList.add("show");
    }, 10);
}

function hideVid() {
    var modal = document.getElementById("videoModal");
    modal.classList.remove("show");
    setTimeout(function() {
        modal.style.display = "none";
    }, 500);
}

function showVidphone() {
    var modal = document.getElementById("videoModal-side");
    modal.style.display = "block";
    setTimeout(function() {
        modal.classList.add("show");
    }, 10);
}

function hideVidphone() {
    var modal = document.getElementById("videoModal-side");
    modal.classList.remove("show");
    setTimeout(function() {
        modal.style.display = "none";
    }, 500);
}