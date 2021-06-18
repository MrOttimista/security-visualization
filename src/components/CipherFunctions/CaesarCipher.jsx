import { Col, Input, Row, InputNumber, Button } from "antd";
import { useState } from "react";
import encryptDecryptCaesarCipher from "./helpers/encryptDecryptCaesarCipher";

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
                border: "3px solid royalblue",
                fontSize: "16px",
                padding: 5,
                margin: 10,
              }}
            >{`${result}`}</b>
            <h4 style={{ marginTop: 15 }}>Details</h4>
            {message
              .split("")
              .filter((letter) => /[a-z]/gi.test(letter))
              .map((letter, index) => (
                <div key={index}>{`${letter} --> ${formattedResult[index]}`}</div>
              ))}
          </section>
        )}
      </center>
    </>
  );
}

export default CaesarCipher;
