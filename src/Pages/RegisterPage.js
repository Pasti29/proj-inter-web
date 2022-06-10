import React, { useContext, useRef } from 'react'
import { UsersContext } from '../UsersContext'

export default function RegisterPage() {
    const { users, setUsers } = useContext(UsersContext)

    const username = useRef();
    const email = useRef();
    const password1= useRef();
    const password2 = useRef();

  return (
    <div className='authDiv'>
        Nazwa użytkownika: <br />
        <input type="text" name="username" id="username" ref={username} required/> <br />
        E-mail: <br />
        <input type="text" name="e-mail" id="e-mail" ref={email} required/> <br />
        Hasło: <br />
        <input type="password" name="password1" id="password1" ref={password1} required/> <br />
        Powtórz hasło: <br />
        <input type="password" name="password2" id="password2" ref={password2} required/> <br />
        <button type="submit">Zarejestruj się</button>
    </div>
  )
}
