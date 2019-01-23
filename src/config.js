import { FaGithub, FaYoutube } from 'react-icons/fa'

const config = {
  navLinks: [
    {
      title: 'Posts',
      link: '/posts',
    },
    {
      title: 'Contact',
      link: '/contact',
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
};

export default config
