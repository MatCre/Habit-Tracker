import React from 'react';
import ReactDOM from 'react-dom';
import './Sass/app.scss';

class Myheader extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Style</h1>
                <p>Add a little style</p>
            </div>
        )
    }
}

ReactDOM.render(<Myheader />, document.querySelector('#main'));
