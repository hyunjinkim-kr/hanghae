
import Image from "next/image";
import React from 'react';


// 각 팀원 정보를 담은 배열
const teamMembers = [
  {
    name: 'Hyunjin Kim',
    image: '/image.png',
    description: '안녕하세요, 김현진 입니다. \n집가고싶네요 모두 화이팅',
  },
  {
    name: 'Changhyun Nam',
    image: '/nozomi.jpg',
    description: '안녕하세요, 남창현 입니다. \n감사합니다.',
  },
  {
    name: 'Aimyon',
    image: '/Aim.jpg', //https://pbs.twimg.com/media/EV4NOIoUwAEFJp2?format=jpg&name=small
    description: 'Hello, this is Aimyon.\n I love you all.',
  },
  // {
  //   name: 'Emily Brown',
  //   image: '/emily_brown.jpg',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit sit amet turpis vel congue. Nullam id ultrices neque.',
  // },
];

export default async function TeamSection({ id, title, bgColor }) {
  // 섹션 배경 이미지 설정
  const sectionStyle = id === 'home' ? { background: `url('/ndg.jpg') center/cover no-repeat fixed`, minHeight: '100vh' } : {};
  // const client = await connectDB
  // const db = client.db("dbdufqnfsk22")
  // let result = await db.collection('hanghae').find().toArray()

  return (
    <div id={id} className={`h-screen flex flex-col items-center justify-center ${bgColor}`} style={sectionStyle}>
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      <div className="flex justify-center space-x-8">
        {/* 각 팀원 카드를 나타내는 요소들 */}
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center max-w-xs">
            <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mb-4" /> {/* 크기 조정 */}
            <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
            <p className="text-sm text-center whitespace-pre-line">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}