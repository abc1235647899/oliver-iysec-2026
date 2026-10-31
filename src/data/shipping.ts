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
] as const

