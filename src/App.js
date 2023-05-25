import { useEffect, useState } from "react"
import './App.css';
import axios from "axios"
import AppIcon from "./AppIcon";
function App() {

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [isClose, setIsClose] = useState(false);

  const handleClearBtn = () => {
    setDay("");
    setMonth("");
    setYear("");
  }

  const handleCheckBtn = () => {
    let data = {
      "day": day,
      "month": month,
      "year": year
    }
    let config = {
      headers: {
        'content-type': 'application/json',
        "auth": "hello"
      }
    }
      axios.post("http://localhost:8080/api/get", {
        "day": day,
        "month": month,
        "year": year
      })
      .then((response) => {
        console.log(JSON.stringify(response));
        alert(response.data);
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  }
  const handleCloseBtn = () => {
    if (window.confirm("are you sure that you want to close ?")) {
      setIsClose(true);
    }
  }

  const handlOpenBtn = () => {

      setIsClose(false);
    
  }

  return (
    <div className="App">
      {!isClose ? 
      (<div className="DateTimeChecher">
      <div className="logo">
        <img src="https://www.thebrandlaureate.com/wp-content/uploads/2019/05/LOGO-FPT-University.jpg" />
        <button className="closeTab" onClick={() => handleCloseBtn()}><h1>X</h1></button>
      </div>
      <div className="tittle">
        <h1>Date Time Checker</h1>
      </div>
      <div className="inputForm">
        <div className="inputBox">
          <label >Day</label>
          <input value={day} id="inputDay" onChange={(event) => setDay(event.target.value)} />
        </div>
        <div className="inputBox">
          <label >Month</label>
          <input value={month} id="inputMonth" onChange={(event) => setMonth(event.target.value)} />
        </div>
        <div className="inputBox">
          <label >Year</label>
          <input value={year} id="inputYear" onChange={(event) => setYear(event.target.value)} />
        </div>
      </div>
      <div className="btnAction">
        <button onClick={() => handleClearBtn()}>clear</button>
        <button id="checkBtn" onClick={() => handleCheckBtn()}>check</button>
      </div>
    </div>) :
      (<div>
        <AppIcon
          handleClose={handlOpenBtn}
        />
      </div>)
    }
    </div>
  );
}

export default App;
