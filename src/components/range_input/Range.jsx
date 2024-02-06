import styles from "./range.module.css"

function Range({ passwordLength, setPasswordLength }) {
    const handleInputChange = (event) => {
        const newValue = parseInt(event.target.value)
        setPasswordLength(newValue)
    }

    return (
        <div>
            <input className={styles.range_box} type="range" min="6" max="16" onChange={handleInputChange} />
            <span className={styles.span_password_length}>{passwordLength}</span>
        </div>
    )
}

export { Range }