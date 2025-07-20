import React from 'react';

const projectData = [
  {
    title: "팀 프로젝트 관리 도구",
    desc: "React와 Node.js 기반의 실시간 칸반 보드 협업 툴입니다. 드래그 앤 드롭으로 태스크를 관리하고, WebSocket을 통해 변경사항을 실시간으로 공유합니다.",
    tags: ["React", "Node.js", "WebSocket", "MongoDB"]
  },
  {
    title: "개인 포트폴리오 사이트",
    desc: "React와 GitHub Pages를 이용해 제작한 반응형 웹 포트폴리오입니다. SPA(Single Page Application) 구조로 빠른 페이지 전환 속도를 제공합니다.",
    tags: ["React", "JavaScript", "CSS", "GitHub Pages"]
  }
];

function Projects() {
  return (
    <>
      <h1 className="page-title">Projects</h1>
      <div className="section">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <div className="project-tags">
              {project.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;