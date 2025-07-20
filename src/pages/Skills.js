import React from 'react';

const skillData = {
  "Languages": ["JavaScript(ES6+)", "TypeScript", "Python", "Java"],
  "Framework & Library": ["React", "Node.js", "Express", "Spring Boot"],
  "Database": ["MySQL", "MongoDB", "Redis"],
  "DevOps": ["AWS", "Docker", "Git", "Jenkins"]
};

function Skills() {
  return (
    <>
      <h1 className="page-title">Skills</h1>
      {Object.entries(skillData).map(([category, skills]) => (
        <div key={category} className="section">
          <h3>{category}</h3>
          <div className="skills-list">
            {skills.map(skill => <div key={skill} className="skill-item">{skill}</div>)}
          </div>
        </div>
      ))}
    </>
  );
}

export default Skills;