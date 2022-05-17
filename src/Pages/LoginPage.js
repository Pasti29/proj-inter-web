import React, { useContext, useRef } from 'react'
import { UserContext } from '../UserContext';
import { UsersContext } from '../UsersContext'

export default function LoginPage() {
    const { user, setUser } = useContext(UserContext);
    const { users, setUsers } = useContext(UsersContext);

    const usernameRef = useRef();
    const passwordRef = useRef();

    function login() {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        let foundUser = null;
        users.map(u => {
            if (u.username === username) {
                foundUser = u;
                return;
            }
        })

        console.log(foundUser)

        if (foundUser.password === password) {
            setUser(foundUser);
        }

        usernameRef.current.value = null;
        passwordRef.current.value = null;
        
    }

  return (
    <div className='authDiv'>
        Nazwa użytkownika: <br />
        <input type="text" ref={usernameRef} required/> <br />
        Hasło: <br />
        <input type="password" ref={passwordRef} required/> <br />
        <button type="submit" onClick={login}>Zaloguj się</button>
    </div>
  )
}
