import React from 'react';
import { skillsData } from '../data/data';

const Skills = () => {
  return (
    <div className="skills section">
      <h2>Skills</h2>
      <ul>
        {skillsData.map(skill => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
