import { useBear } from "@/store/testStore";
import { useState } from "react";

export default function ZustandTestPage() {
  const { bears, increasePopulation, removeAllBears, updateBears } = useBear();

  const [customAmount, setCustomAmount] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-96">
        <h1 className="text-2xl font-bold text-center mb-6">
          🐻 Zustand Bear Store Test
        </h1>

        <div className="text-center text-4xl font-extrabold text-blue-600 mb-8">
          {bears} Bears
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={increasePopulation}
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
          >
            Add Bear
          </button>

          <button
            onClick={removeAllBears}
            className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            Remove All Bears
          </button>

          <div className="flex gap-2">
            <input
              type="number"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="Set amount"
              className="flex-1 border border-black text-black b-2 rounded-lg px-3 py-2"
            />
            <button
              onClick={() => updateBears(Number(customAmount))}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-lg transition"
            >
              Set
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
