---
layout: in-app-content
lang: tr
title: CoronaMelder Gizlilik Beyanı 
---

## CoronaMelder hakkında 
CoronaMelder (uygulama), COVID-19 virüsünün yayılmasını sınırlandırmak için teknik bir yardımcı araçtır. CoronaMelder’i akıllı telefonunuza yüklediğinizde, COVİD-19 test sonucu pozitif çıkan ve CoronaMelder’i yüklemiş olan bir kişinin yakınında bir süre bulunmuş olmanız durumunda bir mesaj alırsınız. Aşağıda CoronaMelder’in nasıl çalıştığı kısaca izah edilmektedir. 

Uygulama, Bluetooth vasıtasıyla uygulamanın yüklenmiş olduğu diğer akıllı telefonları tanımaktadır. Diğer akıllı telefonların tanınması Rolling Proximity Indicators (RPS’ler) denilen rastgele kodlar (rakam sıraları) yardımıyla gerçekleşir. Bu kodlar her 10 ile 20 dakikada bir yenilenir ve Temporary Exposure Keys (TEK’ler) denilen şifrelerin türevleridir. TEK’ler de rastgele kodlar olup her gün yeniden oluşturulur ve 14 gün boyunca kullanıcının telefonunda saklanır.  

Akıllı telefonunuz uygulamanın yüklü olduğu başka bir akıllı telefona yakın olduğunda bu akıllı telefonlar arasında farklı RPI değiş tokuşu yapılır ve üzerine yerel olarak kaydedilir. Uygulama kullanıcısının COVID-19 testi pozitif çıktığında kullanıcı bunu uygulamada gönüllü olarak bildirmeyi seçebilir. Böyle bir tercih yapıldığında uygulama, son 14 gün için oluşturulan ve akıllı telefonda yerel olarak saklanan TEK’leri bir backend sunucusuna gönderir. Backend sunucusu, gönderilen TEK’leri ancak hem kullanıcının hem de GGD’nin gönderdiği bir yetki koduyla teyit etmeleri halinde kabul eder. Backend sunucusunda alınan TEK’ler, Diagnosis Keys (DK’ler) denilen başka kodlara dönüştürülür. 

Akabinde backend sunucu DK’leri uygulamanın yüklendiği akıllı telefonlar tarafından otomatikman indirilebilsin diye hazır bulundurur. Akıllı telefonunuz DK’leri sunucudan indirdikten sonra sunucu ile olan bağlantı kesilir. Bu otomatikleşmiş işlem, olası bulaşma risklerini güncelleştirme açısından günde birkaç kez tekrarlanır. Sonrasında akıllı telefonunuz, indirilen DK’ler yardımıyla akıllı telefonunuzun yakınlarında bulunan diğer akıllı telefonların çeşitli RPI’leriyle eşleştirme olup olmadığını hesaplar. Bundan hemen sonra DK’ler akıllı telefonunuzdan silinir. 

Eşleştirme olduğunda birkaç ölçme etkenlerine esasen, riskli bir temas söz konusu olup olmadığı belirlenir. Riskli temas söz konusuysa, yani başka bir deyişle geçmiş süre içinde COVID-19’un bulaştığı bir kişinin yakınında bulunmuşsanız, bulaşma riskinizin yüksek olduğu konusunda bir bildiri alırsınız. Uygulama ayrıca, mesaj aldığınızdan sonra neler yapmanız tavsiyesinde bulunur.

CoronaMelder 30 Kasım 2020 tarihinden itibaren diğer Avrupa ülkelerinin ihbar uygulamalarıyla birlikte çalışmaktadır. Bu da, CoronaMelder’i kullandığınızda ve  AB ülkesinden o ülkenin korona uygulamasını kullanan başka birine  rastladığınızda, bu iki uygulamanın karşılıklı RPI değişimi yaptıkları anlamına gelir. Bu işlem iki CoronaMelder kullanıcısı arasındaki işlemin aynısıdır. Akabinde ikinizden birinin test sonucu pozitif çıkarsa ve bunu uygulama yoluyla bildirirseniz diğer kişi de bir uyarı mesajı alır.

Avrupa Komisyonu çeşitli ülkelerin korona uygulamaları arasındaki işbirliği için dijital bir altyapı kurmuş olup bunun adı Avrupa Federal Geçit Hizmeti’dir (EFGS). Bu da çeşitli korona uygulamaları arasında karşılıklı bilgi değişimi yapmaya olanak veren ortak bir sunucudan oluşmaktadır. 
### 1. Kişisel verilerin işlenmesinden kim sorumludur? 
Halk Sağlığı, Refah ve Spor Bakanı kişisel verilerin CoronaMelder’in kurulumunda, diğer ihbar uygulamalarıyla Avrupa işbirliğinde ve idaresinde işlendiği kadarıyla işleme sorumlusudur.

Belediye Sağlık Hizmetleri (GGD) kaynak ve temas takibinde uygulamadan edinilen kişisel verileri kullandığı kadarıyla, bölgenizin GGD’si işleme sorumlusudur. [www.GGD.nl](https://www.ggd.nl) adlı sayfada ikamet adresinizin posta kodunu girerek sizin hangi GGD’ye dahil olduğunu bulabilirsiniz. Hollanda’da ikamet adresiniz yoksa kaldığınız yerin posta kodunu da girebilirsiniz.

Kişisel veriler ne amaçla işlenir? 
Bu uygulama GGD’nin kaynak ve temas takibine ek olarak geliştirilmiştir. Bunun amacı yüksek bulaşma riski olan kullanıcıları, özel yaşamlarının gizliliğini titizlikle koruyarak, hızlı ve basit bir şekilde bilgilendirmektir. 

### 2. Kişisel veriler ne amaçla işlenir? 
Bu uygulama GGD’nin kaynak ve temas takibine ek olarak geliştirilmiştir. Bunun amacı yüksek bulaşma riski olan kullanıcıları, özel yaşamlarının gizliliğini titizlikle koruyarak, hızlı ve basit bir şekilde bilgilendirmektir. 

### 3. Kişisel verilerin işlenmesinin temeli 
Uygulamada kişisel veriler işlenebilir. Kişisel verilerin işlenmesi esası, kısacası kamu görevinin yerine getirilmesidir. Halk Sağlığı, Refah ve Spor Bakanı için bu kamu görevi,COVID-19 mücadelesini yönetmek ve ülkesel destek yapısını korumayı ve düzeltmeyi sağlamaktan ibarettir. 

GGD’ler için bu görev COVID-19 bulaşmalarının ihbarlarında kaynak ve temas takibi demektir. 

CoronaMelder’in kaynak ve temas takibinin destekleyici aracı olarak devreye girmesiyle, yukarıda belirtilen Halk Sağlığı, Refah ve Spor Bakanının ve GGD’lerin kamu görevleri icra edilmektedir. Bu kamu görevini yerine getirmek için CoronaMelder’in devreye girmesi Kamu Sağlığı Yasası’nın 6d. maddesinde yer almaktadır.

CoronaMelder’in indirilmesi ve kullanımı gönüllüdür ve gönüllü kalmaktadır. Yani hiç kimse sizi CoronaMelder’i kullanmaya zorlayamaz.

### 4. Hangi kişisel veriler işlenir? 
Uygulama kapsamında aşağıdaki veriler işlenmektedir:

* Rolling proximity indicators (Dönen Yakınlık Belirteçleri – RPI’ler)
* Temporary Exposure Keys (Geçici Maruz Kalma Anahtarları – TEK’ler)
* Diagnosis Keys (Tanı Anahtarları – DK’ler)
* Gerçek olmayan MAC-adresi
* İşaret gücü ve temas süresi
* Hastalığın ilk günü
* Doğrulama kodu
* Exposure Risk Value (Maruz Kalma Risk Değeri) (yüksek, orta, düşük)
* IP-adresi

Bu veriler kişisel veri olabilir. 

Bir TEK, geçici referans olarak kullanılan rastgele şifrelemeyle oluşturulan rakamlar sırasıdır. TEK bazında her 10 ile 20 dakikada bir RPI oluşturulur, yani bu da geçici, şifrelemeli oluşturulan bir rakam sırasıdır. Bu RPI, uygulamanın yüklendiği ve ilgili akıllı telefonun yakınında bulunan diğer akıllı telefonlarla belirli bir süre boyunca karşılıklı veri değişimi yapar. RPI’lerin alınması ve yayınlaması Bluetooth Low energy vasıtasıyla gerçekleşir. RPI aynı zamanda hem yayınlanan hem de alınan işaret gücüyle birlikte (kullanıcıların arasındaki mesafeyi belirlemek için) ve (Bluetooth) temasın süresi için de kullanılır. Alınan RPI’ler 14 gün sonra akıllı telefonlardan silinir. 

Hem TEK’ler, DK’ler hem de RPI’ler bulanıklaştırılmış tanımlama anahtarıdırlar.

Kullanıcıları teşhis riskinden mümkün olabildiğince  korumak için RPI’lerin değiş tokuşunda akıllı telefonun MAC adresi (Bluetooth-vericinin eşsiz donanım numarası) yerine, RPI’lerde de olduğu gibi her 10 ile 20 dakikada bir değişen, rastgele oluşturulan bir kod, yani gerçek olmayan bir MAC adresi konulur. 

Doğrulama kodu uygulama içinde sunulan işlevsellik yardımıyla oluşturulur ve uygulamada gösterilir. Doğrulama kodu GGD’ye gönderilen TEK’leri doğrulamak için GGD tarafından kullanılır. GGD bu doğrulama kodunu, ilk hastalık günü tarihiyle birlikte GGD portaline koyar. Bu GGD portali sadece GGD elemanına açıktır. Backend sunucusu ancak bununla birlikte belirtildiği şekilde GGD tarafından doğrulanan bir doğrulama kodu sunulduğunda kullanıcıların TEK’lerini kabul eder. Backend sunucusunda TEK’ler DK’lere dönüştürülür.

DK’lere, ilk hastalık gününe ve doğrulama koduna ek olarak, backend sunucusuna IP adresi de gönderilir. Bu da internet ve IP teknolojisinin kullanımının özündedir. IP adresi sadece yönetim ve koruma amaçlı işlenmektedir. IP adresi diğer verilerden ayrı olarak saklanır, böylece backend sunucusunda IP adresleri saklanmaz. Bu nedenle kimin hangi bilgiyi gönderdiği anlaşılamaz.

### 5. İstatistik bilgi 
Uygulamayla toplanan veriler sadece bu gizlilik beyanında belirtilen amaçlar için kullanılır. İstatistik bilgi üretilmez. 

### 6. Kişisel veriler kime tedarik edilir?
RPI’lerin yayınlanması ve alınması yerel olarak akıllı telefonlarda yapılır. Bulaşma tespit edildiğinde kullanıcı TEK’lerini eşsiz doğrulama koduyla birlikte backend sunucusuna göndermeyi seçebilir. Backend sunucusu taşeron (işleyici) olarak KPN ile CIBG tarafından yönetilir.

GGD, ilk hastalık gününün tarihiyle birlikte doğrulama kodunu, sadece yetkili GGD elemanlarına açık olan uygulamanın GGD portalinde işler.

DK’ler Avrupa Federal Geçit Hizmeti (EFGS) vasıtasıyla işbirliğine katılmış olan diğer Avrupa ülkeleriyle değişim yapar. EFGS’e katılmak adım adım olur. Katılan ülkelerin güncel dökümünü CoronaMelder.nl adlı web sayfasındaki sıkça sorulan soruların arasında ‘CoronaMelder en het buitenland’ (CoronaMelder ve yurtdışı) adlı bölümünde bulabilirsiniz.. EFGS Avrupa Komisyonu tarafından yönetilir (işleyici).

Diğer kullanıcıların akıllı telefonları periyodik olarak, günde birkaç kez, bu backend sunucusunda bulunan DK’leri indirirler.  

### 7. Kişisel verilerin saklanması
Akıllı telefonunuzda yerel olarak saklanan veriler 14 gün muhafaza edilir. Bu 14 günlük süre sonrası veriler otomatikman olarak silinir. Siz de istediğiniz an saklanan verileri silebilirsiniz. 

Verilerinizin backend sunucusunda/EFGS’te saklandığı kadarıyla o veriler yükleme anından itibaren 14 gün saklanır. Bu 14 günden sonra veriler silinir. 

Yönetim ve güvenlik amaçları için işlenen IP adresleri en fazla 7 gün sonra silinir.


### 8. Kişisel verileriniz açısından haklarınız 
Kişisel verileriniz üzerindeki kontrolü sağlamak için bazı haklarınız vardır. Bunları Autoriteit Persoonsgegevens (Kişisel Veriler Makamı) sitesinde, [burada bulabilirsiniz](https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/algemene-informatie-avg/rechten-van-betrokkenen).


CoronaMelder’in veri minimizasyonu ve privacy by design’in (tasarlanmış gizlilik) çıkış noktalarına göre şekillendirilmiş olması nedeniyle, AVG haklarınıza ancak kısıtlı olarak başvurabilirsiniz. Zira veriler ancak kısıtlı olarak işlenmektedir. Ayrıca verilerin kime ait olduğu neredeyse belirlenemez ve kısa süreli saklanır. AVG’in 11. maddesinden, işleme sorumlusu ilgili kişiyi (artık) teşhis edemezse AVG’nin 15. ila 20. maddelerinden kaynaklanan hakların artık uygulanamayacağı sonucu çıkar.

İlk aşamada – kullanıcılar TEK’lerini backend sunucusuna yüklemeden önce – veriler sadece CoronaMelder kullanıcılarının akıllı telefonlarında işlenmektedir. VWS Bakanı ve GGD’ler buna erişemez. Bu aşamada örneğin, verilerin değiştirilmesi veya kaldırılması istemi yerine getirilemez, ancak bu verilerin en fazla ondört gün sonra otomatik olarak bu akılı telefondan silinecekleri bir gerçektir.

Uygulamanın privacy by design özelliği sebebiyle TEK’leri (sonradan DK’leri) yükledikten sonra bile hangi kodların bulaşmış kullanıcıya ait olduğu ortaya çıkartılamaz. VWS ve GGD’ler için (geçici) olarak backend sunucusunda kaydedilen kodları TEK’lerini yükleyen kullanıcıya bağlatmak teknik yönden imkansızdır.
Kullanıcıyı kodları yardımıyla teşhis etmenin imkansızlığından dolayı AVG’nin 15. maddesinden 20. maddesine kadar olan haklar uygulanamaz. 

AVG haklarının ifası özetle ancak kısıtlı olarak gerekli olacaktır. Bu da basitçe söylemek gerekirse kişilerin verilerden teşhis edilmesi ancak hiç ya da çok kısıtlı mümkündür veya bu verilerin çok kısa saklanma müddetleri nedeniyle artık mevcut değildir. Bu da AVG’nin 11. maddesine uygundur, çünkü bundan AVG’nin 15. maddesinden 20. maddesine kadar içeren hakların, ilgili kişilerin artık teşhis edilememesi durumunda uygulanmamasından kaynaklanmaktadır. 

Gizlilik haklarınızdan birini kullanmaya yönelik başvuru imkanı mevcut kalacaktır. Talebinizi ikamet ettiğiniz yerden sorumlu olan GGD’e gönderebilirsiniz. [www.GGD.nl](https://www.ggd.nl) adlı web sitesinde ikamet ettiğiniz yerden hangi GGD’nin sorumlu olduğunu öğrenmek için ikamet adresinizin posta kodunu girebilirsiniz. Hollanda’da ikamet adresiniz yoksa kaldığınız yerin posta kodunu da girebilirsiniz.

Kişisel verilerinizin işlenmesi hakkında Autoriteit Persoonsgegevens’e veya mahkemeye şikayette bulunma hakkınız her zaman bulunmaktadır. Konuyla ilgili bilgiyi [burada bulabilirsiniz](https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/algemene-informatie-avg/rechten-van-betrokkenen). 

GGD’nin Veri Koruma Görevlisinin ikamet yerinizden sorumlu kişinin irtibat bilgileri o GGD’nin web sayfası vasıtasıyla bulabilirsiniz. [www.GGD.nl](https://www.ggd.nl)

Halk Sağlığı, Refah ve Spor Bakanlığının Veri Koruma Görevlisinin irtibat bilgilerini ise o bakanlığın <a href="https://www.rijksoverheid.nl/ministeries/ministerie-van-volksgezondheid-welzijn-en-sport/avg/contact/functionaris-gegevensbescherming" target="_blank" rel="noopener noreferrer">web sayfasında bulabilirsiniz</a>.

### 9. Kişisel verilerinizin korunması
Halk Sağlığı, Refah ve Spor Bakanı ve de GGD’ler verilerinizin korunmasını ciddiye almakta ve suiistimal, kayıp, yetkisiz giriş, kamuya istek dışı duyurma ve izinsiz değişiklikleri önlemek için uygun tedbirleri almaktadır.

### 10. Gizlilik beyanının değiştirilmesi
İşbu  gizlilik beyanı değiştirilebilir. Bu durumda değiştirilmiş gizlilik beyanını web sitemizde yayınlarız ve  hemen akabinde yeni gizlilik beyanı da yürürlüğe girer. 
Son güncellenme: 23 Kasım 2020

