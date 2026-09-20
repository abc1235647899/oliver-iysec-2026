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
        role: 'moment',
        en: 'Stage screen: 鍾渝棠 · Silver',
        zh: '舞台螢幕：鍾渝棠 · 銀獎',
      },
      {
        file: './photos/awards/01-allround-speech.jpg',
        role: 'moment',
        en: 'Oliver speaking on stage',
        zh: '渝棠台上致辭',
      },
      {
        file: './photos/ceremony/14-family-trophies-backdrop.jpg',
        role: 'receive',
        en: 'Oliver with family and trophies at the backdrop',
        zh: '渝棠與家人於背板前手持獎盃',
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
        file: './photos/ceremony/16-ai-first-runnerup-stage.jpg',
        role: 'receive',
        en: 'AI Application first runner-up on stage',
        zh: 'AI 應用亞軍頒獎台上',
      },
      {
        file: './photos/ceremony/15-ai-one-trophy.jpg',
        role: 'receive',
        en: 'Oliver with AI Application trophy and certificate',
        zh: '渝棠手持 AI 應用獎盃與獎狀',
      },
    ],
  },
  {
    id: 5,
    tier: 'merit',
    en: {
      title: 'GBA AI Application',
      result: 'Merit',
      category: 'Greater Bay Area Final',
    },
    zh: {
      title: '大灣區 AI 應用',
      result: '優異獎',
      category: '大灣區總決賽',
    },
    photos: [
      {
        file: './photos/ceremony/09-gba-merit-screen.jpg',
        role: 'moment',
        en: 'GBA Final AI Application — Merit on screen',
        zh: '大灣區總決賽 AI 應用 · 螢幕優異獎',
      },
      {
        file: './photos/ceremony/11-gba-merit-receive.jpg',
        role: 'receive',
        en: 'Receiving GBA AI Application Merit',
        zh: '領取大灣區 AI 應用優異獎',
      },
      {
        file: './photos/ceremony/10-gba-merit-stage.jpg',
        role: 'moment',
        en: 'On stage with GBA AI trophies',
        zh: '大灣區 AI 頒獎台上',
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
        file: './art/digital-arts-future-society.jpg',
        role: 'work',
        en: 'Winning Future Society & AI artwork',
        zh: '未來社會與 AI 得獎作品',
      },
      {
        file: './photos/ceremony/06-da-future-first.jpg',
        role: 'receive',
        en: 'Receiving Digital Arts Future Society 1st runner-up',
        zh: '領取數碼藝術未來社會亞軍',
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
        file: './art/digital-arts-future-society.jpg',
        role: 'work',
        en: 'Future Society & AI artwork',
        zh: '未來社會與 AI 作品',
      },
      {
        file: './photos/ceremony/07-interschool-future.jpg',
        role: 'receive',
        en: 'Interschool Future Society & AI — 2nd runner-up',
        zh: '校際未來社會與 AI · 季軍頒獎',
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
        file: './art/digital-arts-temple-culture.png',
        role: 'work',
        en: 'Temple & Chinese Culture artwork',
        zh: '廟宇與中華文化作品',
      },
      {
        file: './photos/ceremony/04-da-merit-original.jpg',
        role: 'receive',
        en: 'Receiving Digital Arts Temple merit',
        zh: '領取數碼藝術廟宇優異獎',
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
        file: './art/digital-arts-temple-culture.png',
        role: 'work',
        en: 'Temple & Chinese Culture artwork',
        zh: '廟宇與中華文化作品',
      },
      {
        file: './photos/ceremony/05-interschool-temple.jpg',
        role: 'receive',
        en: 'Interschool Temple culture — 2nd runner-up',
        zh: '校際廟宇文化 · 季軍頒獎',
      },
    ],
  },

]

export const photos = {
  hero: '14-hero-family-trophies.jpg',
  gallery: [
    { file: '13-event-open.jpg', en: 'Event opening — AI: Shaping Tomorrow', zh: '開幕：AI 競未來' },
    { file: 'moments/17-cute-post.jpg', en: 'Cute post with classmates and trophies', zh: '同學獎盃可愛合照' },
    { file: 'moments/12-classmate-chitchat.jpg', en: 'After ceremony · chit-chat with classmate', zh: '頒獎後與同學傾偈' },
    { file: 'moments/13-teacher-classmates.jpg', en: 'Happily with teacher and classmates', zh: '與老師同學開心合照' },
    { file: 'moments/14-presenting-work.jpg', en: 'Presenting his work to the audience', zh: '向觀眾簡報作品' },
    { file: 'moments/15-backstage-trophy.jpg', en: 'Backstage with the trophy', zh: '後台手持獎盃' },
    { file: 'moments/16-presenting-confidently.jpg', en: 'Presenting confidently on stage', zh: '自信地台上發言' },
    { file: 'ceremony/08-lining-up.jpg', en: 'Oliver lining up for the stage', zh: '渝棠排隊上台' },
    { file: 'ceremony/12-event-backdrop.jpg', en: 'With trophies at the event backdrop', zh: '活動背板前與獎盃' },
    { file: '02-family-trophies-alt.jpg', en: 'Family with trophies', zh: '一家與獎盃合照' },
    { file: '05-oliver-speech-stage.jpg', en: 'Oliver speaking on stage', zh: '渝棠舞台發言' },
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
