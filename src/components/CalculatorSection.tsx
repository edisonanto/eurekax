import { motion } from "framer-motion";
import { useState } from "react";
import { CalendarDays, Clock, MapPin, Sparkles } from "lucide-react";

const CalculatorSection = () => {
  const [formData, setFormData] = useState({
    year: "",
    month: "",
    day: "",
    hour: "",
    gender: "male",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - would calculate bazi here
    alert("功能開發中，敬請期待！\n\nComing soon!");
  };

  return (
    <section id="calculator" className="py-24 bg-background relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-crimson">排盤解命</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            輸入您的出生資訊，開始探索命運的奧秘
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Year */}
              <div>
                <label className="block text-sm text-muted-foreground mb-2 flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  出生年份
                </label>
                <input
                  type="number"
                  placeholder="例：1990"
                  min="1900"
                  max="2100"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>

              {/* Month */}
              <div>
                <label className="block text-sm text-muted-foreground mb-2 flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  出生月份
                </label>
                <select
                  value={formData.month}
                  onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                >
                  <option value="">請選擇月份</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} 月
                    </option>
                  ))}
                </select>
              </div>

              {/* Day */}
              <div>
                <label className="block text-sm text-muted-foreground mb-2 flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  出生日期
                </label>
                <select
                  value={formData.day}
                  onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                >
                  <option value="">請選擇日期</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} 日
                    </option>
                  ))}
                </select>
              </div>

              {/* Hour */}
              <div>
                <label className="block text-sm text-muted-foreground mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  出生時辰
                </label>
                <select
                  value={formData.hour}
                  onChange={(e) => setFormData({ ...formData, hour: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                >
                  <option value="">請選擇時辰</option>
                  <option value="0">子時 (23:00-01:00)</option>
                  <option value="1">丑時 (01:00-03:00)</option>
                  <option value="2">寅時 (03:00-05:00)</option>
                  <option value="3">卯時 (05:00-07:00)</option>
                  <option value="4">辰時 (07:00-09:00)</option>
                  <option value="5">巳時 (09:00-11:00)</option>
                  <option value="6">午時 (11:00-13:00)</option>
                  <option value="7">未時 (13:00-15:00)</option>
                  <option value="8">申時 (15:00-17:00)</option>
                  <option value="9">酉時 (17:00-19:00)</option>
                  <option value="10">戌時 (19:00-21:00)</option>
                  <option value="11">亥時 (21:00-23:00)</option>
                </select>
              </div>
            </div>

            {/* Gender */}
            <div className="mb-8">
              <label className="block text-sm text-muted-foreground mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                性別
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-4 h-4 accent-accent"
                  />
                  <span className="text-foreground">男</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-4 h-4 accent-accent"
                  />
                  <span className="text-foreground">女</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-medium text-lg hover:bg-crimson-glow transition-all duration-300 glow-crimson flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              開始排盤
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorSection;
