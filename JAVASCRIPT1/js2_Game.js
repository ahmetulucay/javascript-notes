var gizliNumara = 15;

var kullaniciNumara = prompt("Bir sayi tahmin et");
var tahmin = Number(kullaniciNumara);

while(gizliNumara !== tahmin){
    if (tahmin>gizliNumara){
        alert("Cok buyuk tahmin ettiniz. Daha kucuk bir sayi giriniz.");
        continue;
    }
    else if (tahmin<gizliNumara){
        alert("Cok kucuk tahmin ettiniz. Daha buyuk bir sayi giriniz.");
        continue;
    }
if (gizliNumara === tahmin){
    alert("Bildiniz. Tebrikler...");
    }
}
