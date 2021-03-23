import './imageDisplay.css';

const ImageDisplay = ({celebName, celebAccuracy, box, imgSource}) => {
    if (imgSource === '') {
        return (
           <div className='flex placeHolder'>
                 <div className='imgText' >
                   <p>The Robot says: Computing Data....</p>
                </div>
                <div className='placeHolderImg'>
                    <p>Upload An Image Above</p>
                </div>
           </div>
        )
    } else {
        return(
            <div className='results'>
                <div className='imgText' >
                   <p>The Robot says: There is a {celebAccuracy}% chance this is {celebName}.</p>
                </div>
                <div className='imageWrapper'>
                    <div style={{
                        position: "absolute",
                        top: box.topRow,
                        left: box.leftCol,
                        right: box.rightCol,
                        bottom: box.bottomRow,
                        border: "3px solid white" 
                    }}></div>    
                    <img id='img' className='displayImg' src={imgSource} alt='uploaded url' />
                </div>
            </div>
            )
    }
}

export default ImageDisplay;