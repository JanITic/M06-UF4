import React, { useState } from 'react';
import Tasca from './Tasca';
import FormulariTasques from './FormulariTasques';

const LlistatTasques = () => {
  const [tasques, setTasques] = useState([]);

  // Funció per afegir nova tarea
  const afegirTasca = tasca => {
    setTasques([...tasques, tasca]);
  };

  // Funció per eliminar tarea
  const eliminarTasca = id => {
    setTasques(tasques.filter(tasca => tasca.id !== id));
  };

  // Funció per completartarea
  const completarTasca = id => {
    setTasques(
      tasques.map(tasca => {
        if (tasca.id === id) {
          return { ...tasca, completada: !tasca.completada };
        }
        return tasca;
      })
    );
  };

  return (
    <div className='llistat-tasques'>
      <h2>Llista de Tasques</h2>
      <FormulariTasques funcAfegirTasca={afegirTasca} />
      <div className='tasques'>
        {tasques.map(tasca => (
          <Tasca
            key={tasca.id}
            tasca={tasca}
            eliminarTasca={eliminarTasca}
            completarTasca={completarTasca}
          />
        ))}
      </div>
    </div>
  );
};

export default LlistatTasques;
