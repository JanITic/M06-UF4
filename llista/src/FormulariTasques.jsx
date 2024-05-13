import React, { useState } from 'react';

const FormulariTasques = ({ funcAfegirTasca }) => {
  // Estat per almacenar text de la nueva tarea
  const [textTasca, setTextTasca] = useState('');

  // Funció para manejar el cambio en el input de text
  const canviTextTasca = e => {
    setTextTasca(e.target.value);
  };

  // Funció per enviar el form
  const enviarForm = e => {
    e.preventDefault(); // Prevent comportamiento del form
    if (!textTasca.trim()) return; // No enviar vacios
    // nueva tarea con un ID único, text y estado inicial no completada
    const tascaNova = {
      id: Date.now(),
      text: textTasca,
      completada: false
    };
    // Llamar función para agregar la nueva tarea y limpiar campo de texto
    funcAfegirTasca(tascaNova);
    setTextTasca('');
  };

  return (
    // Form para agregar nuevas tareas
    <form onSubmit={enviarForm}>
      <input type='text' placeholder='Afegir tasca...' value={textTasca} onChange={canviTextTasca} />
      <button type='submit'>Afegir Tasca</button>
    </form>
  );
};

export default FormulariTasques;
