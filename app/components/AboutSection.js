'use client';

export default function AboutSection({ id, title, bgColor }) {
  // 이미지 URL
  const imageUrl = '/upgrade.png';

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
        <p className="text-lg  whitespace-pre-line  leading-loose ">
          사용자가 입력한 말은 다음을 목표로 변환됩니다.{'\n'}
            1. 말투를 고칩니다.{'\n'}
            2. 단, 의미를 해치지 않도록 합니다.{'\n\n'}
            먼저 챗봇을 초대한 후, 챗봇에게 대화를 입력 합니다.{'\n'}
            대화는 다수의 LLM 모델에게 전달되며,{'\n'}
            각각 LLM이 번역한 순화 표현결과에 대해서 의견을 취합합니다.{'\n'}
            즉, AI들의 해답을 AI에게 반복하여 '교차검증'된 최선의 결과를 가져옵니다.{'\n'}
        </p>
      </div>
      <div style={imageStyle}></div>
    </div>
  );
}