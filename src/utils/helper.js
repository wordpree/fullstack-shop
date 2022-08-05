export const getUniqueItem = (stack, category) => {
  if (!Array.isArray(stack) || category.trim() === "") {
    throw new Error("parameter invalide");
  }
  let ret = [];
  stack.forEach((s) => {
    const unit = s[category];
    if (Array.isArray(unit)) {
      unit.forEach((u) => ret.push(u));
    } else {
      ret.push(unit);
    }
  });
  return [...new Set(ret)];
};
