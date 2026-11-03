export interface MediaItem {
  outlet: string
  titleZh: string
  titleEnShort?: string
  url: string
  date?: string // ISO yyyy-mm-dd
}

export const mediaItems: MediaItem[] = [
  {
    outlet: '香港文匯報 · Wen Wei Po',
    titleZh: '新鴻基地產國際青少年創科教育大賽2026頒獎禮今舉辦',
    titleEnShort: 'IYSEC 2026 awards ceremony held today',
    url: 'https://www.wenweipo.com/a/202609/23/AP6ab39729e4b01d54a2847745.html',
    date: '2026-09-23',
  },
  {
    outlet: 'am730',
    titleZh:
      '新鴻基地產國際青少年創科教育大賽 2026頒獎禮 500校逾6,000名學生競逐學界「創科奧運會」',
    titleEnShort: 'IYSEC 2026 awards — 500 schools, over 6,000 students',
    url: 'https://www.am730.com.hk/%E5%B8%82%E5%A0%B4%E8%B3%87%E8%A8%8A/1054761/%E6%96%B0%E9%B4%BB%E5%9F%BA%E5%9C%B0%E7%94%A2%E5%9C%8B%E9%9A%9B%E9%9D%92%E5%B0%91%E5%B9%B4%E5%89%B5%E7%A7%91%E6%95%99%E8%82%B2%E5%A4%A7%E8%B3%BD-2026%E9%A0%92%E7%8D%8E%E7%A6%AE-500%E6%A0%A1%E9%80%BE6-000%E5%90%8D%E5%AD%B8%E7%94%9F%E7%AB%B6%E9%80%90%E5%AD%B8%E7%95%8C-%E5%89%B5%E7%A7%91%E5%A5%A7%E9%81%8B%E6%9C%83-',
  },
  {
    outlet: '香港經濟日報 TOPick · HKET',
    titleZh:
      '新鴻基地產國際青少年創科教育大賽2026頒獎禮　500校逾6,000名學生競逐學界「創科奧運會」',
    titleEnShort: 'IYSEC 2026 awards — 500 schools, over 6,000 students',
    url: 'https://topick.hket.com/article/4198289/%E6%96%B0%E9%B4%BB%E5%9F%BA%E5%9C%B0%E7%94%A2%E5%9C%8B%E9%9A%9B%E9%9D%92%E5%B0%91%E5%B9%B4%E5%89%B5%E7%A7%91%E6%95%99%E8%82%B2%E5%A4%A7%E8%B3%BD2026%E9%A0%92%E7%8D%8E%E7%A6%AE%E3%80%80500%E6%A0%A1%E9%80%BE6,000%E5%90%8D%E5%AD%B8%E7%94%9F%E7%AB%B6%E9%80%90%E5%AD%B8%E7%95%8C%E3%80%8C%E5%89%B5%E7%A7%91%E5%A5%A7%E9%81%8B%E6%9C%83%E3%80%8D?mtc=10001',
  },
  {
    outlet: '星島頭條 · Sing Tao Headline',
    titleZh:
      '新鴻基地產國際青少年創科教育大賽2026頒獎禮　500校逾6,000名學生競逐學界「創科奧運會」',
    titleEnShort: 'IYSEC 2026 awards — 500 schools, over 6,000 students',
    url: 'https://www.stheadline.com/zh-hans/society/3618522/%E6%96%B0%E9%B8%BF%E5%9F%BA%E5%9C%B0%E4%BA%A7%E5%9B%BD%E9%99%85%E9%9D%92%E5%B0%91%E5%B9%B4%E5%88%9B%E7%A7%91%E6%95%99%E8%82%B2%E5%A4%A7%E8%B5%9B2026%E9%A2%81%E5%A5%96%E7%A4%BC-500%E6%A0%A1%E9%80%BE6000%E5%AD%A6%E7%94%9F%E7%AB%9E%E9%80%90%E5%AD%A6%E7%95%8C%E5%88%9B%E7%A7%91%E5%A5%A5%E8%BF%90%E4%BC%9A',
  },
  {
    outlet: '橙新聞 · Orange News',
    titleZh: '新地國際青少年創科教育大賽2026頒獎　逾6000學生競逐學界「創科奧運會」',
    titleEnShort: 'SHKP IYSEC 2026 awards — over 6,000 students compete in the STEAM “Olympics”',
    url: 'https://www.orangenews.hk/vgly/VW2JFpF/%E6%96%B0%E5%9C%B0%E5%9C%8B%E9%9A%9B%E9%9D%92%E5%B0%91%E5%B9%B4%E5%89%B5%E7%A7%91%E6%95%99%E8%82%B2%E5%A4%A7%E8%B3%BD2026%E9%A0%92%E7%8D%8E-%E9%80%BE6000%E5%AD%B8%E7%94%9F%E7%AB%B6%E9%80%90%E5%AD%B8%E7%95%8C-%E5%89%B5%E7%A7%91%E5%A5%A7%E9%81%8B%E6%9C%83.shtml',
  },
  {
    outlet: '明報 PowerUp · Ming Pao PowerUp',
    titleZh: '新鴻基地產國際青少年創科教育大賽2026頒獎禮',
    titleEnShort: 'IYSEC 2026 awards ceremony coverage',
    url: 'https://powerup.mingpao.com/%E6%96%B0%E9%B4%BB%E5%9F%BA%E5%9C%B0%E7%94%A2%E5%9C%8B%E9%9A%9B%E9%9D%92%E5%B0%91%E5%B9%B4%E5%89%B5%E7%A7%91%E6%95%99%E8%82%B2%E5%A4%A7%E8%B3%BD-2026%E9%A0%92%E7%8D%8E%E7%A6%AE/',
  },
  {
    outlet: 'Yahoo 新聞 · Yahoo News HK',
    titleZh: '圓滿舉行 新鴻基地產國際青少年創科教育大賽2026頒獎禮 逾500校參與創科盛事',
    titleEnShort: 'IYSEC 2026 awards — over 500 schools joined',
    url: 'https://hk.news.yahoo.com/%E5%9C%93%E6%BB%BF%E8%88%89%E8%A1%8C-%E6%96%B0%E9%B4%BB%E5%9F%BA%E5%9C%B0%E7%94%A2%E5%9C%8B%E9%9A%9B%E9%9D%92%E5%B0%91%E5%B9%B4%E5%89%B5%E7%A7%91%E6%95%99%E8%82%B2%E5%A4%A7%E8%B3%BD2026%E9%A0%92%E7%8D%8E%E7%A6%AE-%E9%80%BE500%E6%A0%A1%E5%8F%83%E8%88%87%E5%89%B5%E7%A7%91%E7%9B%9B%E4%BA%8B-090000704.html',
    date: '2026-09-23',
  },
  {
    outlet: '新鴻基地產 · Sun Hung Kai Properties (Official)',
    titleZh:
      '新鴻基地產國際青少年創科教育大賽 2026頒獎禮 500校逾6,000名學生競逐學界「創科奧運會」',
    titleEnShort: 'Official press release — IYSEC 2026 awards — 500 schools, over 6,000 students',
    url: 'https://www.shkp.com/zh-HK/media/press-releases/20260923',
    date: '2026-09-23',
  },
  {
    outlet: '星島加拿大 · Sing Tao Canada',
    titleZh:
      '新鴻基地產國際青少年創科教育大賽2026頒獎禮 500校逾6000學生競逐學界「創科奧運會」',
    titleEnShort: 'IYSEC 2026 awards — 500 schools, over 6,000 students',
    url: 'https://www.singtao.ca/7635459/2026-09-23/news-%E6%96%B0%E9%B4%BB%E5%9F%BA%E5%9C%B0%E7%94%A2%E5%9C%8B%E9%9A%9B%E9%9D%92%E5%B0%91%E5%B9%B4%E5%89%B5%E7%A7%91%E6%95%99%E8%82%B2%E5%A4%A7%E8%B3%BD2026%E9%A0%92%E7%8D%8E%E7%A6%AE+500%E6%A0%A1%E9%80%BE6000%E5%AD%B8%E7%94%9F%E7%AB%B6%E9%80%90%E5%AD%B8%E7%95%8C%E3%80%8C%E5%89%B5%E7%A7%91%E5%A5%A7%E9%81%8B%E6%9C%83%E3%80%8D/',
    date: '2026-09-23',
  },
  // Shipping AI competition (separate from IYSEC)
  {
    outlet: '橙新聞 · Orange News',
    titleZh:
      '有片｜香港中遠海運辦AI創作比賽邀家長師生參觀碼頭　得獎學生讚碼頭既先進又環保',
    titleEnShort: 'COSCO Hong Kong AI contest — winners visit the terminal',
    url: 'https://www.orangenews.hk/hongkong/VZbqWKT/%E4%B8%AD%E9%81%A0%E6%B5%B7%E9%81%8B%E8%BE%A6AI%E5%89%B5%E4%BD%9C%E6%AF%94%E8%B3%BD%E9%82%80%E5%AE%B6%E9%95%B7%E5%B8%AB%E7%94%9F%E5%8F%83%E8%A7%80%E7%A2%BC%E9%A0%AD-%E5%BE%97%E7%8D%8E%E5%AD%B8%E7%94%9F%E8%AE%9A%E7%A2%BC%E9%A0%AD%E6%97%A2%E5%85%88%E9%80%B2%E5%8F%88%E7%92%B0%E4%BF%9D.shtml',
    date: '2026-10-31',
  },
  {
    outlet: '紫荊網 · Bau.com.hk',
    titleZh: '「向航海致敬：我心目中的航運業」AI創作比賽頒獎典禮圓滿舉行',
    titleEnShort: 'Shipping AI creation contest awards ceremony',
    url: 'https://bau.com.hk/web/article/1566082463042830336/web/content_1566082463042830336.html',
    date: '2026-10-31',
  },
  {
    outlet: '香港商報 · Hong Kong Commercial Daily',
    titleZh: '「向航海致敬：我心目中的航運業」AI創作比賽頒獎典禮圓滿舉行',
    titleEnShort: 'Shipping AI creation contest awards ceremony',
    url: 'https://www.hkcd.com.hk/content_app/2026-10/31/content_8782826.html',
    date: '2026-10-31',
  },
]

