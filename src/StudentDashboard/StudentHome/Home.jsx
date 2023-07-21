import React from "react";
import Header from "../../SmartQuiz/components/Header";
import Card from "./Card/Card";
import Card2 from "./Card/Card2";
import SliderStudent from "./Card/Slider";
import Chart from "./Graph/Chart";

function Home() {
  return (
    <div>
      <Header />
      <div>
        <Card />
      </div>
      <div style={{ display: "flex",marginTop:"20px" }}>
        <div style={{width:"55%"}}>
        <Card2 />
        </div>
        <div>
        <Chart />
      </div>
      </div>
      <div>
           <SliderStudent/>
      </div>
    </div>
  );
}

export default Home;
