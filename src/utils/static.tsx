import AntDesign from '@/components/svgs/AntDesign';
import Bootstrap from '@/components/svgs/Bootstrap';
import Chart from '@/components/svgs/Chart';
import CSS from '@/components/svgs/CSS';
import DevOps from '@/components/svgs/DevOps';
import English from '@/components/svgs/English';
import Figma from '@/components/svgs/Figma';
import FramerMotion from '@/components/svgs/FramerMotion';
import Git from '@/components/svgs/Git';
import GraphQl from '@/components/svgs/GraphQl';
import Hindi from '@/components/svgs/Hindi';
import HTML from '@/components/svgs/HTML';
import JavaScript from '@/components/svgs/JavaScript';
import MUI from '@/components/svgs/MUI';
import Next from '@/components/svgs/Next';
import Photoshop from '@/components/svgs/Photoshop';
import PremierPro from '@/components/svgs/PremierPro';
import Python from '@/components/svgs/Python';
import ReactJs from '@/components/svgs/ReactJs';
import ReactNative from '@/components/svgs/ReactNative';
import ReactSpring from '@/components/svgs/ReactSpring';
import Redux from '@/components/svgs/Redux';
import RestApi from '@/components/svgs/RestApi';
import Sass from '@/components/svgs/Sass';
import Sketch from '@/components/svgs/Sketch';
import StyledComponent from '@/components/svgs/StyledComponent';
import Tailwind from '@/components/svgs/Tailwind';
import ThreeJs from '@/components/svgs/ThreeJs';
import TypeScript from '@/components/svgs/TypeScript';
import Xd from '@/components/svgs/Xd';
import { navType, skillListObj } from './types';

export const navItems: navType[] = [
  {
    title: 'about me',
    id: 'about-me',
  },
  {
    title: 'skills',
    id: 'skills',
  },
  {
    title: 'portfolio',
    id: 'portfolio',
  },
];

export const skillLists: skillListObj[] = [
  {
    skillTitle: 'using now',
    skillList: [
      { icon: (props) => <HTML {...props} />, title: 'HTML5' },
      { icon: (props) => <CSS {...props} />, title: 'CSS3' },
      { icon: (props) => <Sass {...props} />, title: 'SASS' },
      {
        icon: (props) => <StyledComponent {...props} />,
        title: 'Styled Component',
      },
      { icon: (props) => <Bootstrap {...props} />, title: 'Bootstrap' },
      { icon: (props) => <JavaScript {...props} />, title: 'JavaScript' },
      { icon: (props) => <TypeScript {...props} />, title: 'TypeScript' },
      { icon: (props) => <ReactJs {...props} />, title: 'React.js' },
      { icon: (props) => <Next {...props} />, title: 'Next.js' },
      { icon: (props) => <ReactNative {...props} />, title: 'React Native' },
      { icon: (props) => <Redux {...props} />, title: 'Redux' },
      { icon: (props) => <Tailwind {...props} />, title: 'Tailwind CSS' },
      { icon: (props) => <MUI {...props} />, title: 'Material UI' },
      { icon: (props) => <AntDesign {...props} />, title: 'Ant Design' },
      { icon: (props) => <FramerMotion {...props} />, title: 'Framer Motion' },
      { icon: (props) => <ReactSpring {...props} />, title: 'React Spring' },
      { icon: (props) => <RestApi {...props} />, title: 'RESTful API' },
      { icon: (props) => <GraphQl {...props} />, title: 'GraphQL' },
      { icon: (props) => <Chart {...props} />, title: 'Chart' },
      { icon: (props) => <Git {...props} />, title: 'Git' },
    ],
  },
  {
    skillTitle: 'learning',
    skillList: [
      { icon: (props) => <ThreeJs {...props} />, title: 'Three.js' },
      { icon: (props) => <Python {...props} />, title: 'Python' },
      { icon: (props) => <DevOps {...props} />, title: 'DevOps' },
    ],
  },
  {
    skillTitle: 'other skill',
    skillList: [
      { icon: (props) => <English {...props} />, title: 'English' },
      { icon: (props) => <Hindi {...props} />, title: 'Hindi' },
      { icon: (props) => <Figma {...props} />, title: 'Figma' },
      { icon: (props) => <Xd {...props} />, title: 'XD' },
      { icon: (props) => <Sketch {...props} />, title: 'Sketch' },
      { icon: (props) => <PremierPro {...props} />, title: 'Premier Pro' },
      { icon: (props) => <Photoshop {...props} />, title: 'Photoshop' },
    ],
  },
];

