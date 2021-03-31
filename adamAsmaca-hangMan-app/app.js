var alfabe = [];
var kelimeler = [];
var toplamDogru = 7;
var numberOfTries = 0;
var bulunanSayisi = 0;
var results = null;
var seciliKelime = "";
var durumAlani = null;


function baslangic() {
    results = document.getElementById("results");
    durumAlani = document.getElementById("current-status");
    alfabe = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    kelimeler = ["yekta", "ahmet", "araba", "bardak", "balık", "koltuk", "motor"];

    var position = rastgeleSayi(0, kelimeler.length);
    seciliKelime = kelimeler[position].toUpperCase();

    for (var i = 0; i < seciliKelime.length; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.readOnly = true;
        document.getElementById("inputs").appendChild(input);
    }

    for (var i = 0; i < alfabe.length; i++) {
        var btn = document.createElement("button");
        btn.innerHTML = alfabe[i];
        btn.onclick = checkIt;
        document.getElementById("buttons").appendChild(btn);
    }
}

function checkIt() {
    var currentValue = this.innerHTML,
        foundIt = true;

    for (var i = 0; i < seciliKelime.length; i++) {
        if (seciliKelime[i] == currentValue) {
            document.getElementsByTagName("input")[i].value = currentValue;
            foundIt = false;
            bulunanSayisi++;
        }
    }

    if (bulunanSayisi == seciliKelime.length) {
        results.innerHTML = "Tebrikler !!!";
        document.getElementById('refreshButton').style.display = 'inline-block';
        return;
    }

    this.disabled = true;

    if (foundIt) {
        numberOfTries++;
        durumAlani.src = "img/status_" + numberOfTries + ".gif";

        results.innerHTML = numberOfTries + " defa yanıldın.";
        results.innerHTML += "<br />";
        results.innerHTML += "Kalan hak " + (toplamDogru - numberOfTries);

        if (numberOfTries == toplamDogru) {

            var btns = document.getElementsByTagName("button");

            for (var i = 0; i < btns.length; i++) {
                btns[i].disabled = true;
            }
            document.getElementById('refreshButton').style.display = 'inline-block';
            document.getElementById('refreshButton').disabled = false;
        }

    }

}

function rastgeleSayi(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

window.onload = baslangic;