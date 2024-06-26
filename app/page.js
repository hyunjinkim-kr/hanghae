import dynamic from 'next/dynamic';

// 동적 컴포넌트 임포트 (클라이언트 측에서만 렌더링됨)
const Navbar = dynamic(() => import('./components/Navbar'), { ssr: false });
const HomeSection = dynamic(() => import('./components/HomeSection'), { ssr: false });
const AboutSection = dynamic(() => import('./components/AboutSection'), { ssr: false });
const TestSection = dynamic(() => import('./components/TestSection'), { ssr: false });
const TestSection2 = dynamic(() => import('./components/TestSection2'), { ssr: false });
const TeamSection = dynamic(() => import('./components/TeamSection'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection id="home" title="독성 말투 개선 프로젝트" bgColor="bg-white" />
      <AboutSection id="about" title="About" bgColor="bg-gray-200" />
      <TestSection id="test" title="DEMO" bgColor="bg-gray-300" />
      <TestSection2 id="testing" title="Testing" bgColor="bg-gray-300" />
      <TeamSection id="team" title="Team" bgColor="bg-gray-400" />
    </div>
  );
} 