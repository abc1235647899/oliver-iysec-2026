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
]

