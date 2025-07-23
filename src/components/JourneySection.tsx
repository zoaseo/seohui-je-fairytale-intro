import { MagicalCard } from "./MagicalCard";
import journeyImage from "@/assets/journey-path.jpg";

export const JourneySection = () => {
  const journeySteps = [
    {
      title: "울산에서의 시작",
      period: "어린 시절 ~ 고등학교",
      description: "울산 북구에서 쭉 살며 중학교에서 수재라는 소리를 들었어요. 소림축구에 감명받아 울산외국어고 중국어과에 입학했답니다!",
      emoji: "🏠",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "새로운 도전",
      period: "고등학교 ~ 대학교",
      description: "외국어에 소질이 없어 아랍어로 수능을 보고 공대로 진로를 변경! 학생회 활동도 열심히 했어요.",
      emoji: "📚",
      color: "from-green-400 to-green-600"
    },
    {
      title: "군대에서의 성장",
      period: "대명문 8사단 오뚜기 부대",
      description: "수색대에서 격투기 선수 선임을 만나며 겸손함을 많이 배웠어요. 인생의 중요한 터닝포인트였답니다!",
      emoji: "🎖️",
      color: "from-red-400 to-red-600"
    },
    {
      title: "서울에서의 꿈",
      period: "3년간의 상경 생활",
      description: "개발에 흥미가 생겨 야심찬 목표로 서울 SI 회사에 취업! 스마트스코어 골프 앱 개발도 했어요. 해가 뜨고 퇴근하는 미라클 모닝도 경험했답니다.",
      emoji: "💻",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "울산으로의 귀환",
      period: "현재 - 울산대학교병원",
      description: "3년의 서울 생활을 마치고 고향으로 돌아와 울산대학교병원에서 새로운 시작을 하게 되었어요!",
      emoji: "🏥",
      color: "from-pink-400 to-pink-600"
    }
  ];

  return (
    <section id="journey" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            🌈 나의 마법같은 여정
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            울산에서 시작해서 서울을 거쳐 다시 울산으로, 각 단계마다 새로운 배움과 성장이 있었어요
          </p>
        </div>

        <div className="mb-12">
          <img 
            src={journeyImage}
            alt="나의 여정"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-magical"
          />
        </div>

        <div className="grid gap-8 md:gap-12">
          {journeySteps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <MagicalCard className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-2xl animate-bounce-gentle`}>
                      {step.emoji}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                      <p className="text-sm text-secondary font-semibold">{step.period}</p>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">{step.description}</p>
                </MagicalCard>
              </div>
              
              <div className="hidden lg:block w-8 h-8 bg-gradient-magical rounded-full animate-sparkle"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};