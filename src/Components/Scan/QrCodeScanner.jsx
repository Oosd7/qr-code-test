import {Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import s from './qrCodeScanner.module.css';

import {SCAN_DATA} from '../../constants';

export const QrCodeScanner = () => {
    const [dat,setResult] = useState(null)

    const scanHandler = (result) => {
        setResult(result[0].rawValue)

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        
        localStorage.setItem(
            SCAN_DATA, 
            JSON.stringify([...prevData,result[0].rawValue]))
    };
    const settings = {
        audio: false,
        finder: false,
    }
    const stylesSettings = {
        container: { width: 350,height: 300}
    }
    return(
        <div className={s.container}>
            <Scanner 
            allowMultiple 
            onScan = {scanHandler} 
            components = {settings} 
            styles = {stylesSettings}
            />
            <p className={s.result}>{dat}</p>

            </div>
    )
}