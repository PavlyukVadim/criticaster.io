import { FaGithub, FaYoutube } from 'react-icons/fa'

const config = {
  navLinks: [
    {
      title: 'Posts',
      link: '/posts',
    },
    {
      title: 'JS Dictionary',
      link: '/js-dictionary',
    },
    // {
    //   title: 'Contacts',
    //   link: '/contacts',
    // },
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
    'js-core': {
      title: 'Js Core',
      position: 1,
      reversion: true,
    },
    'data-types-in-js': {
      title: 'Data types in Js',
      position: 2,
      reversion: true,
    },
    'algorithms-in-js': {
      title: 'Algorithms in Js',
      position: 3,
      reversion: true,
    },
    'optimizations': {
      title: 'Optimizations in Js',
      position: 4,
      reversion: true,
    },
    'canvas-basics-guide': {
      title: ' Canvas Basics Guide',
      position: 5,
      reversion: true,
    },
    'games-in-js': {
      title: 'Games in Js',
      position: 6,
      reversion: true,
    },
  }
}

export default config
