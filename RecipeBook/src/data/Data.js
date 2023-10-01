import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Tatlılar', '#f5428d'),
  new Category('c2', 'Soslar', '#f54242'),
  new Category('c3', 'Poğacalar', '#f5a442'),
  new Category('c4', 'Kurabiyeler', '#f5d142'),
  new Category('c5', 'Pastalar', '#368dff'),
  new Category('c6', 'Kekler', '#92e228'),
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1'],
    'Baklava (Annemin Tarifi)',
    'https://cdn.yemek.com/mncrop/940/625/uploads/2017/06/fistikli-baklava-yemekcom1.jpg',
    [
      '2 Tane Yumurta',
      '1 Su Bardağı Süt',
      '1 Su Bardağı Sıvıyağ',
      'Çeyrek Limon',
      '1 Tutam Tuz',
      'Yarım Su Bardağı Yoğurt',
      'Aldığı Kadar Un',
    ]
  ),
  new Meal(
    'm2',
    ['c1'],
    'Şeker Pare',
    'https://cdn.yemek.com/mncrop/940/625/uploads/2014/07/sekerpare-ytk-site.jpg',
    [
      '1 Su Bardağı Sıvıyağ',
      '3 Yemek Kaşığı Yoğurt',
      '1 Yumurta',
      '1 Paket Kabartma Tozu',
      '1 Avuç Toz Şeker',
      '40-50 Tane Fındık'
    ]
  ),
  new Meal(
    'm3',
    ['c1'],
    'Revani',
    'https://cdn.yemek.com/mncrop/940/625/uploads/2014/06/revani-yemekcom.jpg',
    [
      '4 Yumurta',
      '2 Su Bardağı Toz Şeker',
      '1 Su Bardağı Yoğurt',
      '1 Su Bardağı Un',
      '1 Su Bardağı İrmik',
      '1 Paker Kabartma Tozu'
    ]
  ),
  new Meal(
    'm4',
    ['c1'],
    'Şerbet',
    'https://cdn.yemek.com/mncrop/940/625/uploads/2018/05/baklava-sekerlenmemesi-icin.jpg',
    [
      '5,5 Su Bardağı Şeker',
      '5 Su Bardağı Su',
      'Yarım Limon',
    ]
  ),
  new Meal(
    'm5',
    ['c4'],
    'Esmer Güzeli',
    'https://www.fiskosta.com/wp-content/uploads/2013/08/esmer-guzeli-tatlisi-tarifi-600x330.jpg',
    [
      '1 Paket Margarin (erit)',
      '1 Paket Kakao',
      '3 Yumurta',
      '1 Paket Vanilya ve Kabartma Tozu',
      '2 Su Bardağı Süt',
      '1 Su Bardağı Toz Şeker',
      '3 Su Bardağı Un',
    ]
  ),
  new Meal(
    'm6',
    ['c1'],
    'İrmik Helvası',
    'https://cdn.yemek.com/mncrop/940/625/uploads/2014/11/irmik-helvasi-yemekcom.jpg',
    [
      '2 Su Bardağı İrmik',
      '150 gr Tereyağı',
      '2,5 Su Bardağı Süt',
      '1 Su Bardağı Toz Şeker',
      '1 Paket Çam Fıstığı'
    ]
  ),
  new Meal(
    'm7',
    ['c1'],
    'Kadayıflı Muhallebi',
    'https://iasbh.tmgrup.com.tr/4de43b/821/464/52/0/752/395?u=https://isbh.tmgrup.com.tr/sbh/2021/10/20/muhallebili-kadayif-tarifi-muhallebili-kadayif-nasil-yapilir-malzemeleri-nelerdir-1634719940606.jpg',
    [
      '300gr Kadayıf',
      '1 Su Bardağı Toz Şeker',
      '1 Su Bardağı Ceviz Ya Da Fındık',
      '1 Su Bardağı Sıvıyağ',
      'Muhallebisi İçin 2,5 Kahve Fincanı Un',
      'Muhallebisi İçin 1,5 Su Bardağı Şeker',
      'Muhallebisi İçin 1 Litre Süt',
      'Muhallebisi İçin Vanilya Veya Damla Sakızı',
    ]
  ),
  new Meal(
    'm8',
    ['c1'],
    'Mavi Haşhaşlı Tatlı',
    'https://cdn.yemek.com/mnresize/1250/833/uploads/2023/02/mavi-hashasli-tatli-sunum.jpg',
    [
      '3 yumurta',
      '1 Su Bardağı Şeker',
      '1 Su Bardağı Yoğurt',
      '1 Su Bardağı Sıvıyağ',
      '1 Su Bardağı İrmik',
      '1 Su Bardağı Mavi Haşhaş',
      '1,5 Su Bardağı Un',
      '1 Paket Kabartma Tozu',
    ]
  ),
  new Meal(
    'm9',
    ['c1'],
    'Kıbrıs Tatlısı',
    'https://cdn.yemek.com/mncrop/940/625/uploads/2016/01/kibris-tatlisi-yemekcom.jpg',
    [
      '4 yumurta',
      '1 Su Bardağı Galeta Unu',
      '1 Su Bardağı Sıvıyağ',
      '1 Su Bardağı Ceviz',
      '1 Su Bardağı Hindistan Cevizi',
      '1 Su Bardağı Toz Şeker',
      '1 Paket Kabartma Tozu',
      '1 Paket Vanilya',
      'Şerbet',
      'Kreması İçin 1 Litre Süt',
      'Kreması İçin 2 Çorba Kaşığı un',
      'Kreması İçin 2 Çorba Kaşığı Nişasta',
      'Kreması İçin 4 Çorba Kaşığı Toz Şeker',
      'Kreması İçin 1 Paket Vanilya',
      'Kreması İçin 1 Paket Kremşanti (Toz olarak Kullanılacak)',
      'Kreması İçin Pişen Kremaya kat ve çırp',
    ]
  ),
  new Meal(
    'm10',
    ['c1'],
    'Kalbura Bastı',
    'https://cdn.yemek.com/mnresize/1250/833/uploads/2022/04/kalburabasti-yeni-onecikan.jpg',
    [
      '1 Paket Margarin Veya Tereyağ',
      'Yarım Su Bardağı Sıvıyağ',
      '2 Yemek Kaşığı Yoğurt',
      '1 Adet Yumurta',
      '2 Yemek Kaşığı Su',
      '2 Yemek Kaşığı Sirke',
      '1 Tatlı Kaşığı Karbonat',
      '5-6 Bardak Un',
      '1-1,5 Su Bardağı İri Parçalanmış Ceviz Veya Fındık',
      'Şerbet',
    ]
  ),
  new Meal(
    'm11',
    ['c1'],
    'Cevizli Rulo Tatlı',
    'https://cdn.yemek.com/mnresize/1250/833/uploads/2022/02/cevizli-rulo-tatli-esmavi.jpg',
    [
      '1 Adet Yumurta',
      '2 Yemek Kaşığı Yoğurt',
      '2 Yemek Kaşığı Tereyağ Veya Mergarin (eritme)',
      '2,5 Yemek Kaşığı İrmik',
      '1 Yemek Kaşığı Sirke',
      '1 Paket Vanilya ve Kabartma Tozu',
      '2,5-3 Su Bardağı Un',
      '1 Su Bardağı Ceviz İçi',
      'NOT: Hamuru Yağı Kağıt Arasında Aç Fırın Tepsisi Kadar Üzerine Ceviz Serp Ve Şeritler Halinde Kes ve Sar',
    ]
  ),
  new Meal(
    'm12',
    ['c1'],
    'Kesme İrmik Tatlısı',
    'https://cdn.yemek.com/mnresize/1250/833/uploads/2022/08/kesme-irmik-tatlisi-tarif-yemekcom.jpg',
    [
      '125gr Margarin (eritme)',
      '1 Su Bardağından 1 Parmak Eksik Sıvıyağ',
      '2 Yemek Kaşığı Pudra Şekeri',
      '1 Yumurta',
      '1 Paket Kabartma Tozu',
      '1 Paket Vanilya',
      '2-3 Su Bardağı Un',
      'Şerbet'
    ]
  ),
  new Meal(
    'm13',
    ['c1'],
    '3 Kaşık Tatlısı',
    'https://cdn.yemek.com/mncrop/940/625/uploads/2020/05/uc-kasik-tatlisi-tarifi.jpeg',
    [
      '3 Yumurta',
      '3 Yemek Kaşığı Toz Şeker',
      '3 Yemek Kaşığı Sıvıyağ',
      '3 Yemek Kaşığı Süt',
      '3 Yemek Kaşığı İrmik',
      '3 Yemek Kaşığı Un',
      '1 Paket Kabartma Tozu',
      '1 Paket Vanilya',
      'Şerbet'
    ]
  ),
  new Meal(
    'm14',
    ['c4'],
    'Marmelatlı Kurabiye',
    'https://cdn.yemek.com/mncrop/940/625/uploads/2017/09/visne-marmelatli-kurabiye-tarifi.jpg',
    [
      '1 Paket Margarin (Oda Sıcaklığında)',
      '4 Yemek Kaşığı Pudra Şekeri',
      '1 Yumurta (Akı Dışı İçin) (Sarısı Hamuru İçin)',
      'Fındık Veya Ceviz',
      '1 Paket Kabartma Tozu',
      '1 Paket Vanilya',
    ]
  ),
  new Meal(
    'm15',
    ['c4'],
    'Pratik Kurabiye',
    'https://cdn.yemek.com/mncrop/940/625/uploads/2018/10/kiyir-kurabiye-yemekcom.jpg',
    [
      '250gr Margarin (Eritmeden)',
      '2 Adet Yumurta',
      '2 Su Bardağı Pudra Şekeri',
      '1 Su Bardağı Fındık Veya Ceviz',
      '1 Paket Vanilya',
      '1 Paket Kabartma Tozu',
      '5-6 Su Bardağı Un',
    ]
  ),
  new Meal(
    'm16',  
    ['c4'],
    'Tutku Kurabiye',
    'https://www.lezzetlisunumlar.com/wp-content/uploads/2021/07/Tutku-Kurabiye.jpg',
    [
      '200gr margarin Veya Tereyağı (Eritmeden)',
      '1 Su Bardağı Pudra Şekeri',
      '1 Paket Vanilya',
      '1 Paket Kabartma Tozu',
      '1 Çay Bardağı Nişasta',
      '2,5-3 Su Bardağı Un',
      'Hamuru İkiye Böl Ve Yarısına Kakao Ekle',
    ]
  ),
  new Meal(
    'm17',  
    ['c5'],
    'Mozaik Pasta',
    'https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/mozaik-pasta-tarifi-yemekcom.jpg',
    [
      '500gr Petibör',
      '125gr Margarin (Erit)',
      '4 Yemek Kaşığı Kakao',
      '1 Su Bardağı Süt',
    ]
  ),
  new Meal(
    'm18',  
    ['c5'],
    'Gözyaşı Pastası',
    'https://image.hurimg.com/i/hurriyet/75/750x422/5ac8accbd3806c0c7094c8b5.jpg',
    [
      '4 Yumurta',
      '1 Su Bardağı Toz Şeker',
      '1-2 Su Bardağı Un',
      '2 Yemek Kaşığı Kakao',
      '1,5 Çay Bardağı Süt',
      '1 Paket Vanilya',
      '1 Paket Kabartma Tozu',
      'Kreması İçin 2 Paket Kremşanti',
      'Kreması İçin 1 Paket Çikolata Sosu (Sıcak)',
    ]
  ),
  new Meal(
    'm19',  
    ['c5'],
    'Sadrazam Pastası',
    'https://www.evdekipastane.com/wp-content/uploads/2021/01/sadrazam-lokumu-pastasi.jpg',
    [
      '3 Yumurta',
      '4 Çay Bardağı Şeker',
      '6 Çay Bardağı Un',
      '2 Çay Bardağı Su',
      '1 Paket Vanilya',
      '1 Paket Kabartma Tozu',
      'İçi İçin 1 Paket Kremşanti',
      'İçi İçin 1 Su Bardağı Süt',
      'İçi İçin Islatmak İçin 2-3 Su Bardağı Süt ve 1 Paket Hindistan Cevizi',
    ]
  ),
  new Meal(
    'm20',  
    ['c5'],
    'Tiramisu',
    'https://cdn.yemek.com/mnresize/1250/833/uploads/2021/03/kedidili-tiramisu-yemekcom.jpg',
    [
      'Hazır Kek',
      '1-2 Su Bardağı Neskafe (Sade)',
      'Krema İçin 3,5 su Bardağı Süt',
      'Krema İçin 1 Yumurta',
      'Krema İçin 10 Yemek Kaşığı Şeker',
      'Krema İçin 3,5 Tepeli Yemek Kaşığı Un',
    ]
  ),
  new Meal(
    'm21',  
    ['c5'],
    'Profiterol',
    'https://cdn.yemek.com/mncrop/940/625/uploads/2014/11/profiterol-yemekcom2.jpg',
    [
      '1 Su Bardağı Su',
      '1 Su Bardağı Un',
      '125gr Margarin',
      '3 Yumurta',
      'Krema İçin 3 Yemek Kaşığı Un',
      'Krema İçin 1 Litre Süt',
      'Krema İçin 1,5 Çay Bardağı Şeker',
      'Krema İçin 1 Paket Vanilya',
    ]
  ),
  new Meal(
    'm22',  
    ['c5'],
    'Yanardağ Pastası',
    'https://cdn.yemek.com/mncrop/940/625/uploads/2019/11/yanardag-pasta-editor.jpg',
    [
      '1 Paket Kremşanti',
      '1 Su Bardağı Süt',
      '1 Paket Kakao',
      '8 Adet Halley',
      'Hazır Kek',
      '1 Paket Çikolata Sosu',
    ]
  ),
  new Meal(
    'm23',  
    ['c5'],
    'Kakaolu Browni',
    'https://cdn.yemek.com/mnresize/1250/833/uploads/2021/01/browni-tadinda-islak-kek-yemekcom.jpg',
    [
      '3 Yumurta',
      '1 Su Bardağı Toz Şeker',
      '1 Su Bardağı Süt',
      '1 Çay Bardağı Sıvıyağ',
      '1 Su Bardağı Un',
      '3 Yemek Kaşığı Kakao',
      '1 Paket Vanilya',
      '1 Paket Kabartma Tozu',
      'Sosu İçin 2 Su Bardağı Süt',
      'Sosu İçin 1 Su Bardağı Toz Şeker',
      'Sosu İçin 1 Çay Bardağı Sıvıyağ',
      'Sosu İçin 2 Yemek Kaşığı Kakao',
    ]
  ),
  new Meal(
    'm24',  
    ['c5'],
    'Rulo Pasta',
    'https://cdn.yemek.com/mncrop/940/625/uploads/2017/07/muzlu-rulo-pasta-yemekcom.jpg',
    [
      '3 Yumurta',
      '1 Su Bardağından 1 Parmak Eksik Toz Şeker',
      '1 Paket Vanilya',
      '1 Paket Kabartma Tozu',
      '1 Su Bardağı Un',
      'Üzeri İçin 1 Paket Kremşanti',
      '1 Su Bardağı Süt',
      'Kreması İçin 2 Su Bardağı Süt',
      'Kreması İçin 1 Paket Vanilya',
      'Kreması İçin 2,5 Yemek Kaşığı Un',
      'Kreması İçin 1 Yemek Kaşığı Nişasta',
      'Kreması İçin 4 Yemek Kaşığı Toz Şeker',
      'Kreması İçin 1 Yemek Kaşığı Tereyağ (Piştiken Sonra)',
      'Arasına 1-2 Tane Muz',
    ]
  ),
  new Meal(
    'm25',  
    ['c4'],
    'Elmalı Tart',
    'https://cdn.yemek.com/mnresize/1250/833/uploads/2021/08/elmali-turta-6-tahira-tarifi.jpg',
    [
      '1 Yumurta',
      'Yarım Paket Margarin (Erit)',
      '1 Çay Bardağı Sıvıyağ',
      '4 Çorba Kaşığı Şeker',
      '1 Kabartma Tozu',
      'Aldığı Kadar Un',
      'İçi İçin 3 Rendelenmiş Elma',
      'İçi İçin 4 Çorba Kaşığı Şeker Tarçın (Pişirme)',
      'İçi İçin İsteğe Bağlı Ceviz Veya Fındık',
      'NOT: Hamurun 1/3\'ünü Ayır En Son Üstüne Rendele',
    ]
  ),
  new Meal(
    'm26',  
    ['c4'],
    'Cevizli Kurabiye',
    'https://cdn.yemek.com/mnresize/1250/833/uploads/2021/12/cevizli-kurabiye-2-tarifi.jpg',
    [
      '1 Yumurta',
      '1 Çay Bardağı Yoğurt',
      '1 Çay Bardağı Sıvıyağ',
      '1 Çay Bardağı Toz Şeker',
      '1 Paket Kabartma Tozu',
      '1 Paket Margarin (Oda Sıcaklığında)',
      '5-6 Bardak Un',
      '250-300gr Fındık Veya Ceviz',
    ]
  ),
  new Meal(
    'm27',  
    ['c2'],
    'Beşamel Sos',
    'https://cdn.yemek.com/mnresize/1250/833/uploads/2015/05/besamel-sos-one-cikan.jpg',
    [
      '2 Yemek Kaşığı Un',
      '2 Yemek Kaşığı Tereyağ Veya Margarin',
      '2 Su Bardağı Süt',
    ]
  ),
  new Meal(
    'm28',  
    ['c2'],
    'Ev Yapımı Çikolata Sos',
    'https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/cikolata-sosu-yemekcom.jpg',
    [
      '1,5 Su Bardağı Süt',
      '1 Su Bardağı Su',
      '1,5 Yemek Kaşığı Nişasta',
      '2 Yemek Kaşığı Kakao',
      '2 Yemek Kaşığı Şeker',
    ]
  ),
  new Meal(
    'm29',  
    ['c3'],
    'Elmalı Poğaça',
    'https://www.pogacatarifi.com/wp-content/uploads/2022/07/Elmali-Kurabiye-TarifiII-780x470.png',
    [
      '1 Paket Margarin',
      '1 Su Bardağı Yoğurt',
      '1,5 Su Bardağı Toz Şeker',
      '1 Su Bardağı Sıvıyağ',
      '1 Paket Kabartma Tozu',
      'Aldığı Kadar Un',
      'İçi İçin 5-6 Elma',
      'İçi İçin 3-4 Yemek Kaşığı Şeker',
      'İçi İçin 1-2 Çay Kaşığı Tarçın',
    ]
  ),
  new Meal(
    'm30',  
    ['c3'],
    'Mayalı Poğaça',
    'https://cdn.yemek.com/mncrop/940/625/uploads/2015/05/mayali-pogaca-yemekcom.jpg',
    [
      '3 Su Bardağı Süt',
      '1,5 Su Bardağı Sıvıyağ',
      '2 Yumurta (Sarısını Dışına Sürmek İçin Ayır)',
      '2 Çay Kaşığı Tuz',
      '1,5 Su Bardağı Toz Şeker',
      '1 Paket Maya',
      'Aldığı Kadar Un',
    ]
  ),
  new Meal(
    'm31',  
    ['c3'],
    'Dev Gibi Kabaran Poğaça',
    'https://www.tarifdefteri.org/wp-content/uploads/2022/02/Dev-Gibi-Kabaran-Pamuk-Pogaca-Tarifi.jpg',
    [
      '1,5 Su Bardağı Süt (ılık)',
      '1,5 Su Bardağı Sıvıyağ',
      '1,5 Su Bardağı Su (Ilık)',
      '1 Adet Yumurta (Akı Hamura Sarısı Sosa)',
      '2 Yemek Kaşığı Toz Şeker',
      '1,5 Tatlı Kaşığı Tuz',
      '1 Tatlı kaşığı Kuru Maya',
      'Aldığı Kadar Un',
      'Sosu İçin 1,5 Su Bardağı Yoğurt',
      'Sosu İçin Yumurta Sarısı',
      'Sosu İçin 1 Tatlı Kaşığı Sürülebilir Peynir',
      'İçini İstediğinizle Doldurabilirsiniz',
    ]
  ),
  new Meal(
    'm32',  
    ['c3'],
    'Mayasız Poğaça',
    'https://cdn.yemek.com/mncrop/940/625/uploads/2016/11/mayasiz-pogaca-guncelleme-sunum-1.jpg',
    [
      '125gr Margarin Veya Tereyağ',
      'Yarım Su Bardağı Yoğurt',
      'Yarım Su Bardağı Sıvıyağ',
      '2 Yumurta (Birinin Sarısını Üstüne Sürmek İçin Ayır)',
      '1 Paket Kabartma Tozu',
      '1,5 Tatlı Kaşığı Tuz',
      'Aldığı Kadar Un',
      'İçini İstediğinizle Doldurabilirsiniz',
    ]
  ),
  new Meal(
    'm33',  
    ['c6'],
    'Kek',
    'https://cdn.yemek.com/mncrop/940/625/uploads/2014/07/sade-kek-tarifi-yeni.jpg',
    [
      '3 Yumurta',
      '1,5 Su Bardağı Şeker',
      '1 Su Bardağı Sıvıyağ',
      '1 Su Bardağı Yoğurt',
      '1 Su Bardağı Süt',
      '1 Paket Kabartma Tozu',
      '1 Paket Vanilya',
      'Aldığı Kadar Un',
    ]
  ),
];