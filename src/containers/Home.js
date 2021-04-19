import React from "react";
import Activity from '../components/Activity'

function Home() {
  return (
    <div className="homepage">
      <div className="card grid">
        {/* card 1 */}
        <div className="card1 flex col">
          <div className="arya circle">
            <span>AFYA</span>
          </div>
          <h3>143.00</h3>
          <span>Balance</span>
        </div>
        {/* card 2 */}
        <div className="card2 flex col">
          <div className="zar circle">
            <span>ZAR</span>
          </div>
          <h3>R14.00</h3>
          <span>Equivalent</span>
        </div>
      </div>
      {/* currency selector */}
      <div className="currency_selector">
        <p>Select Currency :</p>
      </div>

      {/* currency select */}
      <div className="select">
        <select>
          <option>AFYA</option>
          <option>NGN</option>
          <option>USD</option>
          <option>ASD</option>
          <option>EUR</option>
        </select>
        <input type="number" step='0.1'></input>
      </div>

      <div className="ctas">
        <button>SEND</button>
        <button>RECEIVE</button>
      </div>
      <Activity/>
    </div>
  );
}

export default Home;
