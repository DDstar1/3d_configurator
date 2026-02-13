import { useState } from "react";

export default function ExtrasTab() {
  const [lueftung, setLueftung] = useState("Ohne Kernlochbohrung");
  const [dichtung, setDichtung] = useState("Standard (Zargendichtung)");
  const [boden, setBoden] = useState("Ohne Bodendichtung");
  const [lichtoeffnung, setLichtoeffnung] = useState("Norm-LÖ 1011 V003");
  const [verglasung, setVerglasung] = useState("Ohne Verglasung");

  return (
    <div className="space-y-4">
      {/* Lüftungsbohrung */}
      <div>
        <label className="block mb-1 font-medium text-black">
          Lüftungsbohrung
        </label>
        <select
          value={lueftung}
          onChange={(e) => setLueftung(e.target.value)}
          className="door-form-select"
        >
          <option value="Ohne Kernlochbohrung">Ohne Kernlochbohrung</option>
          <option value="Unten">Unten</option>
          <option value="Oben">Oben</option>
          <option value="Unten & Oben">Unten & Oben</option>
        </select>
      </div>

      {/* Bodendichtung */}
      <div>
        <label className="block mb-1 font-medium text-black">
          Bodendichtung
        </label>
        <select
          value={boden}
          onChange={(e) => setBoden(e.target.value)}
          className="door-form-select"
        >
          <option value="Ohne Bodendichtung">Ohne Bodendichtung</option>
          <option value="Mit Bodendichtung">Mit Bodendichtung</option>
        </select>
      </div>

      {/* Lichtöffnung */}
      <div>
        <label className="block mb-1 font-medium text-black">
          Lichtöffnung
        </label>
        <select
          value={lichtoeffnung}
          onChange={(e) => setLichtoeffnung(e.target.value)}
          className="door-form-select"
        >
          <option value="Norm-LÖ 1011 V003">Norm-LÖ 1011 V003</option>
        </select>
      </div>

      {/* Verglasung */}
      <div>
        <label className="block mb-1 font-medium text-black">Verglasung</label>
        <select
          value={verglasung}
          onChange={(e) => setVerglasung(e.target.value)}
          className="door-form-select"
        >
          <option value="Ohne Verglasung">Ohne Verglasung</option>
          <option value="Klar Glas">Klar Glas</option>
          <option value="Satinato Weiß">Satinato Weiß</option>
          <option value="Mastercarrè Klar">Mastercarrè Klar</option>
          <option value="Chinchilla Weiß">Chinchilla Weiß</option>
        </select>
      </div>
    </div>
  );
}
