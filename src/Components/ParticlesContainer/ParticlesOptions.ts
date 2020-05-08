import {IParticlesParams} from "react-particles-js";

export const particlesOptions : IParticlesParams = {
    "particles": {
        "number": {
            "value": 25,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": "#db7f8e"
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 3,
                "color": "#604d53"
            },
            "polygon": {
                "nb_sides": 6
            },

        },
        "opacity": {
            "value": 0.25,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 12,
            "random": true,
        },
        "line_linked": {
            "enable": false,
            "distance": 83,
            "color": "#ffdbda",
            "opacity": 0.3,
            "width": 1.8
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "top-right",
            "random": true,
            "straight": true,
            "out_mode": "bounce",
            "bounce": true,
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 275,
                "line_linked": {
                    "opacity": 0.7
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};