import React from 'react';
import Particles from 'react-particles-js';
import './ParticlesContainer.scss';
import {particlesOptions} from "./ParticlesOptions";

export function ParticlesContainer(): JSX.Element {
   
    return (
        <Particles className='particles'
                   params={particlesOptions}/>
    );
}
