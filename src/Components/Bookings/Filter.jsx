import React, { useState } from "react";

const Filter = ({ filter, setFilter, handleUrl }) => {
  const handleFilter = (e, n) => {
    setFilter({ ...filter, [n]: e.target.value });
    console.log(filter);
  };

  const handleClean = () => {
    setFilter({
      nombre: "",
      agencia: "",
      localizador: "",
      registrada: "",
      destino: "",
    });
  };
  return (
    <div className="overflow-hidden">
      <h3 className="txt-25 text-color3 m-5 relative md:left-1/4">
        Filtrado de reservas
      </h3>
      <div className="bg-color1 flex flex-wrap justify-between text-color3 p-1 txt-14">
        <div className="p-3 w-full sm:w-6/12 md:w-3/12">
          <p className="font-semibold">Nombre del titular</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            value={filter.nombre}
            className="ipt-filter"
            onChange={(e) => handleFilter(e, "nombre")}
          />
        </div>
        <div className="p-3 w-full sm:w-5/12 md:w-3/12">
          <p className="font-semibold ">Referencia agencia</p>
          <input
            type="text"
            name="agencia"
            id="agencia"
            placeholder="Agencia"
            value={filter.agencia}
            className="ipt-filter"
            onChange={(e) => handleFilter(e, "agencia")}
          />
        </div>
        <div className="p-3 w-full sm:w-4/12 md:w-3/12">
          <p className="font-semibold">Localizador</p>
          <input
            type="text"
            name="localizador"
            id="localizador"
            placeholder="Localizador"
            value={filter.localizador}
            className="ipt-filter"
            onChange={(e) => handleFilter(e, "localizador")}
          />
        </div>
        <div className="p-3 w-5/12 sm:w-2/12 lg:w-1/12">
          <p className="font-semibold">Registrada</p>
          <select
            name="registrada"
            className="ipt-filter"
            onChange={(e) => handleFilter(e, "registrada")}
          >
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="p-3 w-7/12 sm:w-5/12 md:w-3/12 lg:w-2/12">
          <p className="font-semibold">Destino</p>
          <select
            name="destino"
            className="ipt-filter"
            onChange={(e) => handleFilter(e, "destino")}
          >
            <option value="15">Cancun</option>
          </select>
        </div>
        <div className="p-3 w-full sm:w-6/12 md:w-3/12">
          <p className="font-semibold">Con fecha de:</p>
          <select name="" id="" className="ipt-filter">
            <option value="Confirmación" defaultValue={true}>
              Confirmación
            </option>
          </select>
        </div>
        <div className="w-full md:w-5/12 lg:w-3/12 flex justify-between">
          <div className="p-3 w-3/6">
            <p className="font-semibold">Desde</p>
            <input
              type="date"
              name="desde"
              id="desde"
              className="ipt-filter"
              onChange={(e) => handleFilter(e, "inicio")}
            />
          </div>
          <div className="p-3 w-3/6">
            <p className="font-semibold">Hasta</p>
            <input
              type="date"
              name="hasta"
              id="hasta"
              className="ipt-filter"
              onChange={(e) => handleFilter(e, "final")}
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 p-3 flex justify-end">
          <div className="w-full lg:w-4/5 xl:w-3/5 sm:text-right">
            <button className="btn-filter" onClick={handleClean}>
              Limpiar
            </button>
            <button className="btn-filter mr-0" onClick={handleUrl}>
              Filtrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
