'use client';

export default function HomeSection({ id, title, bgColor }) {
  // 섹션 스타일 설정
  const sectionStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr', // 두 컬럼으로 분할
    minHeight: '100vh',
  };

  // 이미지 스타일 설정
  const imageStyle = {
    backgroundImage: 'url("/duck.png")',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    minHeight: '100vh', // 높이 설정
    backgroundRepeat: 'no-repeat', // 이미지 반복 없음
  };

  return (
    <div id={id} className={`h-screen ${bgColor} grid lg:grid-cols-2 grid-cols-1`} style={sectionStyle}>
      <div className="flex flex-col items-center justify-center p-8">
        {/* 설명 부분 */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-4 p-8 text-center text-black-700">{title}</h2>
        <p className="text-base sm:text-lg lg:text-2xl font-medium text-gray-700 text-center whitespace-pre-line">
          우리, 표정은 독해도 말은 순하게 해봐요!{'\n\n'}
          AI 교차검증을 통한 말투 독성제거를 경험해요.
        </p>
      </div>
      <div className="flex items-center justify-center lg:p-0 p-8" style={imageStyle}>
        {/* 이미지 부분 */}
      </div>
    </div>
  );
}