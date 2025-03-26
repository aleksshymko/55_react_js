import './styles.css'

interface Input {
    placeholder: string,
    name: string
}

function Input ({placeholder, name}: Input) {
    return <input className="input" placeholder={placeholder} name={name}/>
}

export default Input