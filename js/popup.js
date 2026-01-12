function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

window.onclick = function(event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        closePopup();
    }
};
