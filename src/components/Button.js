import {Link} from 'react-router-dom';
// -----Button Comp-----
const Button = ({text, style, clickBtn, path}) => {
    // const clickFunc = (e) => {
    //     console.log("Hello....");
    //     console.log(e.clientY);
    // }
    return <Link to={path} className="btn" style={style} onClick={clickBtn}>{text}</Link>
}

export default Button
