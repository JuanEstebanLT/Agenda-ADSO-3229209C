function ProfilePreview({ perfil }) {
  return (
    <div
      className="preview"
      style={{ backgroundColor: perfil.colorPrimario, color: perfil.colorSecundario }}
    >
      <img src={perfil.imagen} alt="perfil" />
      <h2>{perfil.nombre}</h2>
      <h4>{perfil.rol}</h4>
      <p>{perfil.descripcion}</p>

      <div className="redes">
        {perfil.redes
          .filter(red => red.activo)
          .map(red => (
            <span key={red.nombre}>{red.nombre}</span>
          ))}
      </div>
    </div>
  );
}

export default ProfilePreview;