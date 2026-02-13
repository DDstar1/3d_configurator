import { useState } from "react";

export default function ZargenTab() {
  const [zarge, setZarge] = useState("ohne Zarge");
  const [bekleidung, setBekleidung] = useState("62,5 mm");
  const [wandstaerke, setWandstaerke] = useState("80 mm (77 - 97 mm)");

  const wandOptions = [
    "80 mm (77 - 97 mm)",
    "100 mm (97 - 117 mm)",
    "120 mm (117 - 137 mm)",
    "140 mm (137 - 157 mm)",
    "160 mm (157 - 177 mm)",
    "180 mm (177 - 197 mm)",
  ];

  return (
    <div className="space-y-4">
      {/* Zargen */}
      <div>
        <label className="block mb-1 font-medium text-black">Zargen</label>
        <select
          value={zarge}
          onChange={(e) => setZarge(e.target.value)}
          className="w-full rounded p-2  bg-gray-100  text-black  border border-black/20 "
        >
          <option value="ohne Zarge">ohne Zarge</option>
          <option value="mit Zarge">mit Zarge</option>
        </select>
      </div>

      {/* Conditional fields: only show if mit Zarge */}
      {zarge === "mit Zarge" && (
        <>
          {/* Bekleidung Breite */}
          <div>
            <label className="block mb-1 font-medium text-black">
              Bekleidung Breite
            </label>
            <select
              value={bekleidung}
              onChange={(e) => setBekleidung(e.target.value)}
              className="w-full rounded p-2  bg-gray-100  text-black  border border-black/20 "
            >
              <option value="62,5 mm">62,5 mm</option>
              <option value="70 mm">70 mm</option>
              <option value="80 mm">80 mm</option>
            </select>
          </div>

          {/* Wandstärke */}
          <div>
            <label className="block mb-1 font-medium text-black">
              Wandstärke
            </label>
            <select
              value={wandstaerke}
              onChange={(e) => setWandstaerke(e.target.value)}
              className="w-full rounded p-2  bg-gray-100  text-black  border border-black/20 "
            >
              {wandOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
    </div>
  );
}
