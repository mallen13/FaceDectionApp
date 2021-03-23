import './imageLinkForm.css';
import React from 'react';

class ImageLinkForm extends React.Component {

    componentDidMount() {
        this.inputBox.focus();
    }
    render () {
        return (
            <div className='inputForm'>
            <p>This smart Robot can detect celebrities in pictures.</p>
            <div className='textBox'>
                <input ref={ inputEL => (this.inputBox = inputEL) } type='text' placeholder='Paste Image URL Here' onChange={this.props.captureInput} />
                <button onClick={this.props.onPress}>Detect</button>
            </div>
        </div>
        )
    }
}

export default ImageLinkForm