import React, { useState } from 'react'
import './style.css'

export const ColorGenerator: React.FC = () => {
    const [hex, setHex] = useState<string>("#ffffff");

    const randomHex = () => {
        const randomhex = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setHex(randomhex);
    }

    const copyHexToClipboard = () => {
        navigator.clipboard.writeText(hex);
    }
    
    return (
        <div className='color-generator-container' style={{ backgroundColor: hex }}>
            <div className="hex-container">
                <p>{hex}</p>
            </div>
            <div className="btn-container">
                <button className="btn-color" onClick={randomHex}>Click for New Background</button>
                <button className="btn-copy" onClick={copyHexToClipboard}>Copy the HEX Value</button>
            </div>
        </div>
    )
}


