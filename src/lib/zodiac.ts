export interface ZodiacSign {
  name: string;
  symbol: string;
  element: string;
  dates: string;
  description: string;
  traits: string[];
}

export const zodiacSigns: ZodiacSign[] = [
  {
    name: "Aries",
    symbol: "♈",
    element: "Api",
    dates: "21 Maret - 19 April",
    description: "Berani dan ambisius, Aries terjun langsung ke situasi yang paling menantang sekalipun.",
    traits: ["Berani", "Tegas", "Percaya Diri", "Antusias", "Optimis"]
  },
  {
    name: "Taurus",
    symbol: "♉",
    element: "Tanah",
    dates: "20 April - 20 Mei",
    description: "Cerdas, ambisius, dan dapat dipercaya, Taurus adalah jangkar dari Zodiak.",
    traits: ["Dapat Diandalkan", "Sabar", "Praktis", "Setia", "Bertanggung Jawab"]
  },
  {
    name: "Gemini",
    symbol: "♊",
    element: "Udara",
    dates: "21 Mei - 20 Juni",
    description: "Ceria dan intelektual yang penasaran, Gemini terus-menerus menyeimbangkan berbagai minat.",
    traits: ["Lembut", "Penuh Kasih", "Penasaran", "Mudah Beradaptasi", "Cerdas"]
  },
  {
    name: "Cancer",
    symbol: "♋",
    element: "Air",
    dates: "21 Juni - 22 Juli",
    description: "Intuitif, emosional, dan sangat protektif, Cancer adalah pengasuh dalam zodiak.",
    traits: ["Gigih", "Emosional", "Simpatik", "Persuasif", "Imajinatif"]
  },
  {
    name: "Leo",
    symbol: "♌",
    element: "Api",
    dates: "23 Juli - 22 Agustus",
    description: "Berani, cerdas, hangat, dan bernyali, Leo adalah pemimpin alami.",
    traits: ["Kreatif", "Penuh Gairah", "Dermawan", "Baik Hati", "Ceria"]
  },
  {
    name: "Virgo",
    symbol: "♍",
    element: "Tanah",
    dates: "23 Agustus - 22 September",
    description: "Logis, praktis, dan sistematis, Virgo mendekati hidup dengan perhatian pada detail.",
    traits: ["Setia", "Analitis", "Baik", "Pekerja Keras", "Praktis"]
  },
  {
    name: "Libra",
    symbol: "♎",
    element: "Udara",
    dates: "23 September - 22 Oktober",
    description: "Terpesona dengan keseimbangan dan simetri, Libra terobsesi menciptakan keharmonisan.",
    traits: ["Diplomatik", "Adil", "Sosial", "Anggun", "Kooperatif"]
  },
  {
    name: "Scorpio",
    symbol: "♏",
    element: "Air",
    dates: "23 Oktober - 21 November",
    description: "Penuh gairah, mandiri, dan tidak takut membuka jalan sendiri, Scorpio sangat intens.",
    traits: ["Sumber Daya", "Berani", "Penuh Gairah", "Keras Kepala", "Tegas"]
  },
  {
    name: "Sagittarius",
    symbol: "♐",
    element: "Api",
    dates: "22 November - 21 Desember",
    description: "Penasaran dan berenergi, Sagittarius adalah salah satu pelancong terbesar di antara semua zodiak.",
    traits: ["Dermawan", "Idealis", "Humoris", "Petualang", "Filosofis"]
  },
  {
    name: "Capricorn",
    symbol: "♑",
    element: "Tanah",
    dates: "22 Desember - 19 Januari",
    description: "Ambisius, terorganisir, dan bertanggung jawab, Capricorn adalah pencapai dalam zodiak.",
    traits: ["Bertanggung Jawab", "Disiplin", "Kontrol Diri", "Manajer Baik", "Tradisional"]
  },
  {
    name: "Aquarius",
    symbol: "♒",
    element: "Udara",
    dates: "20 Januari - 18 Februari",
    description: "Mandiri dan misterius, Aquarius membawa masa penyembuhan sepanjang tahun.",
    traits: ["Progresif", "Orisinal", "Mandiri", "Kemanusiaan", "Inventif"]
  },
  {
    name: "Pisces",
    symbol: "♓",
    element: "Air",
    dates: "19 Februari - 20 Maret",
    description: "Intuitif dan penuh kasih, Pisces dikenal karena sensitif secara emosional dan sadar.",
    traits: ["Penuh Kasih", "Artistik", "Intuitif", "Lembut", "Bijaksana"]
  }
];

export function getZodiacSign(birthDate: Date): ZodiacSign {
  const month = birthDate.getMonth() + 1; // getMonth() returns 0-11
  const day = birthDate.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return zodiacSigns[0]; // Aries
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return zodiacSigns[1]; // Taurus
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return zodiacSigns[2]; // Gemini
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return zodiacSigns[3]; // Cancer
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return zodiacSigns[4]; // Leo
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return zodiacSigns[5]; // Virgo
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return zodiacSigns[6]; // Libra
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return zodiacSigns[7]; // Scorpio
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return zodiacSigns[8]; // Sagittarius
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return zodiacSigns[9]; // Capricorn
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return zodiacSigns[10]; // Aquarius
  } else {
    return zodiacSigns[11]; // Pisces
  }
}

export function getDailyHoroscope(zodiacSign: string): string {
  const horoscopes: Record<string, string[]> = {
    "Aries": [
      "Hari ini membawa peluang baru yang menarik untuk Anda. Percayai insting Anda dan ambil lompatan iman itu.",
      "Kepemimpinan alami Anda akan bersinar hari ini. Orang lain akan mencari bimbingan dan inspirasi dari Anda.",
      "Ledakan energi kreatif mengalir melalui Anda. Salurkan ini menjadi sesuatu yang bermakna dan tahan lama."
    ],
    "Taurus": [
      "Stabilitas dan kenyamanan disoroti hari ini. Fokuslah membangun fondasi yang solid untuk masa depan Anda.",
      "Sifat praktis Anda akan membantu memecahkan masalah yang kompleks. Percayai pendekatan metodis Anda.",
      "Keindahan dan harmoni mengelilingi Anda hari ini. Luangkan waktu untuk menghargai hal-hal yang lebih baik dalam hidup."
    ],
    "Gemini": [
      "Komunikasi adalah kunci hari ini. Kata-kata Anda memiliki kekuatan untuk menginspirasi dan terhubung dengan orang lain.",
      "Rasa ingin tahu mengarahkan Anda ke penemuan yang menarik. Jaga pikiran terbuka untuk kemungkinan baru.",
      "Koneksi sosial membawa manfaat tak terduga. Berjaringlah dan berinteraksi dengan orang-orang di sekitar Anda."
    ],
    "Cancer": [
      "Intuisi Anda sangat kuat hari ini. Percayai perasaan batin dan wawasan emosional tersebut.",
      "Rumah dan keluarga menjadi pusat perhatian. Rawat hubungan terdekat dengan perhatian dan kasih sayang.",
      "Penyembuhan emosional dimungkinkan hari ini. Izinkan diri Anda memproses dan melepaskan apa yang tidak lagi berguna."
    ],
    "Leo": [
      "Karisma alami Anda bersinar terang hari ini. Masuki sorotan dan bagikan bakat unik Anda.",
      "Proyek kreatif berkembang di bawah energi hari ini. Ekspresikan diri Anda dengan berani dan autentik.",
      "Peluang kepemimpinan muncul. Kepercayaan diri Anda akan menginspirasi orang lain untuk mengikuti."
    ],
    "Virgo": [
      "Perhatian terhadap detail melayani Anda dengan baik hari ini. Pendekatan metodis Anda menghasilkan hasil yang luar biasa.",
      "Kesehatan dan kebugaran layak menjadi fokus Anda. Perbaikan kecil dapat membuat perbedaan yang signifikan.",
      "Keterampilan analitis Anda membantu orang lain memecahkan masalah penting. Tawarkan keahlian Anda dengan murah hati."
    ],
    "Libra": [
      "Keseimbangan dan harmoni dapat dicapai hari ini. Carilah jalan tengah dalam konflik atau keputusan apa pun.",
      "Kemitraan dan hubungan berkembang. Berkolaborasi dengan orang lain untuk keuntungan dan pertumbuhan bersama.",
      "Keindahan dan seni menginspirasi Anda hari ini. Kelilingi diri Anda dengan lingkungan yang menyenangkan secara estetika."
    ],
    "Scorpio": [
      "Transformasi mendalam dimungkinkan hari ini. Terima perubahan dan lepaskan apa yang menahan Anda.",
      "Intensitas dan gairah Anda menarik peluang. Salurkan energi ini untuk mengejar hal-hal yang bermakna.",
      "Kebenaran tersembunyi mungkin muncul hari ini. Gunakan sifat investigatif Anda untuk mengungkap wawasan penting."
    ],
    "Sagittarius": [
      "Petualangan dan eksplorasi memanggil Anda hari ini. Perluas cakrawala melalui pengalaman baru.",
      "Optimisme Anda menular dan mengangkat orang lain. Bagikan pandangan positif Anda dengan bebas.",
      "Peluang belajar dan bertumbuh berlimpah. Terima pengetahuan dari sumber yang tidak terduga."
    ],
    "Capricorn": [
      "Kerja keras dan dedikasi membuahkan hasil hari ini. Pendekatan disiplin Anda membawa hadiah yang nyata.",
      "Otoritas dan tanggung jawab cocok untuk Anda. Ambil alih urusan penting dengan percaya diri.",
      "Tujuan jangka panjang menjadi fokus. Rencanakan secara strategis untuk kesuksesan dan pencapaian yang berkelanjutan."
    ],
    "Aquarius": [
      "Inovasi dan orisinalitas membedakan Anda hari ini. Perspektif unik Anda membawa wawasan berharga.",
      "Perjuangan kemanusiaan menarik perhatian Anda. Upaya Anda dapat membuat perbedaan yang berarti di dunia.",
      "Teknologi dan kemajuan sejalan dengan minat Anda. Terima cara-cara baru dalam melakukan sesuatu."
    ],
    "Pisces": [
      "Kasih sayang dan empati Anda menyentuh banyak kehidupan hari ini. Tawarkan penyembuhan dan kenyamanan bagi mereka yang membutuhkan.",
      "Kegiatan artistik dan spiritual membawa kepuasan mendalam. Terhubunglah dengan kreativitas terdalam Anda.",
      "Mimpi dan intuisi membimbing Anda menuju realisasi penting. Perhatikan pesan-pesan halus."
    ]
  };

  const signHoroscopes = horoscopes[zodiacSign] || horoscopes["Aries"];
  return signHoroscopes[Math.floor(Math.random() * signHoroscopes.length)];
}