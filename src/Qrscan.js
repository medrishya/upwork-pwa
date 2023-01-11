import React, { useState } from 'react';
import axios from "axios"
import QrReader from 'react-qr-reader';
import { Button } from 'react-bootstrap';
import './Qrscan.css';

const Qrscan = () => {

	const [result, setResult] = useState(null);
  const [message, setMessage] = useState(null);
  const [facing_mode, set_facing_mode] = useState(false);
	const handleError = (err) => {
		console.err(err)
	}

	const handleScan = (result) => {
		if(result){
      setMessage(null)
			setResult(JSON.parse(result))
		}
	}

  const hit_axios = async () => {
    let payload = {
      title: "ok",
      body: 'not ok'
    }
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', payload);
      setResult(null)
      setMessage(" Sent ");
    }catch(err){

    }finally{

    }
    
  }
	return (
    <div class="container">
      <div class="row">
        <div class="col-md">

        </div>
        <div class="col-md-5">
        <div className={"camera-container"}>
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
            <center>

          <Button  onClick={()=>set_facing_mode(!facing_mode)} variant="primary">
            Switch
          </Button>
            </center>
          </div>
          <div>
            {result && result.accountName ? <div>
              <p>
                Code: {result.accountName}
              </p>
              <div>
              <Button onClick={hit_axios} variant="primary">
                Okay
              </Button>
              </div>
            </div> : <div>
                { result && Object.keys(result).length > 0 && "INVALID QR"}
              </div>}
              {message && <div>{message}</div>}
          </div>

        </div>
        </div>
        <div class="col-md">

        </div>
      </div>
    </div>
		
	);
}

export default Qrscan;
