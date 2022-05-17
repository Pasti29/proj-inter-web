import React, { useContext } from 'react'
import { UsersContext } from '../UsersContext'

export default function RegisterPage() {
    const { users, setUsers } = useContext(UsersContext)

  return (
    <div className='authDiv'>
        Nazwa użytkownika: <br />
        <input type="text" name="username" id="username" required/> <br />
        E-mail: <br />
        <input type="text" name="e-mail" id="e-mail" required/> <br />
        Hasło: <br />
        <input type="password" name="password1" id="password1" required/> <br />
        Powtórz hasło: <br />
        <input type="password" name="password2" id="password2" required/> <br />
        <button type="submit">Zarejestruj się</button>
    </div>
  )
}
