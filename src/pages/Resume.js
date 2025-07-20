import React from 'react';

function Resume() {
  return (
    <>
      <h1 className="page-title">Resume</h1>
      <div className="section">
        <h3>💡 소개</h3>
        <p>새로운 기술을 배우고 적용하는 것을 즐기는 개발자 홍길동입니다. 사용자를 위한 가치 창출에 보람을 느끼며, 동료와 함께 성장하는 환경을 중요하게 생각합니다.</p>
      </div>
      <div className="section">
        <h3>🎓 학력</h3>
        <p><strong>코리아대학교 컴퓨터공학과</strong> | 2020.03 ~ 2024.02 졸업</p>
      </div>
      <div className="section">
        <h3>💼 경력</h3>
        <p><strong>Awesome Company</strong> | Software Engineer | 2024.03 ~ 현재</p>
        <ul>
          <li>주요 서비스 백엔드 API 개발 및 유지보수</li>
          <li>대용량 트래픽 처리를 위한 시스템 아키텍처 개선</li>
          <li>서비스 안정성 확보를 위한 CI/CD 파이프라인 구축</li>
        </ul>
      </div>
    </>
  );
}

export default Resume;