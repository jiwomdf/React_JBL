import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import '../assets/imgSlider.css'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Main = () => {
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={3000}
            className="h-64"
        >
            <div><img src="https://source.unsplash.com/random/" alt="image" className="w-full h-screen" /></div>
            <div><img src="https://source.unsplash.com/random/" alt="image" className="w-full h-screen" /></div>
        </AutoplaySlider>

    );
}

export default Main;