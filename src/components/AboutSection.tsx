import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, Compass } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "年柱",
    subtitle: "Year Pillar",
    description: "代表祖先、童年運勢與社會關係",
  },
  {
    icon: Clock,
    title: "月柱",
    subtitle: "Month Pillar",
    description: "象徵父母、成長環境與事業發展",
  },
  {
    icon: BookOpen,
    title: "日柱",
    subtitle: "Day Pillar",
    description: "反映自我、配偶關係與內在性格",
  },
  {
    icon: Compass,
    title: "時柱",
    subtitle: "Hour Pillar",
    description: "預示子女、晚年運勢與精神層面",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-charcoal-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">四柱八字</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            八字命理源自中國古老的天文曆法，以出生的年、月、日、時四個時間點，
            推算出代表命運的八個字，揭示一個人的性格、運勢與人生方向
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:glow-gold">
                <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-accent mb-3 font-display">
                  {feature.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
