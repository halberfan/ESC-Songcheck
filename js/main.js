const allSongs = [];

allSongs.push(
    generateJsonForSong("CxNiUxdJnTQ", "Norwegen", "Queen Of Kings", "Alessandra"),
    generateJsonForSong("Apqwl0ayL6A", "Malta", "Dance (Our Own Party)", "The Busker"),
    generateJsonForSong("oeIVwYUge8o", "Serbien", "Samo Mi Se Spava", "Luke Black"),
    generateJsonForSong("XRV2-jPqaUw", "Lettland", "Aijā", "Sudden Lights"),
    generateJsonForSong("wa3suiOzAAk", "Portugal", "Ai Coração", "Mimicat"),
    generateJsonForSong("ak5Fevs424Y", "Irland", "We Are One", "Wild Youth"),
    generateJsonForSong("AyKj8jA0Qoc", "Kroatien", "Mama ŠČ!", "Let 3"),
    generateJsonForSong("_8-Sbc_GZMc", "Schweiz", "Remo Forrer", "Watergun"),
    generateJsonForSong("se9LDgFW6ak", "Moldau", "Soarele şi Luna", "Pasha Parfeni"),
    generateJsonForSong("b3vJfR81xO0", "Schweden", "Tattoo", "Loreen"),
    generateJsonForSong("5dvsr-L3HgY", "Aserbaidschan", "TuralTuranX", "Tell Me More"),
    generateJsonForSong("-y78qgDlzAM", "Tschechien", "My Sister's Crown", "Vesna"),
    generateJsonForSong("UOf-oKDlO6A", "Niederlande", "Burning Daylight", "Mia Nicolai & Dion Cooper"),
    generateJsonForSong("znWi3zN8Ucg", "Finnland", "Cha Cha Cha", "Käärijä"),
    generateJsonForSong("uWs69ddGEW4", "Dänemark", "Breaking My Heart", "Reiley"),
    generateJsonForSong("Co8ZJIejXBA", "Armenien", "Future Lover", "Brunette"),
    generateJsonForSong("NRxv-AUCinQ", "Rumänien", "D.G.T. (Off And On)", "Theodor Andrei"),
    generateJsonForSong("wO9g5t3VSuw", "Estland", "Bridges", "Alika"),
    generateJsonForSong("ORhEoS6d8e4", "Belgien", "Because Of You", "Gustaph"),
    generateJsonForSong("zrFUKqTy4zI", "Zypern", "Break A Broken Heart", "Andrew Lambrou"),
    generateJsonForSong("BhlJXcCv7gw", "Island", "Power", "Diljá"),
    generateJsonForSong("qL0EkId_sTY", "Griechenland", "What They Say", "Victor Vernicos"),
    generateJsonForSong("Jjsl-JCHDWE", "Polen", "Solo", "Blanka"),
    generateJsonForSong("zDBSIGITdY4", "Slowenien", "Carpe Diem", "Joker Out"),
    generateJsonForSong("E8kO-QPippo", "Georgien", "Echo", "Iru"),
    generateJsonForSong("Hjfq-T-8WHw", "San Marino", "Like An Animal", "Piqued Jacks"),
    generateJsonForSong("ZMmLeV47Au4", "Österreich", "Who The Hell Is Edgar?", "Teya & Salena"),
    generateJsonForSong("mp8OG4ApocI", "Albanien", "Duje", "Albina & Familja Kelmendi"),
    generateJsonForSong("68lbEUDuWUQ", "Litauen", "Stay", "Monika Linkytė"),
    generateJsonForSong("aqtu2GspT80", "Australien", "Promise", "Voyager"),
    generateJsonForSong("GWfbEFH9NvQ", "Frankreich", "La Zarra", "Évidemment"),
    generateJsonForSong("Y12_YMs9kCQ", "Deutschland", "Blood & Glitter", "Lord Of The Lost"),
    generateJsonForSong("N4HBDAbdXUg", "Italien", "Due Vite", "Marco Mengoni"),
    generateJsonForSong("NGnEoSypBhE", "Spanien", "EAEA", "Blanca Paloma"),
    generateJsonForSong("tJ21grjN6wU", "Großbritannien", "I Wrote A Song", "Mae Muller (Leider nur auf YT verfügbar)"),
    generateJsonForSong("neIscK1hNxs", "Ukraine", "Heart Of Steel", "TVORCHI")
);

const songsSortedOut = [];

let currentWinner = 0;

shuffle(allSongs);
console.log(allSongs);

let done = false;

const vidsrc1 = document.getElementById("vidsrc1");
const vidsrc2 = document.getElementById("vidsrc2");

let index = 0;

clickedVideo2();
clickedVideo1();

const button1 = document.getElementById("buttonSong1");
const button2 = document.getElementById("buttonSong2");


function clickedVideo1() {
    //Button/Vid 1
    //Add old video to sorted out

    if(done) {
        window.location.reload();
    }

    changeProgressBar();
    if (checkForLastVid()) {
        button1.innerHTML = "Noch mal";
        changeToWinnerSite(JSON.parse(allSongs[vidsrc1.index]), 1);
        return;
    }

    if (index > 2) {

        const sortedOutId = getVideoIdFromIframe(vidsrc2);
        songsSortedOut.push(sortedOutId);
        currentWinner = vidsrc1.index;
    }

    //Change video to new one
    vidsrc2.index = index;
    let vidMeta = JSON.parse(allSongs[index++]);
    vidsrc2.src = generateEmbedUrl(vidMeta.id);
    document.getElementById("countryVid2").innerHTML = vidMeta.country;
    document.getElementById("songVid2").innerHTML = vidMeta.name;
    document.getElementById("artistVid2").innerHTML = vidMeta.artist;

    console.log(allSongs[currentWinner]);
}


function clickedVideo2() {
    //Button/Vid 2

    if(done) {
        window.location.reload();
    }

    changeProgressBar();
    if (checkForLastVid()) {
        changeToWinnerSite(JSON.parse(allSongs[vidsrc2.index]), 2);
        button2.innerHTML = "Noch mal";
        return;
    }

    if (index > 2) {

        const sortedOutId = getVideoIdFromIframe(vidsrc1);
        songsSortedOut.push(sortedOutId);
        currentWinner = vidsrc2.index;
    }

    //Change video to new one
    vidsrc1.index = index;
    let vidMeta = JSON.parse(allSongs[index++]);
    vidsrc1.src = generateEmbedUrl(vidMeta.id);
    document.getElementById("countryVid1").innerHTML = vidMeta.country;
    document.getElementById("songVid1").innerHTML = vidMeta.name;
    document.getElementById("artistVid1").innerHTML = vidMeta.artist;

    console.log(allSongs[currentWinner]);

}

function changeToWinnerSite(meta, player) {

    document.getElementById("colVid" + (3 - player)).remove();
    document.getElementById("colVid" + player).classList.remove("s6");
    document.getElementById("colVid" + player).classList.add("s12");

    document.getElementById("winnerTitle" + player).style = "font-size: 3rem; color: #ff1212";
    document.getElementById("winnerTitle" + player).classList.add("heading");
    document.getElementById("winnerTitle" + player).classList.add("heading--3");

    if(player == 1) {
        vidsrc1.src = generateEmbedUrl(meta.id);
    }
    if(player == 2) {
        vidsrc2.src = generateEmbedUrl(meta.id);
    }

    done = true;

}

function changeProgressBar() {
    let perc = (index * 100) / allSongs.length;
    console.log(perc);
    document.getElementById("progressBar").style = "width: " + perc + "%";
}

button1.addEventListener("click", clickedVideo1);

button2.addEventListener("click", clickedVideo2);

console.log(vidsrc1.src)

function generateJsonForSong(id, country, name, artist) {
    let video = '{ "id": "' + id + '", "country": "' + country + '", "name": "' + name + '", "artist": "' + artist + '"}';
    return video;
}

function checkForLastVid() {
    return index == allSongs.length;
}

function generateEmbedUrl(vidId) {
    return "https://www.youtube.com/embed/" + vidId + "?start=4";
}

function getVideoIdFromIframe(iframe) {
    return iframe.src.replace('https://www.youtube.com/embed/', '');
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}