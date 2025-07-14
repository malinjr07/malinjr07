import { Project } from '../api';

declare module 'ProjectSection2' {
  import { FC } from 'react';
  
  interface ProjectSection2Props {
    hclass?: string;
  }

  const ProjectSection2: FC<ProjectSection2Props>;
  
  export default ProjectSection2;
}
