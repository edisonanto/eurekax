import { motion } from "framer-motion";
import { type BaziChart, getElementColor, getElementBgColor, HOUR_NAMES } from "@/lib/bazi";

interface BaziResultProps {
  chart: BaziChart;
  birthInfo: {
    year: number;
    month: number;
    day: number;
    hourIndex: number;
    gender: string;
  };
}

const PillarCard = ({ 
  title, 
  subtitle,
  stem, 
  branch, 
  stemElement, 
  branchElement,
  delay 
}: { 
  title: string;
  subtitle: string;
  stem: string;
  branch: string;
  stemElement: string;
  branchElement: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center"
  >
    <p className="text-xs text-muted-foreground mb-1">{subtitle}</p>
    <p className="text-sm text-accent font-medium mb-3">{title}</p>
    
    <div className="flex flex-col gap-2">
      {/* 天干 */}
      <div className={`w-16 h-16 rounded-lg ${getElementBgColor(stemElement)} flex flex-col items-center justify-center border border-border`}>
        <span className={`text-2xl font-bold ${getElementColor(stemElement)}`}>
          {stem}
        </span>
        <span className="text-[10px] text-muted-foreground">{stemElement}</span>
      </div>
      
      {/* 地支 */}
      <div className={`w-16 h-16 rounded-lg ${getElementBgColor(branchElement)} flex flex-col items-center justify-center border border-border`}>
        <span className={`text-2xl font-bold ${getElementColor(branchElement)}`}>
          {branch}
        </span>
        <span className="text-[10px] text-muted-foreground">{branchElement}</span>
      </div>
    </div>
  </motion.div>
);

const ElementBar = ({ element, count, maxCount }: { element: string; count: number; maxCount: number }) => {
  const percentage = (count / maxCount) * 100;
  
  return (
    <div className="flex items-center gap-3">
      <span className={`w-6 text-lg font-bold ${getElementColor(element)}`}>{element}</span>
      <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`h-full ${getElementBgColor(element).replace('/20', '/60')} rounded-full`}
        />
      </div>
      <span className="w-6 text-sm text-muted-foreground text-right">{count}</span>
    </div>
  );
};

const BaziResult = ({ chart, birthInfo }: BaziResultProps) => {
  const maxElementCount = Math.max(...Object.values(chart.elementCounts));
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-8 p-6 rounded-2xl bg-card border border-border"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-4"
        >
          <span className="text-2xl">{chart.zodiac}</span>
          <span className="text-accent font-medium">
            {birthInfo.gender === 'male' ? '乾造' : '坤造'}
          </span>
        </motion.div>
        
        <p className="text-muted-foreground text-sm">
          {birthInfo.year}年 {birthInfo.month}月 {birthInfo.day}日 {HOUR_NAMES[birthInfo.hourIndex]}
        </p>
      </div>

      {/* Four Pillars */}
      <div className="mb-8">
        <h3 className="text-center text-lg font-bold text-foreground mb-6">四柱八字</h3>
        
        <div className="flex justify-center gap-4 md:gap-8">
          <PillarCard
            title="時柱"
            subtitle="Hour"
            stem={chart.hour.stem}
            branch={chart.hour.branch}
            stemElement={chart.hour.stemElement}
            branchElement={chart.hour.branchElement}
            delay={0.4}
          />
          <PillarCard
            title="日柱"
            subtitle="Day"
            stem={chart.day.stem}
            branch={chart.day.branch}
            stemElement={chart.day.stemElement}
            branchElement={chart.day.branchElement}
            delay={0.3}
          />
          <PillarCard
            title="月柱"
            subtitle="Month"
            stem={chart.month.stem}
            branch={chart.month.branch}
            stemElement={chart.month.stemElement}
            branchElement={chart.month.branchElement}
            delay={0.2}
          />
          <PillarCard
            title="年柱"
            subtitle="Year"
            stem={chart.year.stem}
            branch={chart.year.branch}
            stemElement={chart.year.stemElement}
            branchElement={chart.year.branchElement}
            delay={0.1}
          />
        </div>
      </div>

      {/* Day Master */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-8 p-4 rounded-xl bg-muted/50 text-center"
      >
        <p className="text-sm text-muted-foreground mb-1">日主 (Day Master)</p>
        <p className={`text-3xl font-bold ${getElementColor(chart.day.stemElement)}`}>
          {chart.day.stem}
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          {chart.day.stemElement}命
        </p>
      </motion.div>

      {/* Five Elements Distribution */}
      <div>
        <h3 className="text-center text-lg font-bold text-foreground mb-4">五行分佈</h3>
        <div className="space-y-3 max-w-md mx-auto">
          {Object.entries(chart.elementCounts).map(([element, count]) => (
            <ElementBar 
              key={element} 
              element={element} 
              count={count} 
              maxCount={maxElementCount} 
            />
          ))}
        </div>
      </div>

      {/* Brief Interpretation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 p-4 rounded-xl border border-accent/20 bg-accent/5"
      >
        <p className="text-sm text-muted-foreground text-center">
          您的日主為 <span className={`font-bold ${getElementColor(chart.day.stemElement)}`}>{chart.day.stem}{chart.day.stemElement}</span>，
          生肖屬 <span className="font-bold text-accent">{chart.zodiac}</span>。
          八字五行中，
          {Object.entries(chart.elementCounts)
            .filter(([_, count]) => count === maxElementCount)
            .map(([el]) => el)
            .join('、')
          } 較旺，
          {Object.entries(chart.elementCounts)
            .filter(([_, count]) => count === Math.min(...Object.values(chart.elementCounts)))
            .map(([el]) => el)
            .join('、')
          } 較弱。
        </p>
      </motion.div>
    </motion.div>
  );
};

export default BaziResult;
