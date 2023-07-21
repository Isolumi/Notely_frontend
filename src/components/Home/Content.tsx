import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Content() {
    return (
      <Tabs defaultActiveKey="home" className="ml-2 custom-tab">
        <Tab eventKey="home" title="Home" className="">
          <p>Home tab content</p>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <p>Profile tab content</p>
        </Tab>
      </Tabs>
    );
  }
  
  export default Content;
  
