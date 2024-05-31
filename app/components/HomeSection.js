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
    backgroundImage: 'url("/dng.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // 높이 설정
  };

  return (
    <div id={id} className={`h-screen ${bgColor}`} style={sectionStyle}>
      <div className="flex items-center justify-center p-8">
        {/* 설명 부분 */}
        <h2 className="text-4xl font-bold mb-4 p-8">{title}</h2>
        <p className="text-lg">나도 모르게 말투가 좋게 나오지 않나요? 저희가 말해 드릴게요!</p>
      </div>
      <div style={imageStyle}>
        {/* 이미지 부분 */}
      </div>
    </div>
  );
}