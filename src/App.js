import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';
import RefreshBtn from './components/RefreshBtn/RefreshBtn';
import Footer from './components/Footer/Footer';
import './App.css';
import React from 'react';

const app = new Clarifai.App({
  apiKey: '0499a081b67f4f919b0ba1500c8c7939'
 }); 

class App extends React.Component {
  constructor() {
    super();
    this.state= { 
      input: '',
      name: '',
      accuracy: '',
      imgSrc: '',
      box: {},
    }
  }

  captureInput = e => {
    this.setState({input: e.target.value});
  }

  calcFaceLocation = data => {
    const image = document.getElementById('img');
    const width = Number(image.width);
    const height = Number(image.height);

    this.setState({
      box:  { leftCol: data.left_col * width,
              topRow: data.top_row * height,
              rightCol: width - (data.right_col * width),
              bottomRow: height - (data.bottom_row * height)
      }
    });

  
    }

  pressedBtn = () => {

    app.models.predict(
      Clarifai.CELEBRITY_MODEL,
      this.state.input)
      .then( 
      response => {
        this.setState({
          name: response.outputs[0].data.regions[0].data.concepts[0].name,
          accuracy: Math.round(response.outputs[0].data.regions[0].data.concepts[0].value *100),
          imgSrc: this.state.input,
        });
        this.calcFaceLocation(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      err => {
        alert('Could Not Load Image URL')
      }
   );

  }

  render() {
    return (
      <div className='App'>
        <Particles className='particles' />
        <Logo />
        <h1>Celebrity Face Detector</h1>
        <ImageLinkForm captureInput={this.captureInput} onPress={this.pressedBtn} />
        <ImageDisplay box={this.state.box} celebName={this.state.name} celebAccuracy={this.state.accuracy} imgSource={this.state.imgSrc} />
        <RefreshBtn />
        <Footer />
      </div>
    )
  }
}

export default App;
