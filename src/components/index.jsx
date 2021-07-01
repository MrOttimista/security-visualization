import { FileSearchOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { useHistory } from "react-router";

function Home() {
    const history=useHistory()
  return (
    <>
      <div style={{ background: "#050c27", color: "white", paddingTop: "20px" }}>
        <p style={{ color: "#2780d7", fontSize: "20px" }}>Hello There</p>
        <h1 style={{ color: "white", fontSize: "30px" }}>
          <FileSearchOutlined /> Security Visualization
        </h1>
        <p style={{ height: "110px",padding:50,fontSize:'20px' }}>
            Visualizing Tool For Awesome Security Algorithms
        </p>
        <svg
          style={{ display: "block" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f0f2f5"
            fill-opacity="1"
            d="M0,160L48,154.7C96,149,192,139,288,144C384,149,480,171,576,165.3C672,160,768,128,864,138.7C960,149,1056,203,1152,197.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <Row justify="space-around">
      <Col span={4} className='card' onClick={()=>history.push('/BlockChain')}>BlockChain</Col>
      <Col span={4} className='card' onClick={()=>history.push('/Cipher')}>Classic Cipher</Col>
      <Col span={4} className='card' onClick={()=>history.push('/RSA')}>RSA</Col>

    </Row>
    <Row style={{marginTop:20}}>
      <Col span={4} className='card' onClick={()=>history.push('/ELGAMAL')}>ELGAMAL</Col>
      <Col span={4} className='card' onClick={()=>history.push('/SHA512')}>SHA512</Col>
    </Row>
    </>
  );
}

export default Home;
