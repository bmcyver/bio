export interface Link {
  title: string
  url: string
  icon?: string
  iconSvg?: string
}

export const profile = {
  name: 'bmcyver',
  bio: 'Under construction... :)',
  avatar: 'https://ui-avatars.com/api/?name=bmcyver&background=random&size=256',
  socials: [
    {
      title: 'Email',
      url: 'mailto:me@bmcyver.dev',
      icon: 'lucide:mail',
    },
    {
      title: 'Discord',
      url: 'http://discord.com/users/967304143981117450',
      icon: 'fa-brands:discord',
    },
  ] as Link[],
  links: [
    {
      title: 'Blog',
      url: 'https://blog.bmcyver.dev',
      icon: 'lucide:library-big',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/bmcyver',
      icon: 'fa-brands:github',
    },
    {
      title: 'Dreamhack',
      url: 'https://dreamhack.io/users/29497',
      iconSvg: '/dreamhack.svg',
    }
  ] as Link[],
}
