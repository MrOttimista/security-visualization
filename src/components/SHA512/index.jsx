import { Col, Input, Row, InputNumber, Button } from "antd";
import { useState } from "react";
import {
  ArrowRightOutlined 
} from '@ant-design/icons';


import sha512 from "./helpers/sha512";
import './ciphers.css'

const { TextArea } = Input;

function SHA512() {
  const [message, setMessage] = useState("");
  const [key, setKey] = useState(3);
  const [result, setResult] = useState("");

  const formattedResult = result
    .split("")
    .filter((letter) => /[a-z]/gi.test(letter));

  return (
    <><br/>
      <h1>SHA512 Encryption</h1>
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

          <Row justify="center" style={{ margin: 15 }}>
            <Button
              type="primary"
              shape="round"
              style={{ marginRight: 10 }}
              onClick={() =>
                setResult(sha512.hash(message, key))
              }
            >
              Encrypt
            </Button>
            
          </Row>
        </section>
        {result.length > 0 && (
          <section id="CaesarCipherOutput">
            <h2>Result</h2>
            <b
              style={{
                border: "3px solid royalblue",
                fontSize: "16px",
                padding: 5,
                margin: 10,
                color: "green",
              }}
            >{`${result}`}</b>
            
          </section>
        )}
      </center>
     
      
    </>
  );
}

export default SHA512;