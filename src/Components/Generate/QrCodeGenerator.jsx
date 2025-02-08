import {useState} from 'react';
import {QRCodeSVG} from 'qrcode.react';

import { GENERATE_DATA } from '../../constants';

import st from './qrCodeGenerator.module.css';

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('hello');
    const [result, setResult] = useState('');

    const onClickHandler = () => {
         const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
                localStorage.setItem(
                    GENERATE_DATA, 
                    JSON.stringify([...prevData, value]))
        setResult(value);
        setValue('');
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    }
    console.log('result:',result);
    return (
        <div className={st.container}>
            {result !== '' 
            ? <div className={st.qrWrapper}>
                <QRCodeSVG value={result} size={200}/>
            </div>  
            : null}
            
            <input 
            type="text" 
            value={value}
            placeholder='Введите текст'
            onChange={onChangeHandler} 
            className={st.input}
            />
            <button type='button' 
            onClick={onClickHandler}
            className={st.button}
            >Сгенерировать QR</button>
        </div>
    )
}