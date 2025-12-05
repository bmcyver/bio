export interface Link {
  title: string
  subtitle?: string
  url: string
  icon?: string
  halfWidth?: boolean
}

export interface SocialButton {
  title: string
  url: string
  icon: string
}

export const profile = {
  name: 'bmcyver',
  bio: 'Under construction... :)',
  location: 'South Korea',
  avatar: 'https://ui-avatars.com/api/?name=bmcyver&background=random&size=256',
  buttons: [
    {
      title: 'Email',
      url: 'mailto:me@bmcyver.dev',
      icon: 'lucide:mail',
    },
    {
      title: 'Discord',
      url: 'http://discord.com/users/967304143981117450',
      icon: 'simple-icons:discord',
    },
  ] as SocialButton[],
  links: [
    {
      title: 'Blog',
      subtitle: 'blog.bmcyver.dev',
      url: 'https://blog.bmcyver.dev',
      icon: 'lucide:book-open',
    },
    {
      title: 'GitHub',
      subtitle: 'github.com/bmcyver',
      url: 'https://github.com/bmcyver',
      icon: 'simple-icons:github',
      halfWidth: true,
    },
    // {
    //   title: 'Portfolio',
    //   subtitle: 'bmcyver.dev',
    //   url: 'https://bmcyver.dev',
    //   icon: 'lucide:briefcase',
    //   halfWidth: true,
    // },
  ] as Link[],
}
