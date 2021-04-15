import React from 'react';
import '../Sass/Components/_habitCard.scss';

class HabitCard extends React.Component {
    
    constructor(props) {
        super(props);
        this.buttonTextRef = React.createRef();
    }
    
    componentDidMount() {
        if(!this.props.details.added) {
            this.buttonTextRef.current.textContent = 'Add To Stack'
        } else {
            this.buttonTextRef.current.textContent = 'Complete'
        }
    }


    render() {

        const {habitName, habitDesc, added} = this.props.details;


        return (
            <div className="habit-wrapper">
                <h3 className="habit-name">{habitName}</h3>
                <p className="habit-desc">{habitDesc}</p>
                <div className="habit-done">
                    
                    <button 
                    className="habit-done-btn"
                    onClick={() => {
                        if(added === false) {
                            this.props.addToHabitStack(this.props.index,)
                        } else {
                            this.props.completeHabitInHabitStack(this.props.index)
                        }
                                    }   
                            }
                    ref={this.buttonTextRef}
                            ></button>

                </div>
            </div>
        )
    }
}

export default HabitCard;