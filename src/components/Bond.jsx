import { Link } from "react-router-dom"

const Bond = ({ children, href, ...rest }) => {
  return (
    <Link to={href} {...rest} className="link-reset">
      {children}
    </Link>
  )
}

export default Bond
