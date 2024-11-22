document.addEventListener("DOMContentLoaded", () => {
    const playlistsContainer = document.querySelector(".playlists");

    
    window.addPlaylist = function () {
        const playlistCount = document.querySelectorAll(".playlist-item").length + 1;
        const playlistName = `Playlist ${playlistCount}`;
        createPlaylistBox(playlistName);

        savePlaylists();
    };

    function createPlaylistBox(name) {
        const playlistItem = document.createElement("div");
        playlistItem.className = "playlist-item";
       
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
            deletePlaylist(playlistItem);
        };

        playlistItem.appendChild(span);
        playlistItem.appendChild(plusButton);
        playlistItem.appendChild(minusButton);

        const newPlaylistText = document.getElementById("new-playlist-text");
        playlistsContainer.insertBefore(playlistItem, newPlaylistText);
    }

    function savePlaylists() {
        const playlists = Array.from(document.querySelectorAll(".playlist-item span"))
            .map(span => span.textContent);
        localStorage.setItem("playlists", JSON.stringify(playlists));
    }

    function loadPlaylists() {
        const savedPlaylists = JSON.parse(localStorage.getItem("playlists")) || [];
        savedPlaylists.forEach(name => {
            createPlaylistBox(name);
        });
    }

    function deletePlaylist(playlistItem) {
        playlistItem.remove();
        savePlaylists();
    }

    window.openFileExplorer = function () {
        alert("File explorer functionality goes here.");
    };

    loadPlaylists();
});
