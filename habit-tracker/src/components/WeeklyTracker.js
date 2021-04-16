import React from 'react';
import '../Sass/Components/_weeklyTracker.scss';

class WeeklyTracker extends React.Component {




    createDayDiv = (key, value) => {
        if(value === 0) {
        return <div className="day-wrap" key={key} >
                    <div className={key}><span>{key}</span></div>
                    <div className="day-track" ><span>{value}</span></div>
               </div>
        } else if (value > 0 && value <= 4) {
            return <div className="day-wrap" key={key} >
            <div className={key}><span>{key}</span></div>
            <div className="day-track-some" ><span>{value}</span></div>
       </div>
        } else {
            return <div className="day-wrap" key={key} >
                    <div className={key}><span>{key}</span></div>
                    <div className="day-track-all" ><span>{value}</span></div>
               </div>
        }
    }

    render() {

        return (
            <div className="tracker-wrap" >
                <h2>Weekly Progress</h2>
                <div className="week-prog-wrap">
                        {Object.keys(this.props.weeklyTrack).map(key => 
                            this.createDayDiv(key,this.props.weeklyTrack[key])    
                        )};
                </div>
            </div>
        )

    }
}

export default WeeklyTracker;