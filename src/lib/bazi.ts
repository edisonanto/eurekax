// 天干 (Heavenly Stems)
export const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'] as const;

// 地支 (Earthly Branches)
export const EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'] as const;

// 五行 (Five Elements)
export const FIVE_ELEMENTS = ['木', '火', '土', '金', '水'] as const;

// 天干對應五行
export const STEM_ELEMENTS: Record<string, string> = {
  '甲': '木', '乙': '木',
  '丙': '火', '丁': '火',
  '戊': '土', '己': '土',
  '庚': '金', '辛': '金',
  '壬': '水', '癸': '水',
};

// 地支對應五行
export const BRANCH_ELEMENTS: Record<string, string> = {
  '子': '水', '丑': '土', '寅': '木', '卯': '木',
  '辰': '土', '巳': '火', '午': '火', '未': '土',
  '申': '金', '酉': '金', '戌': '土', '亥': '水',
};

// 地支對應生肖
export const BRANCH_ZODIAC: Record<string, string> = {
  '子': '鼠', '丑': '牛', '寅': '虎', '卯': '兔',
  '辰': '龍', '巳': '蛇', '午': '馬', '未': '羊',
  '申': '猴', '酉': '雞', '戌': '狗', '亥': '豬',
};

// 時辰對應地支
export const HOUR_TO_BRANCH: Record<number, number> = {
  0: 0,  // 子時 23:00-01:00
  1: 1,  // 丑時 01:00-03:00
  2: 2,  // 寅時 03:00-05:00
  3: 3,  // 卯時 05:00-07:00
  4: 4,  // 辰時 07:00-09:00
  5: 5,  // 巳時 09:00-11:00
  6: 6,  // 午時 11:00-13:00
  7: 7,  // 未時 13:00-15:00
  8: 8,  // 申時 15:00-17:00
  9: 9,  // 酉時 17:00-19:00
  10: 10, // 戌時 19:00-21:00
  11: 11, // 亥時 21:00-23:00
};

// 時辰名稱
export const HOUR_NAMES = [
  '子時', '丑時', '寅時', '卯時', '辰時', '巳時',
  '午時', '未時', '申時', '酉時', '戌時', '亥時'
];

export interface Pillar {
  stem: string;
  branch: string;
  stemElement: string;
  branchElement: string;
}

export interface BaziChart {
  year: Pillar;
  month: Pillar;
  day: Pillar;
  hour: Pillar;
  zodiac: string;
  elementCounts: Record<string, number>;
}

// 計算年柱
function calculateYearPillar(year: number): Pillar {
  // 以 1984 年（甲子年）為基準
  const baseYear = 1984;
  const diff = year - baseYear;
  
  // 處理負數情況
  const stemIndex = ((diff % 10) + 10) % 10;
  const branchIndex = ((diff % 12) + 12) % 12;
  
  const stem = HEAVENLY_STEMS[stemIndex];
  const branch = EARTHLY_BRANCHES[branchIndex];
  
  return {
    stem,
    branch,
    stemElement: STEM_ELEMENTS[stem],
    branchElement: BRANCH_ELEMENTS[branch],
  };
}

// 計算月柱
function calculateMonthPillar(year: number, month: number): Pillar {
  // 年干決定月干的起始
  const yearStemIndex = ((year - 1984) % 10 + 10) % 10;
  
  // 月支固定：正月寅、二月卯...
  // 農曆月份對應地支：1月->寅(2), 2月->卯(3)...
  const branchIndex = (month + 1) % 12;
  
  // 月干計算：甲己之年丙作首，乙庚之歲戊為頭...
  const monthStemBase = [2, 4, 6, 8, 0]; // 丙、戊、庚、壬、甲
  const baseIndex = monthStemBase[yearStemIndex % 5];
  const stemIndex = (baseIndex + month - 1) % 10;
  
  const stem = HEAVENLY_STEMS[stemIndex];
  const branch = EARTHLY_BRANCHES[branchIndex];
  
  return {
    stem,
    branch,
    stemElement: STEM_ELEMENTS[stem],
    branchElement: BRANCH_ELEMENTS[branch],
  };
}

// 計算日柱 (使用蔡勒公式變體)
function calculateDayPillar(year: number, month: number, day: number): Pillar {
  // 使用 1900年1月31日 (甲戌日) 作為基準日
  const baseDate = new Date(1900, 0, 31);
  const targetDate = new Date(year, month - 1, day);
  
  const diffDays = Math.floor((targetDate.getTime() - baseDate.getTime()) / (1000 * 60 * 60 * 24));
  
  // 1900年1月31日是甲戌日 (甲=0, 戌=10)
  const baseStemIndex = 0;
  const baseBranchIndex = 10;
  
  const stemIndex = ((diffDays + baseStemIndex) % 10 + 10) % 10;
  const branchIndex = ((diffDays + baseBranchIndex) % 12 + 12) % 12;
  
  const stem = HEAVENLY_STEMS[stemIndex];
  const branch = EARTHLY_BRANCHES[branchIndex];
  
  return {
    stem,
    branch,
    stemElement: STEM_ELEMENTS[stem],
    branchElement: BRANCH_ELEMENTS[branch],
  };
}

// 計算時柱
function calculateHourPillar(dayStem: string, hourIndex: number): Pillar {
  const dayStemIndex = HEAVENLY_STEMS.indexOf(dayStem as typeof HEAVENLY_STEMS[number]);
  const branchIndex = HOUR_TO_BRANCH[hourIndex];
  
  // 日干決定時干的起始
  // 甲己日起甲子時, 乙庚日起丙子時...
  const hourStemBase = [0, 2, 4, 6, 8]; // 甲、丙、戊、庚、壬
  const baseIndex = hourStemBase[dayStemIndex % 5];
  const stemIndex = (baseIndex + branchIndex) % 10;
  
  const stem = HEAVENLY_STEMS[stemIndex];
  const branch = EARTHLY_BRANCHES[branchIndex];
  
  return {
    stem,
    branch,
    stemElement: STEM_ELEMENTS[stem],
    branchElement: BRANCH_ELEMENTS[branch],
  };
}

// 計算五行統計
function calculateElementCounts(pillars: Pillar[]): Record<string, number> {
  const counts: Record<string, number> = {
    '木': 0, '火': 0, '土': 0, '金': 0, '水': 0
  };
  
  pillars.forEach(pillar => {
    counts[pillar.stemElement]++;
    counts[pillar.branchElement]++;
  });
  
  return counts;
}

// 主計算函數
export function calculateBazi(
  year: number,
  month: number,
  day: number,
  hourIndex: number
): BaziChart {
  const yearPillar = calculateYearPillar(year);
  const monthPillar = calculateMonthPillar(year, month);
  const dayPillar = calculateDayPillar(year, month, day);
  const hourPillar = calculateHourPillar(dayPillar.stem, hourIndex);
  
  const pillars = [yearPillar, monthPillar, dayPillar, hourPillar];
  const elementCounts = calculateElementCounts(pillars);
  
  return {
    year: yearPillar,
    month: monthPillar,
    day: dayPillar,
    hour: hourPillar,
    zodiac: BRANCH_ZODIAC[yearPillar.branch],
    elementCounts,
  };
}

// 獲取元素顏色
export function getElementColor(element: string): string {
  const colors: Record<string, string> = {
    '木': 'text-emerald-400',
    '火': 'text-red-400',
    '土': 'text-amber-400',
    '金': 'text-slate-300',
    '水': 'text-blue-400',
  };
  return colors[element] || 'text-foreground';
}

export function getElementBgColor(element: string): string {
  const colors: Record<string, string> = {
    '木': 'bg-emerald-500/20',
    '火': 'bg-red-500/20',
    '土': 'bg-amber-500/20',
    '金': 'bg-slate-400/20',
    '水': 'bg-blue-500/20',
  };
  return colors[element] || 'bg-muted';
}
