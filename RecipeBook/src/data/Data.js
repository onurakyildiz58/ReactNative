import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'İtalyan', '#f5428d'),
  new Category('c2', 'Pratik', '#f54242'),
  new Category('c3', 'Hamburgerler', '#f5a442'),
  new Category('c4', 'Alman', '#f5d142'),
  new Category('c5', 'Hafif', '#368dff'),
  new Category('c6', 'Ekzotik', '#41d95d'),
  new Category('c7', 'Kahvaltılık', '#9eecff'),
  new Category('c8', 'Uzak Doğu', '#b9ffb0'),
  new Category('c9', 'Fransız', '#ffc7ff'),
  new Category('c10', 'Yazlık', '#47fced')
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Domates Soslu Makarna',
    'ucuz',
    'kolay',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    20,
    [
      '4 Tane Domates',
      '1 Çorba Kaşığı Zeytin Yağı',
      '1 Soğan',
      '250g Makarna',
      'Baharatlar',
      'Peynir (opsiyonel)'
    ],
    [
      'Soğan ve domatesleri küçük parçalar halinde doğra.',
      'Tencereyinin yarısına kadar tuzlu suyu kaynat.',
      '10-20 dk boyunca makarnaları haşla,',
      'Zeytin yğında kestiğiniz soğanları kızart.',
      '2 dakika sonra domates parçalarını, tuz, karabiber ve diğer baharatlarınızı ekleyin.',
      'Spagetti pişince sos da pişmiş olacak.',
      'Bitmiş yemeğin üzerine tercihen biraz peynir ekleyiniz.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2'],
    'Hawaii Tostu',
    'Ucuz',
    'Basit',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    10,
    [
      '1 Dilim Tost Ekmeği',
      '1 Dilim Salam',
      '1 Dilim Ananas',
      '1-2 Dilim Kaşar',
      'Tereyağı'
    ],
    [
      'Beyaz ekmeğin bir tarafını yağlayın',
      'Beyaz ekmeğin üzerine salam, ananas ve peynir koyun',
      'Tostu 200°C fırında yaklaşık 10 dakika pişirin'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c3'],
    'KlasiK Hamburger',
    'Pahalı',
    'Basit',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    45,
    [
      '300g Köfte',
      "1 Domates",
      "1 Salatalık",
      "1 Soğan",
      "Ketçap",
      '2 Burger Ekmeği'
    ],
    [
      '2 köfte oluşturun',
      'Köftelerin her iki tarafını yaklaşık 4 dakika kızartın',
      'Hamburger ekmeklerin her iki tarafını yaklaşık 1 dakika hızlıca kızartın',
      "Ketçapı hamburger ekmeklerine iyice yedirin",
      'Burgeri domates, salatalık ve soğan ile servis edin'
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c4'],
    'Şnitzel',
    'Çok Pahalı',
    'Zor',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    60,
    [
      '8 Dana Pirzola',
      "4 Yumurta",
      "200g Ekmek Kırıntısı",
      '100g Un',
      "300ml Tereyağı",
      '100g Bitkisel Yağ',
      "Salt",
      'Limon Dilimleri'
    ],
    [
      'Dana etini yaklaşık 2-4 mm yumuşatın ve her iki tarafını da tuzlayın.',
      'Düz bir tabakta yumurtaları çatalla kısa bir süre karıştırın.',
      'Pirzolaları hafifçe una bulayın, ardından yumurtaya batırın ve son olarak galeta ununa bulayın.',
      'Tereyağı ve sıvı yağı büyük bir tavada ısıtın (yağın çok ısınmasına izin verin) ve şnitzelleri her iki tarafı da altın sarısı olana kadar kızartın.',
      'Şnitzellerin yağ ile çevrelenmesi ve kırıntıların kabarık hale gelmesi için tavayı düzenli olarak fırlattığınızdan emin olun.',
      'Çıkarın ve mutfak kağıdı üzerinde süzün. Maydanozu kalan yağda kızartın ve süzün.',
      'Şnitzelleri ısıtılmış tabağa yerleştirin ve maydanoz ve limon dilimleri ile süsleyerek servis edin.',
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c2', 'c5', 'c10'],
    'Somon Fümeli Salata',
    'Çok Pahalı',
    'Basit',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    15,
    [
      'Arugula',
      'Kuzu Marul',
      'Maydanoz',
      'Rezene',
      '200g Somon Füme',
      'Hardal',
      'Balsamik Sirke',
      'Zeytinyağı',
      'Tuz ve Biber'
    ],
    [
      'Salata ve otları yıkayın ve kesin',
      'Somonu doğrayın',
      'Hardal, sirke ve zeytinyağını dessing haline getirin',
      'Salatayı hazırlayın',
      'Somon küpleri ve sos ekleyin'
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6', 'c10'],
    'Lezzetli Portakallı Mus',
    'Ucuz',
    'Zor',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    240,
    [
      '4 Yaprak Jelatin',
      '150ml Portakal Suyu',
      '80g Şeker',
      '300g Yoğurt',
      '200g Krema',
      'Portakal Kabuğu'
    ],
    [
      'Jelatini tencerede eritin',
      'Portakal suyu ve şeker ekleyin',
      'Tencereyi ocaktan al',
      '2 yemek kaşığı yoğurt ekleyin',
      'Jelatini kalan yoğurdun altında karıştırın',
      'Her şeyi buzdolabında soğutun',
      'Kremayı çırpın ve kalıp portakal kütlesinin altına kaldırın',
      'En az 4 saat boyunca tekrar soğutun',
      'Portakal kabuğu ile servis edin'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm7',
    ['c7'],
    'Pankek',
    'Ucuz',
    'Basit',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    20,
    [
      '1,5 su bardağı çok amaçlı un',
      '3 1/2 Çay Kaşığı Kabartma Tozu2',
      '1 Çay Kaşığı Tuz',
      '1 Çorba Kaşığı Beyaz Şeker',
      '1 1/4 bardak süt',
      '1 Yumurta',
      '3 Çorba Kaşığı Tereyağı, Eritilmiş'
    ],
    [
      'Büyük bir kapta un, kabartma tozu, tuz ve şekeri birlikte eleyin.',
      'Ortasına bir çukur açın ve süt, yumurta ve eritilmiş tereyağını dökün; pürüzsüz olana kadar karıştırın.',
      'Hafifçe yağlanmış bir ızgarayı veya kızartma tavasını orta yüksek ateşte ısıtın.',
      'Her bir krep için yaklaşık 1/4 fincan kullanarak hamuru kalburun üzerine dökün veya kepçe ile alın. Her iki tarafını da kızartın ve sıcak olarak servis edin.',
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm8',
    ['c8'],
    'Körili Kremalı Tavuk',
    'Pahalı',
    'Zorlayıcı',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    35,
    [
      '4 Tavuk Göğsü',
      '1 Soğan',
      '2 Diş Sarımsak',
      '1 Parça Zencefil',
      '4 Çorba Kaşığı Badem',
      '1 Çay Kaşığı Acı Biber',
      '500ml Hindistan Cevizi Sütü'
    ],
    [
      'Tavuk göğsünü dilimleyin ve kızartın',
      'Soğan, sarımsak ve zencefili macun haline getirin ve hepsini soteleyin',
      'Baharat ekleyin ve kızartın2',
      'Tavuk göğsü + 250 ml su ekleyin ve hepsini 10 dakika pişirin',
      'Hindistan cevizi sütü ekle',
      'Pirinçle servis edin'
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm9',
    ['c9'],
    'Çikolatali Sufle',
    'Ucuz',
    'Zor',
    'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
    45,
    [
      "1 Çay Kaşığı Eritilmiş Tereyağı",
      "2 Çorba kaşığı beyaz şeker",
      '60 gram %70 bitter çikolata, parçalara ayrılmış',
      "1 Çorba Kaşığı Tereyağı",
      '1 Çorba Kaşığı Çok Amaçlı Un',
      '4 1/3 yemek kaşığı soğuk süt',
      "1 Tutam Tuz",
      "1 Tutam Acı Biber",
      "1 Büyük Yumurta Sarısı",
      "2 Büyük Yumurta Akı",
      '1 Tutam Tartar Kreması',
      '1 Çorba Kaşığı Beyaz Şeker'
    ],
    [
      'Fırını önceden 190°C\'ye ısıtın. Kenarlı bir fırın tepsisine parşömen kağıdı serin.',
      '2 ramekinin alt ve yanlarına 1 çay kaşığı eritilmiş tereyağı sürün; alt ve yanları kenarlara kadar kaplayın.',
      'Ramekinlere 1 çorba kaşığı beyaz şeker ekleyin. Şeker tüm yüzeyleri kaplayana kadar ramekinleri döndürün.',
      'Çikolata parçalarını metal bir karıştırma kabına koyun.',
      'Kaseyi kısık ateşte yaklaşık 3 bardak sıcak su dolu bir tencerenin üzerine yerleştirin.',
      '1 çorba kaşığı tereyağını bir tavada orta ateşte eritin. Unu içine serpin. Un tereyağına karışana ve karışım koyulaşana kadar çırpın.',
      'Karışım pürüzsüz hale gelip koyulaşana kadar soğuk sütü çırpın. Karışımı eritilmiş çikolatanın bulunduğu kaseye aktarın.',
      'Tuz ve kırmızı biber ekleyin. İyice karıştırın. Yumurta sarısını ekleyin ve karıştırın.',
      'Yumurta aklarını çırparken çikolatayı sıcak tutmak için kaseyi sıcak (kaynamayan) suyun üzerinde bırakın.',
      '2 yumurta beyazını bir karıştırma kabına koyun; tartar kremasını ekleyin. Karışım koyulaşmaya başlayana ve çırpma telinden bir damla karışımın içinde kaybolmadan önce yaklaşık 1 saniye yüzeyde kalana kadar çırpın.',
      'Şekerin 1/3\'ünü ekleyin ve çırpın. Yaklaşık 15 saniye daha çırpın.',
      'Şekerin geri kalanını çırpın. Karışım tıraş kremi kıvamına gelene ve yumuşak tepeler oluşturana kadar çırpmaya devam edin, 3 ila 5 dakika.',
      'Yumurta aklarının yarısından biraz azını çikolataya aktarın.',
      'Yumurta akları çikolataya iyice karışana kadar karıştırın.',
      'Yumurta akının geri kalanını ekleyin; bir spatula ile alttan kaldırarak ve katlayarak yavaşça çikolatanın içine katlayın.',
      'Yumurta akı kaybolduktan sonra karıştırmayı bırakın. Karışımı hazırlanan 2 ramekin arasında bölün. Ramekinleri hazırlanmış fırın tepsisine yerleştirin.',
      'Önceden ısıtılmış fırında kabarıncaya ve kenarları yükselinceye kadar 12 ila 15 dakika pişirin.',
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm10',
    ['c2', 'c5', 'c10'],
    'Çeri Domatesli Kuşkonmaz Salatası',
    'Çok Pahalı',
    'Basit',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    30,
    [
      'Beyaz ve Yeşil Kuşkonmaz',
      '30g Çam Fıstığı',
      '300g Kiraz Domates',
      'Salata',
      'Tuz, Biber ve Zeytinyağı'
    ],
    [
      'Kuşkonmazı yıkayın, soyun ve kesin.',
      'Tuzlu suda pişirin.',
      'Kuşkonmazı tuzlayın ve biberleyin.',
      'Çam fıstığını kavurun.',
      'Domatesleri ikiye bölün.',
      'Kuşkonmaz, salata ve sos ile karıştırın.',
      'Baget ile servis edin.'
    ],
    true,
    true,
    true,
    true
  )
];