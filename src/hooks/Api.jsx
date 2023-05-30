import axios from "axios";
import { useEffect, useState } from "react";

export default function Api(props) {
  function ChamaApi(){
  const url ="https://economia.awesomeapi.com.br/" + props.moeda + "/1?format=json";
  axios.get(url).then((resp) => {

    let bid = (resp.data[0].bid*1).toFixed(2);
    setBid(bid);
    let date = resp.data[0].create_date;
    setDate(date);
    let low = (resp.data[0].low*1).toFixed(2);
    setLow(low);
    let high = (resp.data[0].high*1).toFixed(2);
    setHigh(high);
  });
}
function ApareceCotacao(){
  ChamaApi()
}

// useEffect(() => {
//   ApareceCotacao()
//   setInterval(() =>{
//     ApareceCotacao()
//   }, 1500)
// })
ApareceCotacao()
  const [date, setDate] = useState([]);
  const [bid, setBid] = useState([]);
  const [high, setHigh] = useState([]);
  const [low, setLow] = useState([]);

  return (
    <div>
      <hr />
      <div className="px-12 py-12">
      <span>{props.titulo} {bid}</span>
      <p>{date}</p>
      <p>Valor mais alto: {high}</p>
      <p>Valor mais baixo: {low}</p>
      </div>
      <hr />

    </div>
  );
}
