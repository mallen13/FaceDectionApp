import './logo.css';
import logo from './logo.svg';
import Tilt from 'react-tilt';

const Logo = () => {
    return (
        <Tilt className='Tilt' options={{max: 60}}>
            <div className='TiltInner' >
                 <img src={logo} alt='Robot Logo' />
              </div>  
            (Hover Over Me)
        </Tilt>
    )
}

export default Logo;