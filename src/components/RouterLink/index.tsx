import { Link } from 'react-router'

interface RouterLinkProps extends React.ComponentProps<typeof Link> {}

export const RouterLink = ({ to: href, ...rest }: RouterLinkProps) => {
  return (
    <Link
      to={href}
      {...rest}
    />
  )
}
