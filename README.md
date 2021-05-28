# Recipe Card

Bu projede bir yemek tarifi web sitesindeki her bir yemek için görüntülenecek kartı oluşturuyoruz. Projedeki Card Componenti bir yemek tarifinin detaylarını, yazarını, beğeni sayısını ve kullanıcın tarifi beğenip beğenmediğine dair birtakım bilgileri gösteriyor.

<p align="center">
  <img src="recipe-card.png" alt="Recipe Card"/>
</p>

### Proje Nasıl Çalıştırılır

- Projeyi fork'ladıktan ya da indirdikten sonra projenin bulunduğu klasörde "npm install" komutu ile gerekli paketlerin yüklenmesi gerekiyor.
- Daha sonra "npm run start" komutu ile uygulama başlatılabilir.

### Proje Hakkında

Card Componenti yemek hakkında bilgileri listelemek için belli başlı "prop"lar almakta.
Bu "prop"lar sırasıyla, author, recipe, count, liked olarak adlandırılmış durumda.

### Yapılacaklar

Card component'i içerisindeki placeholder text olarak verilen yerlerin props olarak alacak şekilde dinamik hale getiriniz. Sonrasında gerekli yerleri App.js içerisinden prop olarak geçerek render edilmesini sağlayınız.

### Not

1. Şu anda food image Card component'i içerisinde import edilerek görüntülenmektedir. Food adlı image'ın da prop olarak geleceği şekilde düzenleyiniz.

2. Örnek olması açısından author prop olarak geçilmiştir. Card component'inde profile adlı `<div>` içerisindeki `<span>` author prop'unun ilk harfini alacak şekilde render edilmiştir.
