import { Chart } from "react-google-charts";

import './Nopage.css'


function Producao() {

  const data = [
    ["Tempo", "PPM"],
    ["14:00", 600],
    ["14:05", 615],
    ["14:10", 585],
    ["14:15", 630],
  ];

  const options = {
    title: "Velocidade da máquina (PPM)",
    hAxis: { title: "Tempo", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "70%" },
  };


  return (
    <>
      <div className="no-page">
        <center><h1>Linha CBD11 - Baby Diaper 11</h1></center>

        <Chart
          chartType="AreaChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </>
  )
}

export default Producao
