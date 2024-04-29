const dynamicLyrics = document.getElementById('quote');
const dynamicInfo = document.getElementById('info');

async function randomMotto () {
    fetch('http://127.0.0.1:4001/getRandomLyrics')
        .then(res => {
            if(res.ok) {
                return res.json();
            }
        })
        .then(res =>{
            const piece = res[0];
            dynamicLyrics.innerHTML = piece.lyrics;
            dynamicInfo.innerHTML = `${piece.song} - ${piece.artist}`;
        })
        .catch(error => {
            console.error(error);
        })
}