function ProfileForm({ perfil, setPerfil }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil({ ...perfil, [name]: value });
  };

  const toggleRed = (index) => {
    const nuevasRedes = perfil.redes.map((red, i) =>
      i === index ? { ...red, activo: !red.activo } : red
    );
    setPerfil({ ...perfil, redes: nuevasRedes });
  };

  return (
    <form className="form">
      <input name="nombre" value={perfil.nombre} onChange={handleChange} placeholder="Nombre" />
      <input name="rol" value={perfil.rol} onChange={handleChange} placeholder="Rol" />
      <textarea name="descripcion" value={perfil.descripcion} onChange={handleChange} />
      <input name="imagen" value={perfil.imagen} onChange={handleChange} placeholder="URL imagen" />

      <label>
        Color primario
        <input type="color" name="colorPrimario" value={perfil.colorPrimario} onChange={handleChange} />
      </label>

      <label>
        Color secundario
        <input type="color" name="colorSecundario" value={perfil.colorSecundario} onChange={handleChange} />
      </label>

      <h4>Redes</h4>
      {perfil.redes.map((red, index) => (
        <label key={red.nombre}>
          <input
            type="checkbox"
            checked={red.activo}
            onChange={() => toggleRed(index)}
          />
          {red.nombre}
        </label>
      ))}
    </form>
  );
}

export default ProfileForm;