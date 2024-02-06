import { MdContentCopy } from "react-icons/md"
import styles from "./span.module.css"

function Span({ pass, setPass }) {
    const handleClick = () => {
        copyToClipboard()
        setPass('COPYED')

        setTimeout(() => {
            setPass(pass)
        }, 3000)
    }

    function copyToClipboard() {
        window.navigator.clipboard.writeText(pass)
    }

    return (
        <div
            style={{ display: 'flex' }}
        >
            <span className={styles.password_box}>
                {pass}
            </span>
            <MdContentCopy className={styles.button_copy} onClick={handleClick} />
        </div>
    )
}

export { Span }