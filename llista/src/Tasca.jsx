import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

// Si la tarea está completada, añade la clase 'tascaCompletada'
const Tasca = ({ tasca, eliminarTasca, completarTasca }) => {
  return (
    <div className={tasca.completada ? 'tasca tascaCompletada' : 'tasca'} style={{ display: 'flex', alignItems: 'center' }}>
      <p>{tasca.text}</p>
      <div style={{ marginLeft: 'auto' }}>
        <RiCloseCircleLine onClick={() => eliminarTasca(tasca.id)} className='delete-icon' />
      </div>
    </div>
  );
};

export default Tasca;
