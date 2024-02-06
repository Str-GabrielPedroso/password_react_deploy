import styles from "./checkbox.module.css"

function Checkbox({ uppercase, setUppercase, numbers, setNumbers, special, setSpecial }) {
    const handleUppercaseChange = (event) => {
        setUppercase(event.target.checked)
    }

    const handleNumbersChange = (event) => {
        setNumbers(event.target.checked)
    }

    const handleSpecialChange = (event) => {
        setSpecial(event.target.checked)
    }

    return (
        <div className={styles.checkbox}>
            <div>
                <label htmlFor="uppercase">Include Uppercase Letters</label>
                <input type="checkbox" checked={uppercase} onChange={handleUppercaseChange} />
            </div>
            <div>
                <label htmlFor="numbers">Include Numbers</label>
                <input type="checkbox" checked={numbers} onChange={handleNumbersChange} />
            </div>
            <div>
                <label htmlFor="special">Include Symbols</label>
                <input type="checkbox" checked={special} onChange={handleSpecialChange} />
            </div>
        </div>
    )
}

export { Checkbox }