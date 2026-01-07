import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mystical">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-crimson/5 blur-2xl" />
      </div>

      {/* Bagua symbol background */}
      <motion.div
        className="absolute w-[600px] h-[600px] opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-gold">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </motion.div>

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-muted-foreground text-sm tracking-widest uppercase">
              探索命運的奧秘
            </span>
            <Sparkles className="w-5 h-5 text-accent" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wide">
            <span className="text-gradient-gold">命</span>
            <span className="text-foreground mx-2">·</span>
            <span className="text-gradient-crimson">盤</span>
          </h1>

          <p className="text-xl md:text-2xl text-cream-dim max-w-2xl mx-auto mb-4 leading-relaxed">
            八字命理 · 四柱推算
          </p>

          <p className="text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            透過古老的東方智慧，解讀您的出生時辰，揭示命運的軌跡與人生的密碼
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#calculator"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-primary text-primary-foreground hover:bg-crimson-glow transition-all duration-300 glow-crimson"
          >
            開始解盤
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg border-gradient-gold text-foreground hover:text-accent transition-all duration-300"
          >
            了解更多
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-accent/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
