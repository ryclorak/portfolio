import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import droneSim from '../assets/DroneSimulatorHoops.png'
import spiderBot from '../assets/spiderRobot.jpg'
import jShelfV4 from '../assets/jShelfV4.png'

const PROJECTS = [
  {
    id: 1,
    title: 'Drone Simulator',
    description: 'Made using Unity3d, for a drone piloting course at ARC',
    link: 'https://www.faa.gov/uas/commercial_operators/',
    image: droneSim
  },
  {
    id: 2,
    title: 'Embedded Systems',
    description: 'I\'ve made numerous projects using Arduino and Raspberry Pi',
    link: 'https://github.com/ryclorak/Arduino',
    image: spiderBot
  },
  {
    id: 3,
    title: '3D Designs/Prints',
    description: 'I enjoy 3d designing and printing! Check out my thingiverse.',
    link: 'https://www.thingiverse.com/ryclorak/designs',
    image: jShelfV4
  }
];

export default PROJECTS;
