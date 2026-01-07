import { motion } from "framer-motion";

const elements = [
  {
    name: "木",
    english: "Wood",
    color: "from-emerald-600 to-emerald-800",
    textColor: "text-emerald-400",
    description: "生長、仁慈、創造",
    traits: "富有同情心、善於規劃",
  },
  {
    name: "火",
    english: "Fire",
    color: "from-red-500 to-orange-600",
    textColor: "text-red-400",
    description: "熱情、禮儀、表達",
    traits: "充滿活力、感染力強",
  },
  {
    name: "土",
    english: "Earth",
    color: "from-amber-600 to-yellow-700",
    textColor: "text-amber-400",
    description: "穩定、信義、包容",
    traits: "踏實可靠、善於協調",
  },
  {
    name: "金",
    english: "Metal",
    color: "from-slate-300 to-slate-500",
    textColor: "text-slate-300",
    description: "堅毅、義氣、決斷",
    traits: "正直果斷、追求完美",
  },
  {
    name: "水",
    english: "Water",
    color: "from-blue-500 to-indigo-700",
    textColor: "text-blue-400",
    description: "智慧、靈活、深邃",
    traits: "聰明機智、善於溝通",
  },
];

const ElementsSection = () => {
  return (
    <section className="py-24 bg-charcoal-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-30" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">五行相生</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            五行是中國古代哲學的核心概念，代表宇宙萬物的五種基本元素，
            相互生克，維持天地間的平衡與和諧
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {elements.map((element, index) => (
            <motion.div
              key={element.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-square rounded-2xl bg-card border border-border p-4 flex flex-col items-center justify-center text-center hover:border-accent/30 transition-all duration-500 relative overflow-hidden">
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${element.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <span
                  className={`text-5xl md:text-6xl font-bold mb-2 ${element.textColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  {element.name}
                </span>
                <span className="text-xs text-muted-foreground font-display tracking-wider mb-3">
                  {element.english}
                </span>
                <p className="text-xs text-cream-dim hidden md:block">
                  {element.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Five Elements Cycle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 text-muted-foreground text-sm">
            <span className="text-emerald-400">木</span>
            <span>→</span>
            <span className="text-red-400">火</span>
            <span>→</span>
            <span className="text-amber-400">土</span>
            <span>→</span>
            <span className="text-slate-300">金</span>
            <span>→</span>
            <span className="text-blue-400">水</span>
            <span>→</span>
            <span className="text-emerald-400">木</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">相生循環</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ElementsSection;
