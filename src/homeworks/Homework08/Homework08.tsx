import { ChangeEvent, useState } from "react"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import './styles.css'

function Homework08 () {
    const [password, setPassword] = useState<string>('');
    const [isShowPassword, setShowPassword] = useState<boolean>(false);

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const showPasswordHandler= () => {
        setShowPassword(true)
    }
    const hidePassword = () => {
        setShowPassword(false)
    }    

    return (
        <div className="password-wrap">
            <h2>Change password</h2>
            <Input 
            name="password" 
            label="Password"
            id="password_id"
            placeholder="Enter your password" 
            type="password"
            onChange={onChangePassword}
            value={password}
            />
            {isShowPassword &&
            <div className="result-container">
                Your password: {password}
            </div>}
            <Button name="SHOW PASSWORD" onClick={showPasswordHandler}/>
            <Button name="HIDE PASSWORD" onClick={hidePassword}/>
        </div>
    )
}

export default Homework08