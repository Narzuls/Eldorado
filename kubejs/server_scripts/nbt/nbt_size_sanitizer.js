// KubeJS 1.20.1 – script de nettoyage NBT / lore pour éviter crash Netty
const MAX_BYTES = 30000;

function byteSize(str) {
  return new java.lang.String(str || "").getBytes("UTF-8").length;
}

function sanitizeNBT(nbt, path = "") {
  for (const key in nbt) {
    const val = nbt[key];
    const subpath = path ? `${path}.${key}` : key;

    if (typeof val === "string") {
      const size = byteSize(val);
      if (size > MAX_BYTES) {
        console.warn(`[NBT Sanitizer] String trop longue à ${subpath} (${size} bytes): tronquage.`);
        nbt[key] = val.substring(0, MAX_BYTES) + "...[TRONC]";
      }
    }
    else if (Array.isArray(val)) {
      for (let i = 0; i < val.length; i++) {
        if (typeof val[i] === "string") {
          const sz = byteSize(val[i]);
          if (sz > MAX_BYTES) {
            console.warn(`[NBT Sanitizer] Ligne d'array trop longue: ${subpath}[${i}] (${sz} bytes)`);
            val[i] = val[i].substring(0, MAX_BYTES) + "...[TRONC]";
          }
        } else if (typeof val[i] === "object") {
          sanitizeNBT(val[i], `${subpath}[${i}]`);
        }
      }
    }
    else if (typeof val === "object" && val !== null) {
      sanitizeNBT(val, subpath);
    }
  }
}

ItemEvents.inventoryTick(event => {
  const stack = event.item;
  if (!stack || !stack.nbt) return;

  const allText = stack.getLore().join("") + stack.nbt.toString();
  const totalSize = byteSize(allText);

  if (totalSize > MAX_BYTES) {
    console.warn(`[NBT Sanitizer] Item ${stack.getId()} totalSize=${totalSize} > ${MAX_BYTES}`);
    sanitizeNBT(stack.nbt);
    stack.setNBt(stack.nbt);
  }
});
