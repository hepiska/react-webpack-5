import React  from "react";
import { render } from "react-dom";
import { Button } from "antd";
import 'antd/dist/antd.less'
import "./index.less"

const App = () => {
  return(
    <div>
      <Button>test</Button>
      <p>test app</p>
    </div>
  )
}

export default render(<App/>,  document.querySelector("#app") )