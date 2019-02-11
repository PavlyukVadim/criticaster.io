import { FaGithub, FaYoutube } from 'react-icons/fa'

const config = {
  navLinks: [
    {
      title: 'Posts',
      link: '/posts',
    },
    {
      title: 'Contacts',
      link: '/contacts',
    },
  ],
  socialLinks: [
    {
      link: 'https://www.youtube.com/channel/UCCJrX72dtaiFq1Dh3tjfE2g',
      icon: FaYoutube,
    },
    {
      link: 'https://github.com/PavlyukVadim',
      icon: FaGithub,
    },
  ],
  categories: {
    'canvas-tutorials-basics': {
      title: 'Canvas Tutorials Basics',
      position: 1,
    },
    'games-in-js': {
      title: 'Games in JS',
      position: 2,
    },
  }
}

export default config
