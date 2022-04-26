import React from 'react'

const Filter = () => {
  return (
    <div className='overflow-hidden'>
      <h3 className='text-2xl text-color3 font m-5 relative left-1/4'>Filtrado de reservas</h3>
      <div className='bg-color1 flex flex-wrap justify-between text-color3 p-1'>
        <div className='p-3 w-3/12' >
          <p className='font-semibold'>Nombre del titular</p>
          <input type="text" name="name" id="name" placeholder='Nombre' className='ipt-filter'/>
        </div>
        <div className='p-3 w-3/12'>
          <p className='font-semibold '>Referencia agencia</p>
          <input type="text" name="agencia" id="agencia" placeholder='Agencia' className='ipt-filter'/>
        </div>
        <div className='p-3 w-3/12'>
          <p className='font-semibold'>Localizador</p>
          <input type="text" name="localizador" id="localizador" placeholder='Localizador' className='ipt-filter'/>
        </div>
        <div className='p-3 w-1/12'>
          <p className='font-semibold'>Registrada</p>
          <select name='registrada' className='ipt-filter'>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className='p-3 w-2/12'>
          <p className='font-semibold'>Destino</p>
          <select name='destino' className='ipt-filter'>
            <option value="cancun">Cancun</option>
          </select>
        </div>
        <div className='p-3 w-3/12' >
          <p className='font-semibold'>Con fecha de:</p>
          <input type="date" name="confirmacion" id="confirmacion" placeholder='Confirmación' className='ipt-filter'/>
        </div>
        <div className='w-3/12 flex justify-between'>
          <div className='p-3 w-3/6' >
            <p className='font-semibold'>Desde</p>
            <input type="date" name="desde" id="desde" className='ipt-filter'/>
          </div>
          <div className='p-3 w-3/6' >
            <p className='font-semibold'>Hasta</p>
            <input type="date" name="hasta" id="hasta" className='ipt-filter'/>
          </div>
        </div>  
        <div className='w-6/12 p-3 flex justify-end'>
          <div className='w-3/5 text-right'>
          <button className='btn-filter'>Limpiar</button>
          <button className='btn-filter mr-0'>Filtrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter