export interface ShippingPhoto {
  file: string
  en: string
  zh: string
}

export const shippingPhotos: ShippingPhoto[] = [
  {
    file: '01-trophy.jpg',
    en: 'Trophy and engraved plaque',
    zh: '獎盃與木刻獎牌',
  },
  {
    file: '02-certificate.jpg',
    en: 'Framed certificate',
    zh: '證書',
  },
  {
    file: '03-stage-group.jpg',
    en: 'Stage group photo at the ceremony',
    zh: '頒獎台上合照',
  },
  {
    file: '04-lobby-banner.jpg',
    en: 'Lobby COSCO banner — keepsake photo',
    zh: '大堂 COSCO 橫額留念',
  },
  {
    file: '05-pointing-poster.jpg',
    en: 'Pointing at his winning poster',
    zh: '指着得獎海報',
  },
  {
    file: '06-cosco-tower.jpg',
    en: 'Outside COSCO TOWER',
    zh: '中遠大廈外合照',
  },
  {
    file: '07-interview-indoor.jpg',
    en: 'Being interviewed',
    zh: '接受訪問',
  },
  {
    file: '08-interview-port-view.jpg',
    en: 'Interview with the port behind him',
    zh: '碼頭景觀訪問',
  },
  {
    file: '09-interview-roc.jpg',
    en: 'Interview at the Remote Operations Centre',
    zh: 'Remote Operations Centre 訪問',
  },
  {
    file: '10-backdrop-trophy.jpg',
    en: 'With trophy and certificate at the ceremony backdrop',
    zh: '頒獎禮背景板合照',
  },
  {
    file: '11-photo-frame.jpg',
    en: 'Photo-frame keepsake with trophy and certificate',
    zh: '活動相框留影',
  },
  {
    file: '12-stage-winners-group.jpg',
    en: 'Winners on stage with certificates',
    zh: '頒獎台得獎同學合照',
  },
] as const

