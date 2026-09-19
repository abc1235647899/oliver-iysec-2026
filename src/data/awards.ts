export type AwardTier = 'silver' | 'first' | 'second' | 'merit'

export interface Award {
  id: number
  tier: AwardTier
  en: { title: string; result: string; category?: string }
  zh: { title: string; result: string; category?: string }
}

export const awards: Award[] = [
  {
    id: 1,
    tier: 'silver',
    en: {
      title: 'All-round Student Grant Award',
      result: 'Silver',
      category: 'Primary School',
    },
    zh: {
      title: '全能學生大獎（小學）',
      result: '銀獎',
    },
  },
  {
    id: 2,
    tier: 'first',
    en: {
      title: 'AI Application',
      result: 'First Runner-up',
    },
    zh: {
      title: 'AI 應用',
      result: '亞軍',
    },
  },
  {
    id: 3,
    tier: 'first',
    en: {
      title: 'Digital Arts',
      result: 'First Runner-up',
      category: 'Future Society and AI',
    },
    zh: {
      title: '數碼藝術',
      result: '亞軍',
      category: '未來社會與人工智能',
    },
  },
  {
    id: 4,
    tier: 'merit',
    en: {
      title: 'Digital Arts',
      result: 'Merit',
      category: 'Temple and Chinese Culture',
    },
    zh: {
      title: '數碼藝術',
      result: '優異獎',
      category: '廟宇與中華文化',
    },
  },
  {
    id: 5,
    tier: 'merit',
    en: {
      title: 'GBA AI Application',
      result: 'Merit',
    },
    zh: {
      title: '大灣區 AI 應用',
      result: '優異獎',
    },
  },
  {
    id: 6,
    tier: 'second',
    en: {
      title: 'Digital Arts Interschool Competition',
      result: '2nd Runner-up',
      category: 'Future Society and AI',
    },
    zh: {
      title: '數碼藝術校際比賽',
      result: '季軍',
      category: '未來社會與人工智能',
    },
  },
  {
    id: 7,
    tier: 'second',
    en: {
      title: 'Digital Arts Interschool Competition',
      result: '2nd Runner-up',
      category: 'Temple and Chinese Culture',
    },
    zh: {
      title: '數碼藝術校際比賽',
      result: '季軍',
      category: '廟宇與中華文化',
    },
  },
]

export const photos = {
  hero: '01-hero-family-trophies.jpg',
  gallery: [
    { file: '02-family-trophies-alt.jpg', en: 'Family with trophies', zh: '一家與獎盃合照' },
    { file: '03-family-trophies-proud.jpg', en: 'Proud family moment', zh: '一家驕傲合照' },
    { file: '04-allround-silver-stage.jpg', en: 'All-round Silver on stage screen', zh: '全能銀獎舞台螢幕' },
    { file: '05-oliver-speech-stage.jpg', en: 'Oliver speaking on stage', zh: '渝棠舞台發言' },
    { file: '06-oliver-speech-close.jpg', en: 'Speech close-up with mic', zh: '發言特寫' },
    { file: '07-oliver-speech-audience.jpg', en: 'Addressing the audience', zh: '向觀眾致辭' },
    { file: '08-ceremony-drone-programming.jpg', en: 'Drone programming results', zh: '無人機編程成績' },
    { file: '09-ceremony-stage-group.jpg', en: 'Ceremony stage group', zh: '頒獎台合影' },
    { file: '10-ceremony-drone-manual.jpg', en: 'Drone manual results', zh: '無人機手動成績' },
    { file: '11-venue-futuristic-lobby.jpg', en: 'Futuristic venue lobby', zh: '未來感場館大堂' },
    { file: '12-venue-skybridge.jpg', en: 'Venue skybridge', zh: '場館天橋' },
  ],
} as const

export const subject = {
  nameEn: 'Oliver Chung Yu Tong',
  nameZh: '鍾渝棠',
  age: 10,
  gradeEn: 'Primary 6',
  gradeZh: '小六',
  schoolEn: 'PLK Fung Ching Memorial Primary School',
  schoolZh: '保良局馮晴紀念小學',
  eventEn:
    'Sun Hung Kai Properties International Youth STEAM Education Competition (IYSEC 2026)',
  eventZh: '新鴻基地產國際青少年創科教育大賽',
  eventShortEn: 'IYSEC 2026',
  eventShortZh: 'IYSEC 2026',
} as const
