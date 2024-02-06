import { useState } from "react"
import { Span } from "./span_password/Span"
import { Range } from "./range_input/Range"
import { Checkbox } from "./checkbox_input/Checkbox"
import styles from "./styles/global.module.css"

function Card() {
    const [pass, setPass] = useState('PASSWORD')
    const [passwordLength, setPasswordLength] = useState(16)
    const [uppercase, setUppercase] = useState(false)
    const [numbers, setNumbers] = useState(false)
    const [special, setSpecial] = useState(false)

    function generate() {
        let chars = ''
        const charLowercase = 'abcdefghijklmnopqrstuvwxyz'
        const charUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const charNumbers = '0123456789'
        const charSpecial = '^!$%&|[]{}():;.,@+-*<>#'

        chars += charLowercase;
        chars += uppercase ? charUppercase : ''
        chars += numbers ? charNumbers : ''
        chars += special ? charSpecial : ''

        let newPassword = ''
        for (let i = 0; i < passwordLength; i++) {
            const rand = Math.floor(Math.random() * chars.length)
            newPassword += chars.substring(rand, rand + 1)
        }

        setPass(newPassword)
    }

    return (
        <div className={styles.back}>
            <div className={styles.container}>
                <Span pass={pass} setPass={setPass} />
                <Range passwordLength={passwordLength} setPasswordLength={setPasswordLength} />
                <Checkbox uppercase={uppercase} setUppercase={setUppercase} numbers={numbers} setNumbers={setNumbers} special={special} setSpecial={setSpecial} />
                <button className={styles.button_generate} onClick={generate}>Generate Password</button>
            </div>
        </div>
    )
}

export { Card }