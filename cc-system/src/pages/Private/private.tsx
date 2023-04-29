import { useContext } from 'react'
import { AuthContext } from '../../Auth/authContext'

const Private = () => {

    const auth = useContext(AuthContext)

    return (
        <div>
            Olá {auth.user?.name}, tudo bem?
        </div>
    )
}

export default Private
