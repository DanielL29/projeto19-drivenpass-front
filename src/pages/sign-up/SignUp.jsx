import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Logo from "../../components/logo/Logo";
import { changeUser, register } from "../../utils/signUtil";
import { SignWrapper } from "../sign-in/SignStyle";

export default function SignUp() {
    const [user, setUser] = useState({ email: '', password: '' })
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    return (
        <SignWrapper onSubmit={e => register(e, user, setLoading, navigate)}>
            <Logo />
            <Input id="email" label="Usuário (e-mail)" name="email" disabled={loading}
                onChange={e => changeUser(e, user, setUser)} />
            <Input id="password" label="Senha" name="password" disabled={loading}
                type="password" showPassword={showPassword} setShowPassword={setShowPassword}
                onChange={e => changeUser(e, user, setUser)} />
            <Button disabled={loading} text="Criar" bgColor="#9BFBB0" />
            <Button disabled={loading} text="< Voltar" bgColor="#FB9B9B" onClick={() => navigate('/sign-in')} />
        </SignWrapper>
    )
}