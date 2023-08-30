type Social = {
  id: string
  icon: IconBaseProps
  url: string
}

type Link = {
  name: string
  url: string
}

type Project = {
  title: string
  url: string
  git: string
  description: string
  project_number: string
}

type Container = {
  children: React.ReactNode
  className?: string
}

type Content = {
  children: React.ReactNode
  tags?: string
  transition_delay: number
  duration: number
  className?: string
}

type User = {
  name: string
  email: string
  message: string
}
