import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

import './Qrscan.css';

const Qrscan = () => {

	const [result, setResult] = useState('No result');
  const [facing_mode, set_facing_mode] = useState(false);
	const handleError = (err) => {
		console.err(err)
	}

	const handleScan = (result) => {
		if(result){
			setResult(result)
		}
	}

	const previewStyle = {
		height: 240,
		width: 320,
	}

	return (
		<div className={"container"}>
      <div>      
        <QrReader
        delay={500}
        // style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        facingMode={facing_mode? "user": "environment"}
        />
			</div>
      <div>
        <button onClick={()=>set_facing_mode(!facing_mode)}>Flip</button>
      </div>
      <div>
        <div >{result}</div>		
      </div>

		</div>
	);
}

export default Qrscan;
