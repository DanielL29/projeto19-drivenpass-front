import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Logo from "../../components/logo/Logo";
import { changeUser, login } from "../../utils/signUtil";
import { Link, SignWrapper } from "./SignStyle";
import UserContext from '../../contexts/UserContext'

export default function SignIn() {
    const [user, setUser] = useState({ email: '', password: '' })
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { setCurrentUser } = useContext(UserContext)

    return (
        <SignWrapper onSubmit={e => login(e, user, setLoading, navigate, setCurrentUser)}>
            <Logo />
            <Input id="email" label="Usuário (e-mail)" name="email" disabled={loading}
                onChange={e => changeUser(e, user, setUser)} />
            <Input id="password" label="Senha" name="password" disabled={loading}
                type="password" showPassword={showPassword} setShowPassword={setShowPassword}
                onChange={e => changeUser(e, user, setUser)} />
            <Button disabled={loading} text="Acessar" bgColor="#9BFBB0" />
            <div className="line"></div>
            <Link to="/sign-up">
                <p>Primeiro acesso? Crie sua conta!</p>
            </Link>
        </SignWrapper>
    )
}