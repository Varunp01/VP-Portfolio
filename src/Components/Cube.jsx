import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faCss3Alt, faGitAlt, faGithub, faGithubSquare, faGitSquare, faHtml5, faJsSquare, faNode, faNodeJs, faReact, faShopify, faWebflow, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faC, faCirclePlus, faComputer } from "@fortawesome/free-solid-svg-icons";
function Cube() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black flex justify-center pb-12">
        <style>
          {
            `
            .cubeContainer{
    // position: absolute;
    width: 200px;
    height: 200px;
    bottom: 5vh;
    left: 100px;
    /* right: 0; */
    /* overflow: hidden; */
    /* padding-top: 18%; */
    margin-left: 0;
    animation: zoomIn,bounce;
    animation-duration: 2s,2s;
    animation-delay: 0s,3s;
}
.cubeSpinner{
    animation-name: spinCube;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 12s;
    transform-style: preserve-3d;
    transform-origin: 100px 100px 0;
    margin-left: calc(50%-100);
}
@keyframes spinCube {
    from,
    to {
        transform: rotateX(0de) rotateY(0deg) rotateZ(0deg);
    }
    16% {
        transform: rotateY(-90deg);
    }
    33% {
        transform: rotateY(-90deg) rotateZ(90deg);
    }
    50% {
        transform: rotateY(-180deg) rotateZ(90deg);
    }
    66% {
        transform: rotateY(-270deg) rotateZ(90deg);
    }
    83% {
        transform: rotateX(90de);
    }
}
.cubeSpinner div{
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    background: rgba(255, 255, 255, 0.4);
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px 0px lightyellow;
}
.cubeSpinner 
    .face1{
        transform: translateZ(100px);
    }
    .face2{
        transform: rotateY(90deg) translateZ(100px);
    }
    .face3{
        transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
    }
    .face4{
        transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
    }
    .face5{
        transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
    }
    .face6{
        transform: rotateX(-90deg) translateZ(100px);
    }
            `
          }
        </style>
        <div className="cubeContainer">
          <div className="cubeSpinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4"></FontAwesomeIcon>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faShopify} color="#95BF47"></FontAwesomeIcon>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faNode} color="#2C682C"></FontAwesomeIcon>
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGithubSquare} color="black"></FontAwesomeIcon>
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"></FontAwesomeIcon>
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faWordpress} color="#5ED4F4"></FontAwesomeIcon>
            </div>
          </div>
        </div>
        </div>
      </>
      )
}

      export default Cube
