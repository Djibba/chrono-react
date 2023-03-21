import React, {useState, useEffect, useReducer} from "react";
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

    const playPause = () => {
        setWorkingChrono(!workingChrono)
    }

    function reducer (state, action) {
        switch (action.type) {
            case 'TICK':
                if(sessionTime >= 0){
                    setSessionTime(sessionTime - 1 )
                } else if(breakTime >= 0){
                    setBreakTime(breakTime - 1 )
                }else if(sessionTime <= 0 && breakTime <= 0){
                    setSessionTime(sessionTimeFixed)
                    setBreakTime(breakTimeFixed)
                }
        }
    }

    const [state, dispatch] = useReducer(reducer)

    console.log(sessionTime)
    useEffect(() => {
        let id;
        if(workingChrono){
            id = window.setInterval(() => {
                dispatch({ type: 'TICK'})
            }, 1000)
        }
        return () => {
            window.clearInterval(id)
        }
    }, [workingChrono])


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
                {sessionTime >= 0 ? (
                    <span>
                        {`${Math.trunc(sessionTime / 60)} : ${sessionTime % 60 < 10 ? `0${sessionTime % 60}` : `${sessionTime % 60}`}`}
                    </span>
                ) : '' }
            </h1>

            <div className="container-controllers">
                <button
                    onClick={playPause}
                >
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