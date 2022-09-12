import logo from '../../assets/images/logo.png'
import { LogoWrapper } from './LogoStyle'

export default function Logo() {
    return (
        <LogoWrapper>
            <img src={logo} alt="logo" />
            <h1>DrivenPass</h1>
        </LogoWrapper>
    )
}