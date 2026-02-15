export const getHardwareColour = (schloss) => {
  if (!schloss) return null;

  if (schloss.includes("Edelstahl")) return "Edelstahl";
  if (schloss.includes("Matt Schwarz")) return "Matt Schwarz";

  return "Silberfarbig"; // fallback if needed
};
