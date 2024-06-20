import React from 'react';
import SearchSection from './SearchSection';
import ProjectCard from './ProjectCard';
import mockProjectsData from '../data/mockProjectsData';

const LandingPage = () => {
  return (
    <div>
      <SearchSection />
      <div className="grid grid-cols-12 gap-x-4 gap-y-6 pt-2 pb-20 px-6 mx-auto">
        {mockProjectsData.data.search.nodes.map((project) => {
          return <ProjectCard key={project.id} projectDetails={project} />;
        })}
      </div>
    </div>
  );
};

export default LandingPage;
