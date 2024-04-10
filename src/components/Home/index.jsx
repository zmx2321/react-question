/**
 * 此页面开始笔试题部分
 */

import React from "react";
import "./home.css";

// import { get1688Data } from '../../api/common'
import axios from "axios";

const Home = () => {
  // 选中高亮逻辑
  const getData = () => {
    // console.log("123")

    /* get1688Data().then(res => {
      console.log('123', res)
    }) */

    axios.get('https://systemjs.1688.com/krump/schema/1352.json')
      .then(function (res) {
        console.log(111, res.data)


      })
      .catch(function (error) {
        // console.error(error);
      });
  };
  getData()

  return (
    <div className="home_wrap">
      <h1>1688 进货红包</h1>
    </div>
  );
};
export default Home;


/* import React from "react";

import { get1688Data } from '@/api/common'

const Home = ()=> {

} */

/* class App extends React.Component {

  render() {
    return <div>首页的页面</div>;
  }
}
export default App; */
