// Form component
export default function DoorConfiguratorForm({
  glassType,
  setGlassType,
  handle,
  setHandle,
  handleColor,
  setHandleColor,
}) {
  return (
    <div className="absolute top-20 left-4  p-4 rounded shadow-md z-10 w-64">
      <h2 className="text-2xl font-bold mb-5">Door Options</h2>

      {/* Glass type options */}

      <div className="mb-2">
        <label className="block mb-1 font-semibold ">Verglasung</label>
        <select
          value={glassType}
          onChange={(e) => setGlassType(e.target.value)}
          className="w-full border rounded p-1 text-black bg-white"
        >
          <option value="Ohne">Ohne</option>
          <option value="Klar">Klar</option>
          <option value="Satiniert">Satiniert</option>
          <option value="Mastercarrè klar">Mastercarrè klar</option>
          <option value="Chinchilla weiß">Chinchilla weiß</option>
        </select>
      </div>

      {/* Handle toggle */}
      <div className="mb-2">
        <label className="block mb-1 font-semibold ">Einsteckschlösser</label>
        <select
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          className="w-full border rounded p-1 text-black bg-white"
        >
          <option value="Ohne">Ohne</option>
          <option value="Klar">BB</option>
        </select>
      </div>

      {/* Handle Farbe */}
      {handle !== "Ohne" && (
        <div className="mb-2">
          <label className="block mb-1 font-semibold ">
            Einsteckschlösser Farbe
          </label>
          <select
            value={handleColor}
            onChange={(e) => setHandleColor(e.target.value)}
            className="w-full border rounded p-1 text-black bg-white"
          >
            <option value=">Matt Schwarz">Matt Schwarz</option>
            <option value="Silberfarbig">Silberfarbig</option>
            <option value="Edelstahl">Edelstahl</option>
          </select>
        </div>
      )}
    </div>
  );
}
