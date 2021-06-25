import { Tabs } from "antd";
import CaesarCipher from "./CaesarCipher";
import TranspositionCipher from "./TranspositionCipher";

const { TabPane } = Tabs;
function CipherFunctions() {
  return (
    <div style={{padding:5,height:'90vh'}}>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Caesar" key="1">
        <CaesarCipher />
      </TabPane>
      <TabPane tab="Transposition" key="2">
        <TranspositionCipher />
      </TabPane>
      {/* ToDo */}
      {/* <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane> */}
    </Tabs>
    </div>
  );
}

export default CipherFunctions;
