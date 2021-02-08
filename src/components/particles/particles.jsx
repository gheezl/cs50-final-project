import { Fragment } from "react"
import Particles from "react-particles-js"

import "./particles.css"

const Background = () => {
    return(
        <Fragment>
        <div className="particles">
            <Particles 
                params={
                    ("particles-js", 
                    {"particles":{"number":{"value":25,"density":{"enable":true,"value_area":1972.900242272148}},
                    "color":{"value":"#ffffff"},
                    "shape":{"type":"polygon",
                    "stroke":{"width":10,"color":"#000000"},
                    "polygon":{"nb_sides":3},"image":{"src":"","width":10000,"height":10000}},
                    "opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
                    "size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
                    "line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
                    "move":{"enable":true,"speed":1,"direction":"right","random":true,"straight":true,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
                    "interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"none"},
                    "onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
                    "bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},
                    "repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true})
                }
            />
        </div>
    </Fragment>
    )
}

export default Background;