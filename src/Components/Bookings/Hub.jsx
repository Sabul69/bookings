import {useState} from 'react'
import flecha from '../../icons/flecha.png'
import Reservations from './Hub/Reservations'

const Hub = () => {

  const [details, setDetails] = useState()

  const handleClose=()=>{
    setDetails(false);
  }
  const handleOpen=()=>{
    setDetails(true);
  }

  return (
    <>
      <div className='flex justify-between'>
          <h3 className='text-2xl text-color3 font m-5'>Hub for Travel Partner</h3>
        <div className='flex justify-between w-1/3'>
          <div className='flex w-1/3 mt-5 cursor-pointer' onClick={handleClose}>
          <p className='text-color4 mr-3' >Cerrar todos</p> <img className='w-4 h-4 m-1' src={flecha} alt="." />
          </div>
          <div className='flex w-1/3 mt-5 cursor-pointer' onClick={handleOpen}>
          <p className='text-color4 mr-3 '>Abrir todos</p> <img className='w-4 h-4 m-1 rotate-180' src={flecha} alt="." />
          </div>
          <div className='flex w-1/3 my-5'>
            <p className='font-semibold text-color3 mt-1 mr-3'>Results:</p>
            <select name='results' className='ipt-filter '>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          </div>
          </div>
      </div>
      <Reservations
      details={details}
      setDetails={setDetails}
      />
    </>
  )
}

export default Hub