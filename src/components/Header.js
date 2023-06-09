import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'close' : 'add'}
          onClick={onAdd}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'falg-gui',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyle = {
//   color:'purple', backgroundColor: 'gray'
// }

export default Header
