import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-2xl font-bold">
              <span className="text-gradient-gold">命</span>
              <span className="text-foreground mx-1">·</span>
              <span className="text-gradient-crimson">盤</span>
            </span>
            <Sparkles className="w-5 h-5 text-accent" />
          </div>
          
          <p className="text-muted-foreground text-sm max-w-md mb-6">
            探索東方古老智慧，解讀命運密碼
          </p>

          <div className="flex gap-6 text-sm text-muted-foreground mb-8">
            <a href="#about" className="hover:text-accent transition-colors">
              關於八字
            </a>
            <a href="#calculator" className="hover:text-accent transition-colors">
              排盤解命
            </a>
          </div>

          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

          <p className="text-xs text-muted-foreground">
            © 2024 命盤. 僅供參考，命運掌握在自己手中
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
