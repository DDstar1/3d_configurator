import { useState, useEffect } from "react";

export default function MassTab() {
  const [width, setWidth] = useState(985);
  const [height, setHeight] = useState(2100);

  // Temporary state for typing
  const [tempWidth, setTempWidth] = useState(width);
  const [tempHeight, setTempHeight] = useState(height);

  // Sync temp with parent if width/height changes
  useEffect(() => setTempWidth(width), [width]);
  useEffect(() => setTempHeight(height), [height]);

  return (
    <div className="space-y-4">
      {/* Width */}
      <div>
        <label className="block mb-1 font-medium text-black">Breite (mm)</label>
        <input
          type="number"
          value={tempWidth}
          min={600}
          max={1200}
          onChange={(e) => setTempWidth(e.target.value)}
          onBlur={() =>
            setWidth(Math.min(1200, Math.max(600, Number(tempWidth))))
          }
          className="door-form-select"
        />
      </div>

      {/* Height */}
      <div>
        <label className="block mb-1 font-medium text-black">Höhe (mm)</label>
        <input
          type="number"
          value={tempHeight}
          min={1900}
          max={2400}
          onChange={(e) => setTempHeight(e.target.value)}
          onBlur={() =>
            setHeight(Math.min(2400, Math.max(1900, Number(tempHeight))))
          }
          className="door-form-select"
        />
      </div>

      {/* Info */}
      <p className="text-xs text-gray-500 mt-1">
        Standard: 985 × 2100 mm | Breite: 600–1200 mm | Höhe: 1900–2400 mm
      </p>
    </div>
  );
}
