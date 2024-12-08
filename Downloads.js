document.addEventListener("DOMContentLoaded", () => {
    const downloadsContainer = document.querySelector(".downloads");

    
    window.addDownload = function () {
        const downloadCount = document.querySelectorAll(".download-item").length + 1;
        const playlistName = `Download ${downloadCount}`;
        createDownloadBox(downloadName);

        saveDownloads();
    };

    function createDownloadBox(name) {
        const downloadItem = document.createElement("div");
        downloadItem.className = "download-item";
       
        const span = document.createElement("span");
        span.textContent = name;

        const plusButton = document.createElement("button");
        plusButton.className = "plus-btn";
        plusButton.textContent = "+";
        plusButton.onclick = openFileExplorer; 

        const minusButton = document.createElement("button");
        minusButton.className = "minus-btn";
        minusButton.textContent = "-";
        minusButton.onclick = function () {
            deleteDownload(downloadItem);
        };

        downloadItem.appendChild(span);
        downloadItem.appendChild(plusButton);
        downloadItem.appendChild(minusButton);

        const newDownloadText = document.getElementById("new-download-text");
        downloadsContainer.insertBefore(downloadItem, newDownloadText);
    }

    function saveDownloads() {
        const downloads = Array.from(document.querySelectorAll(".downloads-item span"))
            .map(span => span.textContent);
        localStorage.setItem("downloads", JSON.stringify(downloads));
    }

    function loadDownloads() {
        const savedDownloads = JSON.parse(localStorage.getItem("downloads")) || [];
        savedDownloads.forEach(name => {
            createDownloadsBox(name);
        });
    }

    function deleteDownload(downloadItem) {
        downloadItem.remove();
        saveDownloads();
    }

    window.openFileExplorer = function () {
        alert("File explorer functionality goes here.");
    };

    loadDownloads();
});