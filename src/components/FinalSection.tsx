import { MagicalButton } from "./MagicalButton";
import { MagicalCard } from "./MagicalCard";
import hospitalImage from "@/assets/hospital-castle.jpg";

export const FinalSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-magical bg-clip-text text-transparent">
            🏰 새로운 시작, 울산대학교병원
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            3년간의 서울 생활을 통해 쌓은 경험과 기술로 더 나은 의료 서비스를 만들어가겠습니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={hospitalImage}
              alt="울산대학교병원"
              className="w-full rounded-2xl shadow-magical animate-float"
            />
          </div>

          <div className="space-y-8">
            <MagicalCard className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <span className="animate-sparkle">💝</span>
                나의 다짐
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                울산대학교병원에서 환자분들과 의료진이 더 편리하고 안전하게 이용할 수 있는 
                서비스를 개발하는 것이 목표입니다.
              </p>
              <p className="text-foreground leading-relaxed">
                서울에서 쌓은 경험과 고향에 대한 애정을 바탕으로 
                의미있는 일에 기여하고 싶어요! 🌟
              </p>
            </MagicalCard>

            <MagicalCard className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                <span className="animate-bounce-gentle">🎯</span>
                앞으로의 계획
              </h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  환자 중심의 디지털 솔루션 개발
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">•</span>
                  의료진 업무 효율성 향상을 위한 시스템 구축
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-foreground">•</span>
                  지속적인 학습과 기술 발전
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  팀원들과의 협업을 통한 성장
                </li>
              </ul>
            </MagicalCard>

            <div className="text-center">
              <MagicalCard className="animate-fade-in-up bg-gradient-magical" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-2xl font-bold text-white mb-4">
                  앞으로 잘 부탁드리겠습니다! 🙏
                </h3>
                <p className="text-white/90 text-lg">
                  울산대학교병원 팀원 여러분,<br />
                  함께 멋진 서비스를 만들어 나가요! ✨
                </p>
              </MagicalCard>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-primary mb-10">🎉 재미있는 TMI</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <MagicalCard className="animate-fade-in-up text-center" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl mb-3 animate-sparkle">🍻</div>
              <h4 className="font-bold text-secondary mb-2">주량 자랑</h4>
              <p className="text-sm text-muted-foreground">
                컨디션 좋으면 3병까지!<br />
                회식 때 잘 부탁드려요 😄
              </p>
            </MagicalCard>

            <MagicalCard className="animate-fade-in-up text-center" style={{ animationDelay: '0.8s' }}>
              <div className="text-4xl mb-3 animate-bounce-gentle">🥋</div>
              <h4 className="font-bold text-secondary mb-2">군대 추억</h4>
              <p className="text-sm text-muted-foreground">
                격투기 선수 선임님께<br />
                겸손함을 배웠답니다 💪
              </p>
            </MagicalCard>

            <MagicalCard className="animate-fade-in-up text-center" style={{ animationDelay: '1s' }}>
              <div className="text-4xl mb-3 animate-float">🌅</div>
              <h4 className="font-bold text-secondary mb-2">미라클 모닝</h4>
              <p className="text-sm text-muted-foreground">
                해가 뜨고 퇴근하는<br />
                진짜 미라클을 경험했어요 😅
              </p>
            </MagicalCard>
          </div>
        </div>
      </div>
    </section>
  );
};