var elements, elementsCount, songs, i, userSearch, userSearchFilter, j, artists, artistsCount, artistList, songFound, artistFound, songPosition, artistPosition;
document.addEventListener('DOMContentLoaded', function() {
  elements = document.getElementsByClassName("Song");
  elementsCount = elements.length;
  songs = new Array();
  artists = document.getElementsByClassName("Artist");
  artistsCount = artists.length;
  artistList = new Array();
  for(i = 0; i < elementsCount; i++) {
      songs.push(elements[i].innerHTML.toLowerCase());
    }
    console.log(songs);
  for(i = 0; i < artistsCount; i++) {
      artistList.push(artists[i].innerHTML.toLowerCase());
    }
    console.log(artistList);
}, false);
function searchSong() {
  userSearch = $("#userSearch").val();
  userSearchFilter = userSearch.toLowerCase();
  for(j = 0; j < elementsCount; j++) {
      if (songs[j] === userSearchFilter) {
        songPosition = (j + 1);
        j = elementsCount;
        songFound = true;
      }
    }
  if (songFound === true) {
    alert("Match found!, song position: " + songPosition);
    songFound = false;
    songPosition = 0;
  } else {
    for(j = 0; j < artistsCount; j++) {
      if (artistList[j] === userSearchFilter) {
        artistPosition = (j + 1);
        j = artistsCount;
        artistFound = true;
        }
      }
    if (artistFound === true) {
      alert("Match found!, artist position: " + artistPosition);
      artistFound = false;
      artistPosition = 0;
    } else {
      alert("artist not found");
    }
  }
}

function goPayment() {
  location.href = "payment.html";
}
