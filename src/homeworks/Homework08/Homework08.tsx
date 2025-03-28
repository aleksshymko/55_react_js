import { ChangeEvent, useState } from "react"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import './styles.css'

function Homework08 () {
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const showPasswordHandler= () => {
        setShowPassword(!showPassword)
    }
    const hidePassword = () => {
        setShowPassword(false)
    }    

    return (
        <div className="password-wrap">
            <h2>Change password</h2>
            <Input 
            name="password_input" 
            label="Password"
            placeholder="Enter your password" 
            type="password"
            onChange={onChangePassword}
            value={password}
            />
            {showPassword &&
            <div>
                Your password: {password}
            </div>}
            <Button name="SHOW PASSWORD" onClick={showPasswordHandler}/>
            <Button name="HIDE PASSWORD" onClick={hidePassword}/>
        </div>
    )
}

export default Homework08