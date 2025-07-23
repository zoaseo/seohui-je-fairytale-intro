import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ✨ 서희재의 마법같은 여정 ✨
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            울산대학교병원에서 새롭게 시작하는 개발자의 이야기
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            🚀 여정 시작하기
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">👨‍💻 기본 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold">이름:</span>
                <span>서희재</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">생년월일:</span>
                <span>1997년 2월 19일 (소띠)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">MBTI:</span>
                <span>ENFJ</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">좌우명:</span>
                <span>놀 땐 놀고 할 땐 하자</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">🎯 새로운 시작</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                울산대학교병원에서 환자들과 의료진들을 위한 
                더 나은 서비스를 만들기 위해 노력하겠습니다. 
                3년간의 서울 개발 경험을 바탕으로 
                혁신적인 솔루션을 제공하겠습니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Journey Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          🌈 나의 마법같은 여정
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold">🎓 학창시절 (울산 북구)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                수재라는 소리를 들으며 중학교에서 공부로 입지를 쌓았지만, 
                소림축구에 감명받아 울산외국어고등학교 중국어과에 입학. 
                하지만 외국어 소질 부족으로 수능은 아랍어로 도전!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold">🪖 군생활 (8사단 오뚜기 부대)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                수색대에서 격투기 선수 선임을 만나며 겸손함을 배우는 소중한 시간을 보냄.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold">💻 개발자 여정 (서울 3년)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                "남자는 죽기전에 상경을 해서 꿈을 꿔야 한다"는 야심찬 목표로 서울 SI 회사에서 2년간 근무. 
                스마트스코어 골프 앱 커뮤니티 파트를 데이터 설계부터 개발까지 진행. 
                미라클 모닝도 경험하며 열정적으로 살았지만, 결국 고향으로 돌아오게 됨.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
          🎉 Fun Facts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
            <CardHeader>
              <CardTitle className="text-lg">🍻 주량</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-yellow-400">2.5병</p>
              <p className="text-sm text-gray-300">(컨디션 좋으면 3병까지!)</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
            <CardHeader>
              <CardTitle className="text-lg">🌅 미라클 모닝</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">해가 뜨고 퇴근하는 개발자 라이프 경험</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
            <CardHeader>
              <CardTitle className="text-lg">💪 수색대 출신</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">격투기 선수 선임에게 겸손함을 배움</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400">
        <p>울산대학교병원에서 새로운 마법을 만들어가겠습니다! ✨</p>
      </footer>
    </div>
  );
};

export default Index;