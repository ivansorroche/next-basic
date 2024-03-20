import React, { useState } from 'react'
import styles from './styles.module.scss'

export default function LoginPage() {
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

   

   function register() {
    if (name.length === 0 || userName.length === 0 || password.length === 0 || confirmPassword.length === 0) {
        alert('Campos obrigatorios não preenchidos')
        return

    }
    if (password != confirmPassword) {
        alert('As senhas não são iguais')
        return
    }
    const payload = {name, userName, password}
    console.log(payload)

   }

    return (
        <div className={styles.login}>
            <header>
                <h2>Cadastro de usuário</h2>
            </header>
            <main>
                <div className={styles.inputPanel}>
                    <span>Nome Completo: </span>
                    <input type="text" onChange={event => setName(event.target.value)} />
                </div>

                <div className={styles.inputPanel}>
                    <span>Nome do usuário: </span>
                    <input type="text" onChange={event => setUserName(event.target.value)} />
                </div>

                <div className={styles.inputPanel}>
                    <span>Senha: </span>
                    <input type="password" onChange={event => setPassword(event.target.value)} />
                </div>
                <div className={styles.inputPanel}>
                    <span>Confirmar Senha: </span>
                    <input type="password" onChange={event => setConfirmPassword(event.target.value)} />
                </div>
            </main>

            <footer>
                <button onClick={register}>Cadastrar usuario</button>
            </footer>
        </div>
    )

}