// Form component
import { useState } from "react";
import TypTab from "./typ";
import TabHeaders from "./headers";
import MassTab from "./mass";
import ZargenTab from "./zargen";
import SicherheitTab from "./sicherheit";
import ExtrasTab from "./extras";

export function DoorConfiguratorForm({
  glassType,
  setGlassType,
  handle,
  setHandle,
  handleColor,
  setHandleColor,
  width,
  setWidth,
  height,
  setHeight,
}) {
  return (
    <div className="w-full p-8 rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100">
      <h2 className="text-2xl font-semibold mb-8 text-gray-900">FORM 2</h2>

      {/* ================= SIZE ================= */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          Größe
        </h3>

        <label className="block mb-1 text-sm font-medium text-gray-700">
          Breite (mm)
        </label>
        <input
          type="number"
          value={width}
          min={600}
          max={1200}
          onChange={(e) =>
            setWidth(Math.min(1200, Math.max(600, Number(e.target.value))))
          }
          className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-black transition"
        />

        <label className="block mt-4 mb-1 text-sm font-medium text-gray-700">
          Höhe (mm)
        </label>
        <input
          type="number"
          value={height}
          min={1800}
          max={2400}
          onChange={(e) =>
            setHeight(Math.min(2400, Math.max(1800, Number(e.target.value))))
          }
          className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-black transition"
        />

        <p className="text-xs text-gray-400 mt-3">
          Standard: 900 × 2100 mm | Max: 1200 × 2400 mm
        </p>
      </div>

      {/* ================= GLASS ================= */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          Verglasung
        </h3>

        <select
          value={glassType}
          onChange={(e) => setGlassType(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-black transition"
        >
          <option value="Ohne">Ohne</option>
          <option value="Klar">Klar</option>
          <option value="Satiniert">Satiniert</option>
          <option value="Mastercarrè klar">Mastercarrè klar</option>
          <option value="Chinchilla weiß">Chinchilla weiß</option>
        </select>
      </div>

      {/* ================= LOCK ================= */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          Einsteckschloss
        </h3>

        <select
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-black transition"
        >
          <option value="Ohne">Ohne</option>
          <option value="BB">BB</option>
          <option value="WC">WC</option>
          <option value="PZ">PZ</option>
        </select>
      </div>

      {/* ================= LOCK COLOR ================= */}
      {handle !== "Ohne" && (
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Schloss Farbe
          </label>

          <select
            value={handleColor}
            onChange={(e) => setHandleColor(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-black transition"
          >
            <option value="Matt Schwarz">Matt Schwarz</option>
            <option value="Silberfarbig">Silberfarbig</option>
            <option value="Edelstahl">Edelstahl</option>
          </select>
        </div>
      )}
    </div>
  );
}

export function DoorConfigurationForm2() {
  const [activeTab, setActiveTab] = useState("Typ");

  // Typ state
  const [doorType, setDoorType] = useState("Stumpf");
  const [insertType, setInsertType] = useState("Röhrenspanplatte (RSP)");
  const [anschlag, setAnschlag] = useState("DIN rechts");

  const tabs = ["Typ", "Maße", "Zargen", "Sicherheit", "Extras"];

  return (
    <div
      className=" p-6 rounded-2xl 
                 bg-white/20 backdrop-blur-lg 
                 border border-white/30 shadow-xl 
                 z-10 w-full text-black"
    >
      <h2 className="text-2xl font-semibold mb-8 text-gray-900">FORM 1</h2>
      {/* Tab Headers */}
      <TabHeaders
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Tab Content */}
      <div className="border border-black px-4">
        <div className="mt-6"></div>
        {activeTab === "Typ" && (
          <TypTab
            doorType={doorType}
            setDoorType={setDoorType}
            insertType={insertType}
            setInsertType={setInsertType}
            anschlag={anschlag}
            setAnschlag={setAnschlag}
          />
        )}

        {activeTab === "Maße" && <MassTab />}
        {activeTab === "Zargen" && <ZargenTab />}
        {activeTab === "Sicherheit" && <SicherheitTab />}
        {activeTab === "Extras" && <ExtrasTab />}
        <div className="mb-5"></div>
      </div>
    </div>
  );
}
