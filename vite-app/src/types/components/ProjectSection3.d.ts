import { Project } from '../api';

declare module 'ProjectSection3' {
  import { FC } from 'react';
  
  interface ProjectSection3Props {
    hclass?: string;
  }

  const ProjectSection3: FC<ProjectSection3Props>;
  
  export default ProjectSection3;
}
