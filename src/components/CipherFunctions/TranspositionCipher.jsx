import { Button, Col, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";

function TranspositionCipher() {
  const [message, setMessage] = useState("");
  const [key, setKey] = useState("");
  const [isKeyError, setIsKeyError] = useState(false);
  const [formattedKey, setFormattedKey] = useState([]);

  const [isEncrypt, setIsEncrypt] = useState(false);
  const [initTable, setInitTable] = useState([]);
  const [swappingTable, setSwappingTable] = useState([]);
  const [finalMessage,setFinalMessage] =useState('');

  function handleKeyError(value) {
    let formattedKey = value
      .split(",")
      .map((item) => Number(item))
      .filter((item) => !isNaN(item));
    let sortedKey = [...formattedKey].sort();
    if (
      sortedKey.find((element, index) => index !== element) ||
      formattedKey.length === 0
    ) {
      setIsKeyError(true);
    } else setFormattedKey(formattedKey);
  }

  function setSwappingTableHelper(messageTable, key, type) {
    let result = [];
    let finalMessage=''
    messageTable.forEach((row) => {
      let tempArray = [];
      key.forEach((keyIndex) => {tempArray.push(row[keyIndex]);finalMessage+=row[keyIndex]});
      result.push(tempArray);
    });
    setSwappingTable(result);
    console.log(finalMessage )
    setTimeout(
        () => { setFinalMessage(finalMessage)},
        2000
      );
  }

  function setInitTableHelper(message, formattedKey, type) {
    setSwappingTable([]);
    setFinalMessage('');

    let formattedMessage = message.replace(/\s/g, "");
    if (type === "Encrypt") {
      setIsEncrypt(true);
    } else setIsEncrypt(false);

    let splittingRegex = new RegExp(`.{1,${formattedKey.length}}`, "g");
    let result = formattedMessage.match(splittingRegex);
    if (result[result.length - 1].length !== result[0].length) {
      result[result.length - 1] =
        result[result.length - 1] +
        "x".repeat(result[0].length - result[result.length - 1].length);
    }
    const finalResult = result.map((item) => item.split(""));
    setTimeout(
      () => setSwappingTableHelper(finalResult, formattedKey, type),
      2000
    );
    return finalResult;
  }
  return (
    <>
      <h1>Transposition Cipher</h1>
      <center>
        <section id="TranspositionCipherInput">
          <h3>Message</h3>
          <Row align="middle" justify="center" style={{ margin: 10 }}>
            <Col sm={12} md={6}>
              <TextArea
                rows={3}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                // onFocus={() => setResult("")}
              />
            </Col>
          </Row>
          <h3>Key</h3>
          <Row align="middle" justify="center">
            <Col sm={12} md={6}>
              <Input
                min={1}
                max={26}
                defaultValue={3}
                placeholder={"2,1,3"}
                value={key}
                onChange={(e) => setKey(e.target.value)}
                onFocus={() => setIsKeyError(false)}
                onBlur={() => handleKeyError(key)}
              />
              {isKeyError && (
                <div style={{ color: "red" }}>
                  Invalid key, should be in format `0,2,1,3`
                </div>
              )}
            </Col>
          </Row>

          <Row justify="center" style={{ margin: 15 }}>
            <Button
              type="primary"
              shape="round"
              style={{ marginRight: 10 }}
              onClick={() =>
                setInitTable(
                  setInitTableHelper(message, formattedKey, "Encrypt")
                )
              }
            >
              Encrypt
            </Button>
            <Button
              type="primary"
              shape="round"
              //   onClick={() =>
              //     setResult(encryptDecryptCaesarCipher(message, key, false))
              //   }
            >
              Decrypt
            </Button>
          </Row>
        </section>

        <section id="TranspositionCipherOutput">
          <Row>
            <Col xs={24} md={12}>
              {initTable.length > 0 && (
                <>
                  {isEncrypt ? (
                    <div> Write row by row </div>
                  ) : (
                    <div> Write col by col </div>
                  )}
                  <table>
                    {initTable.map((row, index) => (
                      <tr key={index}>
                        {row.map((item, innerIndex) => (
                          <td
                            key={innerIndex}
                            style={{
                              padding: "5px 10px",
                              border: " 1px solid black",
                              borderCollapse: "collapse",
                            }}
                          >
                            {item}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </table>
                </>
              )}
            </Col>
            <Col xs={24} md={12}>
              {swappingTable.length > 0 && (
                <>
                  <div> Swap columns </div>
                  <table>
                    {swappingTable.map((row, index) => (
                      <tr key={index}>
                        {row.map((item, innerIndex) => (
                          <td
                            key={innerIndex}
                            style={{
                              padding: "5px 10px",
                              border: " 1px solid black",
                              borderCollapse: "collapse",
                            }}
                          >
                            {item}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </table>
                </>
              )}
            </Col>
          </Row>
          {finalMessage.length>0 && (
              <div>
                   {!isEncrypt ? (
                    <div> Read row by row </div>
                  ) : (
                    <div> Read col by col </div>
                  )}
                  Final Message: <span style={{color:'green'}}> {finalMessage} </span>
              </div>
          )}
        </section>
      </center>
    </>
  );
}

export default TranspositionCipher;
