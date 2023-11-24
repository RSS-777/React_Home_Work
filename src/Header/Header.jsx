import React, { useContext } from "react";
import { UserContext } from '../contexts/UserGetContext';
import './Header.css';

const Header = () => {
    const { user, login, setUserName, setUserPassword } = useContext(UserContext)

    return (
        <header>
            <form>
                <div className="block-input-name">
                    <label>User Name:
                        <input type="text"
                            onChange={(event) => { setUserName(event.target.value) }}
                        />
                    </label>
                </div>
                <div className="block-input-password">
                    <label>User Password:
                        <input type="password"
                            onChange={(event) => { setUserPassword(event.target.value) }}
                        />
                    </label>
                </div>
            </form>
            {!user?.username ? <button className="btn-login" onClick={login}>Login</button> :
                <div>
                    <p className="p-welcom">Welcome, {user.username}!</p>
                </div>
            }
            <p>for the test( name : 'kminchelle' ; pass : '0lelplR')</p>
        </header>
    )
}
export default Header;