export type AwardTier = 'silver' | 'first' | 'second' | 'merit'

export type AwardPhotoRole = 'work' | 'receive' | 'moment'

export interface AwardPhoto {
  file: string
  role: AwardPhotoRole
  en?: string
  zh?: string
}

export interface Award {
  id: number
  tier: AwardTier
  en: { title: string; result: string; category?: string }
  zh: { title: string; result: string; category?: string }
  photos: AwardPhoto[]
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
    photos: [
      {
        file: './photos/awards/01-allround-screen.jpg',
        role: 'work',
        en: 'Stage screen announcing Silver for 鍾渝棠',
        zh: '舞台螢幕顯示鍾渝棠銀獎',
      },
      {
        file: './photos/awards/01-allround-receive.jpg',
        role: 'receive',
        en: 'Oliver on stage receiving the award',
        zh: '渝棠上台領獎',
      },
      {
        file: './photos/awards/01-allround-speech.jpg',
        role: 'moment',
        en: 'Oliver giving a speech on stage',
        zh: '渝棠舞台發言',
      },
    ],
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
    photos: [
      {
        file: './photos/awards/02-ai-ceremony.jpg',
        role: 'moment',
        en: 'AI Application ceremony',
        zh: 'AI 應用頒獎典禮',
      },
      {
        file: './photos/awards/02-ai-receive.jpg',
        role: 'receive',
        en: 'Family trophies and receive moment',
        zh: '一家與獎盃及領獎瞬間',
      },
    ],
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
    photos: [
      {
        file: './photos/awards/03-da-future-work.jpg',
        role: 'work',
        en: 'Winning Digital Arts artwork',
        zh: '數碼藝術得獎作品',
      },
      {
        file: './photos/awards/03-da-future-receive.jpg',
        role: 'receive',
        en: 'Receiving the Digital Arts award',
        zh: '領取數碼藝術獎項',
      },
    ],
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
    photos: [
      {
        file: './photos/awards/04-da-temple-work.png',
        role: 'work',
        en: 'Temple culture winning artwork',
        zh: '廟宇文化得獎作品',
      },
      {
        file: './photos/awards/04-da-temple-receive.jpg',
        role: 'receive',
        en: 'Receiving the Temple Digital Arts merit',
        zh: '領取廟宇數碼藝術優異獎',
      },
    ],
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
    photos: [
      {
        file: './photos/awards/05-gba-ceremony.jpg',
        role: 'moment',
        en: 'GBA AI ceremony',
        zh: '大灣區 AI 頒獎典禮',
      },
      {
        file: './photos/awards/05-gba-receive.jpg',
        role: 'receive',
        en: 'Receiving the GBA AI merit',
        zh: '領取大灣區 AI 優異獎',
      },
    ],
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
    photos: [
      {
        file: './photos/awards/03-da-future-work.jpg',
        role: 'work',
        en: 'Interschool Future Society winning work',
        zh: '校際未來社會得獎作品',
      },
      {
        file: './photos/awards/06-da-inter-future-receive.jpg',
        role: 'receive',
        en: 'Receiving the interschool Future Society award',
        zh: '領取校際未來社會獎項',
      },
    ],
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
    photos: [
      {
        file: './photos/awards/07-da-inter-temple-work.png',
        role: 'work',
        en: 'Interschool Temple culture winning work',
        zh: '校際廟宇文化得獎作品',
      },
      {
        file: './photos/awards/07-da-inter-temple-receive.jpg',
        role: 'receive',
        en: 'Receiving the interschool Temple award',
        zh: '領取校際廟宇獎項',
      },
    ],
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
