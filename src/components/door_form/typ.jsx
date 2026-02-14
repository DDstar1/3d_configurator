export default function TypTab({
  doorType,
  setDoorType,
  insertType,
  setInsertType,
  anschlag,
  setAnschlag,
}) {
  return (
    <div className="space-y-3">
      {/* Türtyp */}
      <div>
        <label className="block mb-1 font-medium text-black">Türtyp:</label>
        <select
          value={doorType}
          onChange={(e) => setDoorType(e.target.value)}
          className="door-form-select"
        >
          <option value="Stumpf">Stumpf</option>
          <option value="Einschlag">Gefalzt</option>
        </select>
      </div>

      {/* Einlage */}
      <div>
        <label className="block mb-1 font-medium text-black">Einlage:</label>
        <select
          value={insertType}
          onChange={(e) => setInsertType(e.target.value)}
          className="door-form-select"
        >
          <option value="Röhrenspanplatte (RSP)">Röhrenspanplatte (RSP)</option>
          <option value="Vollspanplatte">Vollspanplatte</option>
        </select>
      </div>

      {/* Anschlag */}
      <div>
        <label className="block mb-1 font-medium text-black">Anschlag:</label>
        <select
          value={anschlag}
          onChange={(e) => setAnschlag(e.target.value)}
          className="door-form-select"
        >
          <option value="DIN rechts">DIN rechts</option>
          <option value="DIN links">DIN links</option>
        </select>
      </div>
    </div>
  );
}
