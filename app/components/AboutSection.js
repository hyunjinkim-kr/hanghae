'use client';

export default function AboutSection({ id, title, bgColor }) {
  // 이미지 URL
  const imageUrl = '/dng_info-removebg-preview.png';

  // 섹션 스타일
  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex', // 설명과 이미지를 가로로 나란히 정렬하기 위해 flex 사용
    alignItems: 'center', // 세로 가운데 정렬
    justifyContent: 'space-between', // 가로 공간을 나눠 정렬
    padding: '20px', // 내용과 이미지 간의 여백 추가
  };

  // 설명 영역 스타일
  const textStyle = {
    flexBasis: '50%', // 설명 영역의 너비 설정
    padding: '0 20px', // 텍스트 내용과 여백 추가
  };

  // 이미지 영역 스타일
  const imageStyle = {
    flexBasis: '90%', // 이미지 영역의 너비 설정
    backgroundImage: `url(${imageUrl})`, // 이미지 URL 설정
    backgroundSize: 'contain', // 이미지를 내용에 맞게 조절하여 잘리지 않도록 설정
    backgroundPosition: 'center', // 이미지를 중앙에 배치
    backgroundRepeat: 'no-repeat', // 이미지 반복 없음
    minHeight: '100%', // 이미지 영역이 내용의 높이에 맞게 설정
  };

  return (
    <div id={id} className={`h-screen ${bgColor}`} style={sectionStyle}>
      <div style={textStyle}>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
        {/* 추가적인 설명 내용 */}
        <p className="text-lg">ㅇㅁㄴㄹㅇㄹㄴㄹㅇㄴㅁㄹㅇㅇㄹㅇㄴㄹㄻㅇ닝룸니룽ㄴ밀ㅇㄴ미러
        님ㅇ러ㅣㅁㅇ너림ㅇ나러밍ㄴ러ㅏㅣㅁㅇ너림ㄴㅇ러ㅣㅁㄴㅇ럼ㅇㄹ니ㅏㅓㅇㄹ나ㅣㅇㄹ너</p>
      </div>
      <div style={imageStyle}></div>
    </div>
  );
}