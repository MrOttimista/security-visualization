import { Tabs } from "antd";
import CaesarCipher from "./CaesarCipher";

const { TabPane } = Tabs;
function CipherFunctions() {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="CAESAR CIPHER" key="1">
        <CaesarCipher />
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
}

export default CipherFunctions;
