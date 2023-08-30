import { nanoid } from 'nanoid'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BiLogoGmail } from 'react-icons/bi'

export const socials: Social[] = [
  {
    id: nanoid(),
    icon: <AiFillGithub />,
    url: 'https://github.com/Wiseard',
  },
  {
    id: nanoid(),
    icon: <AiFillLinkedin />,
    url: 'http://fr.linkedin.com/pub/florent-baleinier/9b/570/88b/',
  },
  {
    id: nanoid(),
    icon: <BiLogoGmail />,
    url: 'mailto:florentbaleinier@gmail.com',
  },
]

export const links: Link[] = [
  {
    name: 'work',
    url: '/work',
  },
  {
    name: 'about',
    url: '/about',
  },
  {
    name: 'contact',
    url: '/contact',
  },
]

export const projects: Project[] = [
  {
    title: 'Trendy Shop',
    url: 'https://trendy-eshop.netlify.app',
    git: 'https://github.com/Wiseard/trendy-shop.git',
    description: "women's clothing store",
    project_number: '01',
  },
  {
    title: 'Comfy Sloth',
    url: 'https://react-course-comfy-sloth-store.netlify.app',
    git: 'https://github.com/Wiseard/react-project-ecommerce.git',
    description: 'home furniture store',
    project_number: '02',
  },
  {
    title: 'Emerald Blues',
    url: 'https://emerald-fine-dining.netlify.app',
    git: 'https://github.com/Wiseard/emerald-blues-restaurant.git',
    description: 'restaurant showcase',
    project_number: '03',
  },
]
