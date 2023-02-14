import React, { useState, useRef, useEffect} from 'react';
import './session.css';
import {BsPrinterFill, BsClockFill, BsFillPencilFill} from 'react-icons/bs';
import {FaCloudDownloadAlt} from 'react-icons/fa';
import {MdDelete, MdLibraryAdd} from 'react-icons/md';
import {useReactToPrint} from 'react-to-print';
import axios from 'axios'

const Session = () => {
    const componentRef = useRef();
    const date = new Date();
    const curtime = date.getHours() + ":"+date.getMinutes()
    const [starts, setStart] = useState(curtime);
    const [ends, setEnd] = useState(starts);
    const [courseName, setcourseName] = useState('');
    const [courseCode, setcourseCode] = useState('');
    const [lat, setLat] = useState(undefined);
    const [long, setLong] = useState(undefined);
    const [message, setMessage] = useState(undefined);
    const print =useReactToPrint({
        content:()=>componentRef.current,
        documentTitle: 'Students',
        pageStyle:'print'
    })

   useEffect(()=>{
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            // console.log(position.coords)
            setLat(position.coords.latitude);
            setLong(position.coords.longitude)
        })
    }
   },[])
// console.log(lat, long);
    const d1 = new Date(starts)
    const d2 = new Date(ends)
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setMessage('');
        if(courseName==='' || courseCode==='' || starts==='' ||ends===''){
            setMessage('Complete the fields')
        }
        else if(starts>ends){
            setMessage('Set correct time')
        }
        else{
            const data = {
                courseName,
                courseCode,
                starts,
                ends,
                ongoing:true,
                gps:{lat, long}
            };

            // await axios.post('http://localhost:7000/api/sessions/', data).then(res=>{
            //     console.log(res);
            // })
            // .catch(err=>{
            //     console.log(err);
            // })
            let t1 = d2.getTime() - d1.getTime()
            let t2 = t1/(1000)
            
            let interval = setInterval(()=>{
                document.getElementById('hr').innerHTML=(Math.floor(t2/3600))%24;
                document.getElementById('min').innerHTML= (Math.floor(t2/60))%60;
                document.getElementById('sec').innerHTML=t2%60;
                console.log(t2);
                t2--;
                if(t2 ===0){
                    
                    document.getElementById('sec').innerHTML=0;
                    clearInterval(interval);
                }
                else if (t2<60) {
                    document.getElementById('min').innerHTML=0;
                }
                else if (t2<3600) {
                    document.getElementById('hr').innerHTML=0;
                }
                // else{
                // }
            }, 1000)
        }
    }
    
   
    // console.log(t2);

    return (
        <div className='session'>
                <div id='tt' className="time-remaining">
                    <span id='hr' ></span>
                    <span id='min'></span>
                    <span id='sec' ></span>
                </div>
                <div className="main">
                    <span className="title">Make a Session</span>
                    <div className="main-container">
                        <small style={{color:'crimson'}} className="message">{message}</small>
                        <div className="inp">
                            <input onChange={(e)=>setcourseName(e.target.value)} type="text" placeholder='course name' />
                            <input onChange={(e)=>setcourseCode(e.target.value)} type="text" placeholder='course code' />
                        </div>
                        <div className="time">
                            <input id='start' onChange={(e)=>setStart(e.target.value)} type='datetime-local' min={starts} max='19:30' />
                            <input onChange={(e)=>setEnd(e.target.value)} type='datetime-local' min={starts}  max='19:30' />
                        </div>
                    
                        <div className="butts">
                            <button className='cancel-btn' >Cancel</button>
                            <button onClick={handleSubmit} className='save-btn' >Save</button>
                        </div>
                    </div>  
                </div> 

                <div className="current">
                    <div className="current-title">
                        <span className="class-title">Current Class</span>
                        <div className="icons">
                            <MdLibraryAdd className='add' />
                            <BsPrinterFill onClick={print} className='printer' />
                            <FaCloudDownloadAlt className='save' />
                            <BsClockFill className='clock' />
                            <BsFillPencilFill className='edit' />
                            <MdDelete className='delete' />
                        </div>
                    </div>
                    <div ref={componentRef} className="students">
                        <div className="stu">
                            <span className="name">Kwame Kofi</span>
                            <span className="stime">03:16 pm</span>
                        </div>
                        <div className="stu">
                            <span className="name">Kwame Kofi</span>
                            <span className="stime">03:16 pm</span>
                        </div>
                        <div className="stu">
                            <span className="name">Kwame Kofi</span>
                            <span className="stime">03:16 pm</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Session
// import CSVLink from 'react-csv'
// <CSVLink filename={'file.csv'} target='_blank' data = {array} className='something'>save</CSVLink>
