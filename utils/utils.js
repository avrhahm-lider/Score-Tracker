export function removeEmpty(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value != null && value !== "")
  );
}