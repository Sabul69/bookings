import {useEffect, useState} from 'react'
import success from '../../../icons/success.png'
import error from '../../../icons/error.png'
import arrival from '../../../icons/arrival.png'
import departure from '../../../icons/departure.png'

const Detail = ({index,fill,setFill,setEndFill,endFill,setSendAll,sendAll}) => {
    const [atpInfo, setAtpInfo] = useState({email:'',phone:'',whatsapp:''});
    const [icon, setIcon] = useState('stop')
    
    const handleAtpInfo = (e,name)=>{
        setAtpInfo({...atpInfo,[name]: e.target.value});

    }
    const handleSend=()=>{
        try {
            setIcon(true);
        } catch (error) {
            setIcon(false);
        }
        setIcon('stop')
    }
    useEffect(() => {
      if (index===0) {
          setFill(atpInfo)
      }
      if(endFill){
          setAtpInfo(fill)
          setEndFill(false)
      }
      if (sendAll) {
          handleSend()
          setSendAll(false)
      }
    }, [index,atpInfo,setFill,endFill,setEndFill,fill,sendAll,setSendAll])
    
  return (
    <div className='bg-white w-96 m-auto p-3 rounded-md border-2 border-color5 border-opacity-40 flex justify-between flex-wrap text-color3 mb-4'>
        <p className='w-3/12 my-1'><span className='font-semibold'>Nombre del pasajero </span></p>
        <p className='w-2/12 my-1'><span className='font-semibold'>Servicio | </span></p>
        <div className='w-2/12 my-1 flex'><img src={arrival} className="mr-4" alt="" /><p className=''>F74JUA</p></div>
        <p className='w-4/12 my-1'><span className='font-semibold'>Arrival Hotel </span> Golden Parnassus All Inclusive Resort & Spa</p>
        <input type="email" name="" id="" placeholder='hola@neogeo.com' value={atpInfo.email} className='ipt-filter wper23 my-1 mx-1' onChange={(e)=>handleAtpInfo(e,'email')}/>
        <input type="tel" name="" id="" placeholder='' className='ipt-filter wper15 my-1' value={atpInfo.phone} onChange={(e)=>handleAtpInfo(e,'phone')}/>
        <input type="tel" name="" id="" placeholder='' className='ipt-filter wper15 my-1 mr-4' value={atpInfo.whatsapp} onChange={(e)=>handleAtpInfo(e,'whatsapp')}/>
        <select name="" id="" className='ipt-filter wper13 my-1 ml-2'>
            <option value="">Español</option>
            <option value="">Ingles</option>
        </select>
        <button className='wper10 bg-color2 text-white  rounded-md my-1' onClick={handleSend}>Enviar ATP</button>
        <div className='wper3'>
            <img src={icon===true? success: !icon? error :''} alt="" className=''/>
        </div>
    </div> 
  )
}

export default Detail