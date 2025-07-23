import { MagicalCard } from "./MagicalCard";

export const AboutSection = () => {
  const personalInfo = [
    { label: "이름", value: "서희재", emoji: "🙋‍♂️" },
    { label: "생년월일", value: "1997년 2월 19일", emoji: "🎂" },
    { label: "띠", value: "소띠", emoji: "🐂" },
    { label: "MBTI", value: "ENFJ", emoji: "🧠" },
    { label: "주량", value: "2.5병 (컨디션 좋으면 3병)", emoji: "🍻" },
    { label: "좌우명", value: "놀 땐 놀고 할 땐 하자", emoji: "⚡" },
    { label: "연애", value: "현재 솔로", emoji: "💙" }
  ];

  const skills = [
    { name: "웹 개발", level: 90, color: "bg-gradient-to-r from-blue-400 to-blue-600" },
    { name: "앱 개발", level: 85, color: "bg-gradient-to-r from-green-400 to-green-600" },
    { name: "데이터 설계", level: 80, color: "bg-gradient-to-r from-purple-400 to-purple-600" },
    { name: "팀워크", level: 95, color: "bg-gradient-to-r from-pink-400 to-pink-600" },
    { name: "적응력", level: 90, color: "bg-gradient-to-r from-yellow-400 to-yellow-600" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
            ✨ 나에 대해 알아보기
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            개발을 사랑하고 사람들과 함께 성장하는 것을 좋아하는 ENFJ입니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Information */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">
              🎭 기본 정보
            </h3>
            <div className="grid gap-4">
              {personalInfo.map((info, index) => (
                <MagicalCard 
                  key={index} 
                  className="animate-fade-in-up" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl animate-bounce-gentle">{info.emoji}</span>
                      <span className="font-semibold text-foreground">{info.label}</span>
                    </div>
                    <span className="text-primary font-bold">{info.value}</span>
                  </div>
                </MagicalCard>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">
              🚀 보유 스킬
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <MagicalCard 
                  key={index}
                  className="animate-fade-in-up" 
                  style={{ animationDelay: `${(index + personalInfo.length) * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">{skill.name}</span>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </MagicalCard>
              ))}
            </div>

            <MagicalCard className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <h4 className="text-xl font-bold text-secondary mb-3">🎯 주요 프로젝트</h4>
              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">스마트스코어 골프 앱</strong>의 커뮤니티 파트를 
                데이터 설계부터 개발까지 담당했어요. 
                사용자들이 골프를 더 즐겁게 즐길 수 있도록 도움을 주는 서비스를 만들었답니다! ⛳
              </p>
            </MagicalCard>
          </div>
        </div>
      </div>
    </section>
  );
};