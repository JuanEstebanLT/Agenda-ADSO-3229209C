import { useEffect, useState } from 'react';
import ProfileForm from './components/ProfileForm.jsx';
import ProfilePreview from './components/ProfilePreview.jsx';
import './App.css';

const estadoInicial = {
  nombre: 'Tu nombre',
  rol: 'Tu rol',
  descripcion: 'Descripción corta',
  imagen: 'https://via.placeholder.com/150',
  colorPrimario: '#6c63ff',
  colorSecundario: '#ffffff',
  redes: [
    { nombre: 'GitHub', activo: true },
    { nombre: 'LinkedIn', activo: false },
    { nombre: 'Instagram', activo: false },
  ],
};

function App() {
  const [perfil, setPerfil] = useState(() => {
    const guardado = localStorage.getItem('perfil');
    return guardado ? JSON.parse(guardado) : estadoInicial;
  });

  useEffect(() => {
    localStorage.setItem('perfil', JSON.stringify(perfil));
  }, [perfil]);

  return (
    <div className="container">
      <ProfileForm perfil={perfil} setPerfil={setPerfil} />
      <ProfilePreview perfil={perfil} />
    </div>
  );
}

export default App;
