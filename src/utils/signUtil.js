import * as userService from "../services/userService"

export async function login(e, user, setLoading, navigate, setCurrentUser) {
    e.preventDefault()

    setLoading(true)

    const { status, data } = await userService.signIn(user)

    setLoading(false)

    if (status === 200) {
        setCurrentUser(data)
        localStorage.setItem('userLocal', JSON.stringify(data))

        navigate('/')
    }
}

export async function register(e, user, setLoading, navigate) {
    e.preventDefault()

    setLoading(true)

    const status = await userService.signUp(user)

    setLoading(false)

    if (status === 201) {
        navigate('/sign-in')
    }
}

export function changeUser(e, user, setUser) {
    return setUser({ ...user, [e.target.name]: e.target.value })
}