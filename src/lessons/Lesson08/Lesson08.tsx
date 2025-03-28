import { ChangeEvent, useState } from 'react';
import './styles.css';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
import AvatarImage from '../../assets/avatar.jpg';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

function Lesson08 () {
   const [message, setMessage] = useState<string>('');
   const [showMessage, setShowMessage] = useState<boolean>(false)

   const onChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setMessage(event.target.value)
   }
   const showMessageHandler = () => {
    setShowMessage(!showMessage)
   }

    return (
        <div className="lesson08-container">
            <Input name='example'/>
            <Input name='message' 
            label='Message' 
            id='message_id' 
            placeholder='Enter your message'
            value={message}
            onChange={onChangeMessage}/>
            <Button 
            name='Show message' 
            onClick={showMessageHandler}/>
            {/* {showMessage ? <div>{message}</div> : null} */}
            {showMessage && <div>{message}</div>}
            <EmployeeCard 
            name='Mary Smith' 
            position='Software Engineer' 
            department='IT'
            img={AvatarImage}
            >
                <h3>The best employee</h3>
                <Button name='Show personal page'/>
            </EmployeeCard>
        </div>
    )
}

export default Lesson08