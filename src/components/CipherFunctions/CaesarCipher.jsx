import { Col, Input, Row, InputNumber, Button } from "antd";
import { useState } from "react";
import {
  ArrowRightOutlined 
} from '@ant-design/icons';


import encryptDecryptCaesarCipher from "./helpers/encryptDecryptCaesarCipher";
import './cipher.css'

const { TextArea } = Input;

function CaesarCipher() {
  const [message, setMessage] = useState("");
  const [key, setKey] = useState(3);
  const [result, setResult] = useState("");

  const formattedResult = result
    .split("")
    .filter((letter) => /[a-z]/gi.test(letter));

  return (
    <>
      <h1>Caesar Cipher</h1>
      <center>
        <section id="CaesarCipherInput">
          <h3>Message</h3>
          <Row align="middle" justify="center" style={{ margin: 10 }}>
            <Col sm={12} md={6}>
              <TextArea
                rows={3}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setResult("")}
              />
            </Col>
          </Row>
          <h3>Key</h3>
          <Row align="middle" justify="center">
            <Col sm={12} md={6}>
              <InputNumber
                min={1}
                max={26}
                defaultValue={3}
                value={key}
                onChange={(e) => setKey(e)}
                onFocus={() => setResult("")}
              />
            </Col>
          </Row>

          <Row justify="center" style={{ margin: 15 }}>
            <Button
              type="primary"
              shape="round"
              style={{ marginRight: 10 }}
              onClick={() =>
                setResult(encryptDecryptCaesarCipher(message, key))
              }
            >
              Encrypt
            </Button>
            <Button
              type="primary"
              shape="round"
              onClick={() =>
                setResult(encryptDecryptCaesarCipher(message, key, false))
              }
            >
              Decrypt
            </Button>
          </Row>
        </section>
        {result.length > 0 && (
          <section id="CaesarCipherOutput">
            <h2>Result</h2>
            <b
              style={{
                border: "2px solid royalblue",
                fontSize: "16px",
                padding: `5px 15px`,
                margin: 10,
                color: "green",
              }}
            >{`${result}`}</b>
            <h4 style={{ marginTop: 20, fontSize:17}}>Details</h4>
            {message.length &&  `Each letter is shifted by ${key}`}
            {message
              .split("")
              .filter((letter) => /[a-z]/gi.test(letter))
              .map((letter, index) => (
                <div key={index} className='listItem'>
                  <span style={{ padding: "5px", fontSize: "17px" }}>
                    {letter}
                  </span>
                  <ArrowRightOutlined style={{color:'blue',padding:'8px'}}/>
                  <span
                    style={{ padding: "5px", color: "green", fontSize: "17px" }}
                  >
                    {formattedResult[index]}
                  </span>
                </div>
              ))}
          </section>
        )}
      </center>
    </>
  );
}

export default CaesarCipher;
