export const formatSecondsToTime = seconds => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}

const toCamelCase = str => str.charAt(0).toLowerCase() + str.slice(1);

export const keysToCamel = obj => {
  if (Array.isArray(obj)) {
    return obj.map((item) => keysToCamel(item));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      const camelKey = toCamelCase(key);
      acc[camelKey] = keysToCamel(value);
      return acc;
    }, {});
  }
  return obj;
};

export const sortByDateDesc = arr => {
  return [...arr].sort(
    (a, b) => new Date(b.date ?? "").getTime() - new Date(a.date ?? "").getTime()
  );
};

export const normalizeAndSort = data => {
  const camelData = keysToCamel(data);
  return sortByDateDesc(camelData);
};

export const importAllImage = () => import.meta.glob("/src/assets/images/*", {eager: true, import: "default"});

