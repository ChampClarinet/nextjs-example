import { useState } from 'react';
import jwt from 'jsonwebtoken';

export default function Home() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('not logged in');
    const [secret, setSecret] = useState('');

    const submitForm = async () => {
        const res = await fetch('/api/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        }).then(r => r.json());
        const { token } = res;
        if (token) {
            const json = jwt.decode(token) as { [key: string]: string };
            setMessage(`Welcome ${json.username} and you are ${json.admin ? '' : 'not'} an admin!`);

            const res = await fetch('/api/secret', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token })
            }).then(r => r.json());
            if(res.secretAdminCode) setSecret(res.secretAdminCode);
            else setSecret('Nothing available');
        } else {
            setMessage('Bug boi')
        }
    }

    return (
        <div>
            <h1>{message}</h1>
            <h1>{`Secret: ${secret}`}</h1>
            <form>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)} />
                <br />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                <br />
                <input type="button" onClick={submitForm} value="login" />
            </form>
        </div>
    );
}