import { MagicalButton } from "./MagicalButton";
import { MagicalCard } from "./MagicalCard";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary-glow rounded-full animate-sparkle opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-float delay-1000 opacity-80"></div>
        <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-accent rounded-full animate-bounce-gentle delay-500 opacity-70"></div>
        <div className="absolute top-60 right-1/3 w-2 h-2 bg-primary-glow rounded-full animate-sparkle delay-2000 opacity-90"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              서희재의
            </h1>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
              마법같은 여정
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              한 남자가 울산에서 시작해 서울을 거쳐<br />
              다시 울산으로 돌아온 성장 이야기 ✨
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <MagicalButton 
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('journey')}
              >
                🌟 여정 시작하기
              </MagicalButton>
              <MagicalButton 
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('about')}
              >
                📖 나에 대해
              </MagicalButton>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <MagicalCard className="max-w-md animate-float" glow>
              <img 
                src={heroImage}
                alt="서희재의 마법같은 여정"
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">서희재</h3>
                <p className="text-muted-foreground mb-2">🐂 1997년 2월 19일 (소띠)</p>
                <p className="text-muted-foreground mb-2">🧠 ENFJ</p>
                <p className="text-sm text-accent-foreground font-semibold">
                  "놀 땐 놀고 할 땐 하자" 💪
                </p>
              </div>
            </MagicalCard>
          </div>
        </div>
      </div>
    </section>
  );
};