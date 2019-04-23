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
    'canvas-basics-guide': {
      title: ' Canvas Basics Guide',
      position: 1,
      reversion: true,
    },
    'algorithms-in-js': {
      title: 'Algorithms in JS',
      position: 2,
      reversion: true,
    },
    'games-in-js': {
      title: 'Games in JS',
      position: 3,
      reversion: true,
    },
  }
}

export default config
