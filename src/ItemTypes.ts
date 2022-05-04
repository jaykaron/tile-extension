export const ItemTypes: Record<string, string> = {
  KNIGHT: "♘"
};

["A", "B", "C"].forEach((char) => (ItemTypes[char] = char));
