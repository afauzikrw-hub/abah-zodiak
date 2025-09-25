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
    element: "Fire",
    dates: "March 21 - April 19",
    description: "Bold and ambitious, Aries dives headfirst into even the most challenging situations.",
    traits: ["Courageous", "Determined", "Confident", "Enthusiastic", "Optimistic"]
  },
  {
    name: "Taurus",
    symbol: "♉",
    element: "Earth",
    dates: "April 20 - May 20",
    description: "Smart, ambitious, and trustworthy, Taurus is the anchor of the Zodiac.",
    traits: ["Reliable", "Patient", "Practical", "Devoted", "Responsible"]
  },
  {
    name: "Gemini",
    symbol: "♊",
    element: "Air",
    dates: "May 21 - June 20",
    description: "Playful and intellectually curious, Gemini is constantly juggling a variety of passions.",
    traits: ["Gentle", "Affectionate", "Curious", "Adaptable", "Quick-witted"]
  },
  {
    name: "Cancer",
    symbol: "♋",
    element: "Water",
    dates: "June 21 - July 22",
    description: "Intuitive, emotional, and fiercely protective, Cancer is the nurturer of the zodiac.",
    traits: ["Tenacious", "Emotional", "Sympathetic", "Persuasive", "Imaginative"]
  },
  {
    name: "Leo",
    symbol: "♌",
    element: "Fire",
    dates: "July 23 - August 22",
    description: "Bold, intelligent, warm, and courageous, fire sign Leo is a natural leader.",
    traits: ["Creative", "Passionate", "Generous", "Warm-hearted", "Cheerful"]
  },
  {
    name: "Virgo",
    symbol: "♍",
    element: "Earth",
    dates: "August 23 - September 22",
    description: "Logical, practical, and systematic, Virgo approaches life with careful attention to detail.",
    traits: ["Loyal", "Analytical", "Kind", "Hardworking", "Practical"]
  },
  {
    name: "Libra",
    symbol: "♎",
    element: "Air",
    dates: "September 23 - October 22",
    description: "Fascinated by balance and symmetry, Libra is obsessed with creating equilibrium.",
    traits: ["Diplomatic", "Fair-minded", "Social", "Gracious", "Cooperative"]
  },
  {
    name: "Scorpio",
    symbol: "♏",
    element: "Water",
    dates: "October 23 - November 21",
    description: "Passionate, independent, and unafraid to blaze their own trail, Scorpio is intense.",
    traits: ["Resourceful", "Brave", "Passionate", "Stubborn", "Determined"]
  },
  {
    name: "Sagittarius",
    symbol: "♐",
    element: "Fire",
    dates: "November 22 - December 21",
    description: "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs.",
    traits: ["Generous", "Idealistic", "Great sense of humor", "Adventurous", "Philosophical"]
  },
  {
    name: "Capricorn",
    symbol: "♑",
    element: "Earth",
    dates: "December 22 - January 19",
    description: "Ambitious, organized, and responsible, Capricorn is the achiever of the zodiac.",
    traits: ["Responsible", "Disciplined", "Self-control", "Good managers", "Traditional"]
  },
  {
    name: "Aquarius",
    symbol: "♒",
    element: "Air",
    dates: "January 20 - February 18",
    description: "Independent and enigmatical, Aquarius brings forth the healing time of year.",
    traits: ["Progressive", "Original", "Independent", "Humanitarian", "Inventive"]
  },
  {
    name: "Pisces",
    symbol: "♓",
    element: "Water",
    dates: "February 19 - March 20",
    description: "Intuitive and compassionate, Pisces are known for being emotionally sensitive and aware.",
    traits: ["Compassionate", "Artistic", "Intuitive", "Gentle", "Wise"]
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
      "Today brings exciting new opportunities your way. Trust your instincts and take that leap of faith.",
      "Your natural leadership will shine through today. Others will look to you for guidance and inspiration.",
      "A burst of creative energy flows through you. Channel this into something meaningful and lasting."
    ],
    "Taurus": [
      "Stability and comfort are highlighted today. Focus on building solid foundations for your future.",
      "Your practical nature will help solve a complex problem. Trust in your methodical approach.",
      "Beauty and harmony surround you today. Take time to appreciate the finer things in life."
    ],
    "Gemini": [
      "Communication is key today. Your words have the power to inspire and connect with others.",
      "Curiosity leads you to fascinating discoveries. Keep an open mind to new possibilities.",
      "Social connections bring unexpected benefits. Network and engage with those around you."
    ],
    "Cancer": [
      "Your intuition is particularly strong today. Trust those gut feelings and emotional insights.",
      "Home and family take center stage. Nurture your closest relationships with care and attention.",
      "Emotional healing is possible today. Allow yourself to process and release what no longer serves you."
    ],
    "Leo": [
      "Your natural charisma shines brightly today. Step into the spotlight and share your unique gifts.",
      "Creative projects flourish under today's energy. Express yourself boldly and authentically.",
      "Leadership opportunities present themselves. Your confidence will inspire others to follow."
    ],
    "Virgo": [
      "Attention to detail serves you well today. Your methodical approach yields excellent results.",
      "Health and wellness deserve your focus. Small improvements can make a significant difference.",
      "Your analytical skills help others solve important problems. Offer your expertise generously."
    ],
    "Libra": [
      "Balance and harmony are achievable today. Seek middle ground in any conflicts or decisions.",
      "Partnerships and relationships flourish. Collaborate with others for mutual benefit and growth.",
      "Beauty and art inspire you today. Surround yourself with aesthetically pleasing environments."
    ],
    "Scorpio": [
      "Deep transformation is possible today. Embrace change and let go of what holds you back.",
      "Your intensity and passion attract opportunities. Channel this energy into meaningful pursuits.",
      "Hidden truths may surface today. Use your investigative nature to uncover important insights."
    ],
    "Sagittarius": [
      "Adventure and exploration call to you today. Expand your horizons through new experiences.",
      "Your optimism is contagious and uplifting to others. Share your positive outlook freely.",
      "Learning and growth opportunities abound. Embrace knowledge from unexpected sources."
    ],
    "Capricorn": [
      "Hard work and dedication pay off today. Your disciplined approach brings tangible rewards.",
      "Authority and responsibility suit you well. Take charge of important matters with confidence.",
      "Long-term goals come into focus. Plan strategically for sustainable success and achievement."
    ],
    "Aquarius": [
      "Innovation and originality set you apart today. Your unique perspective brings valuable insights.",
      "Humanitarian causes capture your attention. Your efforts can make a meaningful difference in the world.",
      "Technology and progress align with your interests. Embrace new ways of doing things."
    ],
    "Pisces": [
      "Your compassion and empathy touch many lives today. Offer healing and comfort to those in need.",
      "Artistic and spiritual pursuits bring deep satisfaction. Connect with your innermost creativity.",
      "Dreams and intuition guide you toward important realizations. Pay attention to subtle messages."
    ]
  };

  const signHoroscopes = horoscopes[zodiacSign] || horoscopes["Aries"];
  return signHoroscopes[Math.floor(Math.random() * signHoroscopes.length)];
}