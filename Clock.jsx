import React, { Component } from 'react'
import ‘../../styles/clock.scss’;
export const Clock = () => {
  const [fecha, setFecha] = useState(new Date());
  const [edad, setEdad] = useState(0);
  const [nombre, setNombre] = useState('Martín');
  const [apellidos, setApellidos] = useState('San José');

  useEffect(() => {
    const timerID = setInterval(() => tick(edad), 1000);
    return () => {
      clearInterval(timerID);
    }
  }, [edad]);

  const tick = (prevEdad) => {
    console.log(edad)
    setEdad(prevEdad + 1);
  }

  return (
    <div>
        <h2>
            Hora Actual:
            {fecha.toLocaleTimeString()}
        </h2>
        <h3>{nombre} {apellidos}</h3>
        <h1>Edad: {edad}</h1>
    </div>
  )
}
