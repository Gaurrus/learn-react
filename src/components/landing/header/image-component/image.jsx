import Logo from '../export-logo'
import style from './imaje.module.css'

export const Image = () => (
    <img className={style.image} src={Logo} alt="logo"/>
);
