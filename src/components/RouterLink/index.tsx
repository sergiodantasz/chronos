import { Link } from 'react-router'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RouterLinkProps extends React.ComponentProps<typeof Link> {}

export const RouterLink = ({ to: href, ...rest }: RouterLinkProps) => {
  return (
    <Link
      to={href}
      {...rest}
    />
  )
}
