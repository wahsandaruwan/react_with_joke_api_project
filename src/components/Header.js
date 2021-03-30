import PropTypes from 'prop-types'
import './Header.css'
// ------Header Comp-----
// Using props
const Header = ({title}) => {
    return (
        <header className="hdr">
            <h2 style={{color : 'white', backgroundColor : 'red', padding : '10px 30px'}}>{title}</h2>
            <h1 style={headerH1Style}> Joke Generator</h1>
        </header>
    )
}

// Default props
Header.defaultProps = {
    title: 'Welcome All of You!'
}

// Prop types
Header.propTypes = {
    title: PropTypes.string.isRequired
}

// Header styles
const headerH1Style = {
    color : 'white',
    textTransform : 'uppercase'
}

export default Header
