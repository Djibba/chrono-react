import React, {useState} from "react";
import PauseImg from '../Images/pause.svg'
import PlayImg from '../Images/play.svg'
import ResetImg from '../Images/reset.svg'
import './Chrono.css'

function Chrono () {

    const [sessionTime, setSessionTime] = useState(1500)
    const [sessionTimeFixed, setSessionTimeFixed] = useState(1500)

    const [breakTime, setBreakTime] = useState(300)
    const [breakTimeFixed, setBreakTimeFixed] = useState(300)

    const [workingChrono, setWorkingChrono] = useState(false)

    return (
        <div className='container-chrono'>
            <div className="container-config">

                <div className="box-btns session">
                    <button className='minus'>-</button>
                    <span>{sessionTime / 60}</span>
                    <button className="plus">+</button>
                </div>

                <div className="box-btns break">
                    <button className="minus">-</button>
                    <span>{breakTime / 60}</span>
                    <button className="plus">+</button>
                </div>

            </div>
            
            <h1>
                <span>CHRONO</span>
            </h1>

            <div className="container-controllers">
                <button>
                    <img src={workingChrono ? PauseImg : PlayImg } alt='' />
                </button>
                <button>
                    <img src={ResetImg} alt=""/>
                </button>
            </div>
        </div>
    )
}

export default Chrono