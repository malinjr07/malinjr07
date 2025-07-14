import { ApiData } from '../types/api';
import projects from './Project';
import resume from './Resume';
import services from './Services';
import blogs from './blogs';

const getData = (): ApiData => ({
  projects,
  resume,
  services,
  blogs,
});

export default getData;
