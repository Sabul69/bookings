import {useEffect, useState} from 'react'
import success from '../../../icons/success.png'
import error from '../../../icons/error.png'
import arrival from '../../../icons/arrival.png'
import departure from '../../../icons/departure.png'
import emailIcon from '../../../icons/email.png'
import phoneIcon from '../../../icons/sms.png'
import waIcon from '../../../icons/whatsapp.png'
import langIcon from '../../../icons/language.png'

const Detail = ({index,fill,setFill,setEndFill,endFill,setSendAll,sendAll}) => {
    const [atpInfo, setAtpInfo] = useState({email:'',phone:'',whatsapp:''});
    const [icon, setIcon] = useState('stop')
    
    const handleAtpInfo = (e,name)=>{
        setAtpInfo({...atpInfo,[name]: e.target.value});

    }
    const handleSend=()=>{
        setIcon('loading')
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
    <div className='bg-white w-96 m-auto p-3 rounded-md border-2 border-color5 border-opacity-40 flex justify-between flex-wrap text-color3 mb-4 txt-14'>
        <p className='w-3/12 my-1'><span className='font-semibold'>Nombre del pasajero </span></p>
        <p className='w-2/12 my-1'><span className='font-semibold'>Servicio | </span></p>
        <div className='w-2/12 my-1 flex'><img src={arrival} className="mr-4" alt="" /><p className=''>F74JUA</p></div>
        <p className='w-4/12 my-1'><span className='font-semibold'>Arrival Hotel </span> Golden Parnassus All Inclusive Resort & Spa</p>
        <div className='wper23 my-1 mx-1 relative'>
            <div className='absolute inset-y-0 left-2 flex items-center'><img src={emailIcon} alt="" className='' /></div>
            <input type="email" name="" id="" placeholder='Email' value={atpInfo.email} className='ipt-filter pl-10' onChange={(e)=>handleAtpInfo(e,'email')}/>
        </div>
        <div className='wper15 my-1 relative'>
            <div className='absolute inset-y-0 left-2 flex items-center'><img src={phoneIcon} alt="" className='' /></div>
            <input type="tel" name="" id="" placeholder='Telefono' className='ipt-filter pl-10' value={atpInfo.phone} onChange={(e)=>handleAtpInfo(e,'phone')}/>
            </div>
        <div className='wper15 my-1 mx-1 relative  my-1 mr-4'>
            <div className='absolute inset-y-0 left-2 flex items-center'><img src={waIcon} alt="" className='' /></div>
            <input type="tel" name="" id="" placeholder='Whats App' className='ipt-filter pl-10' value={atpInfo.whatsapp} onChange={(e)=>handleAtpInfo(e,'whatsapp')}/>
        </div>
        <div className='wper13 my-1 ml-5 relative'>
            <div className='absolute inset-y-0 left-2 flex items-center'><img src={langIcon} alt="" className='' /></div>
            <select name="" id="" className='ipt-filter pl-10'>
                <option value="">Español</option>
                <option value="">Ingles</option>
            </select>
        </div>
        <button className={`wper10 bg-color2 text-white  rounded-md my-1 ${icon==='loading' && 'opacity-70'}`} onClick={handleSend}>Enviar ATP</button>
        <div className='wper3'>
        { icon === 'loading' ?  
            <div className={`lds-ring mt-1`}><div></div><div></div><div></div><div></div></div>
            :
            <img src={icon===true? success: icon===false? error :''} alt="" className=''/>
        }
        </div>
    </div> 
  )
}

export default Detail