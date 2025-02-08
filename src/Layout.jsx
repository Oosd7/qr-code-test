import {Routes,Route} from 'react-router-dom';
import { Navigation } from './Components/Navigation/Navigation';  
import { QrCodeGenerator } from "./Components/Generate/QrCodeGenerator";
import { QrCodeScanner} from "./Components/Scan/QrCodeScanner";
import { GenerateHistory } from "./Components/GenerateHistory";
import { ScanHistory } from "./Components/ScanHistory";

export const Layout = () => {
    return (
        <div>
            <Navigation/>

            <Routes>
                <Route path='/generate' element={<QrCodeGenerator />}/>
                <Route path='/scan' element={<QrCodeScanner />}/>
                <Route path='/scanHistory' element={<ScanHistory/>}/>
                <Route path='/generateHistory' element={<GenerateHistory/>}/>
            </Routes>
        </div>
    )
}