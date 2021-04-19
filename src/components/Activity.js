import React from "react";
import {ReactComponent as Medicine} from '../assets/icons/medicine.svg'
import '../assets/css/activity.css'
const titles = ["Hiv Test",'Hiv Test','Covid Test','Inspections for']

class Activity extends React.Component {
  render() {
    return (
      <div className="activity">
        <header>Recent Activity</header>
        <ul>
        {titles.map((title,id) => (
            <li key = {id} className='grid'>
            <div className="circle">
                <Medicine/>
            </div>
            <div>
            <span>{title}</span>
            </div>
            <div>
              <span>A100</span>
            </div>
          </li>
        ))}
        
        </ul>
      </div>
    );
  }
}

export default Activity;
