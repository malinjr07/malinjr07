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
import { skillListObj, skillObj } from '../types';

export const sass: skillObj = {
  icon: (props) => <Sass {...props} />,
  title: 'SASS',
};

export const styledComponent: skillObj = {
  icon: (props) => <StyledComponent {...props} />,
  title: 'Styled Component',
};

export const tailwindCss: skillObj = {
  icon: (props) => <Tailwind {...props} />,
  title: 'Tailwind CSS',
};

export const typeScript: skillObj = {
  icon: (props) => <TypeScript {...props} />,
  title: 'TypeScript',
};

export const reactJs: skillObj = {
  icon: (props) => <ReactJs {...props} />,
  title: 'React.js',
};

export const nextJs: skillObj = {
  icon: (props) => <Next {...props} />,
  title: 'Next.js',
};

export const reactNative: skillObj = {
  icon: (props) => <ReactNative {...props} />,
  title: 'React Native',
};

export const redux: skillObj = {
  icon: (props) => <Redux {...props} />,
  title: 'Redux',
};

export const mui: skillObj = {
  icon: (props) => <MUI {...props} />,
  title: 'Material UI',
};

export const antD: skillObj = {
  icon: (props) => <AntDesign {...props} />,
  title: 'Ant Design',
};

export const framerMotion: skillObj = {
  icon: (props) => <FramerMotion {...props} />,
  title: 'Framer Motion',
};

export const reactSpring: skillObj = {
  icon: (props) => <ReactSpring {...props} />,
  title: 'React Spring',
};

export const restfulApi: skillObj = {
  icon: (props) => <RestApi {...props} />,
  title: 'RESTful API',
};

export const graphQl: skillObj = {
  icon: (props) => <GraphQl {...props} />,
  title: 'GraphQL',
};

export const chart: skillObj = {
  icon: (props) => <Chart {...props} />,
  title: 'Chart',
};

export const git: skillObj = {
  icon: (props) => <Git {...props} />,
  title: 'Git',
};

export const figma: skillObj = {
  icon: (props) => <Figma {...props} />,
  title: 'Figma',
};

export const xd: skillObj = { icon: (props) => <Xd {...props} />, title: 'XD' };

export const sketch: skillObj = {
  icon: (props) => <Sketch {...props} />,
  title: 'Sketch',
};

export const skillLists: skillListObj[] = [
  {
    skillTitle: 'using now',
    skillList: [
      { icon: (props) => <HTML {...props} />, title: 'HTML5' },
      { icon: (props) => <CSS {...props} />, title: 'CSS3' },
      sass,
      styledComponent,
      { icon: (props) => <Bootstrap {...props} />, title: 'Bootstrap' },
      { icon: (props) => <JavaScript {...props} />, title: 'JavaScript' },
      typeScript,
      reactJs,
      nextJs,
      reactNative,
      redux,
      tailwindCss,
      mui,
      antD,
      framerMotion,
      reactSpring,
      restfulApi,
      graphQl,
      chart,
      git,
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
      figma,
      xd,
      sketch,
      { icon: (props) => <PremierPro {...props} />, title: 'Premier Pro' },
      { icon: (props) => <Photoshop {...props} />, title: 'Photoshop' },
    ],
  },
];

