function insertAt(strings, ...keys) {
  return (...values) => {
    const dictionary = values[values.length - 1] || {};
    console.log(values);
    const result = [strings[0]];
    keys.forEach((key, i) => {
      const value = Number.isInteger(key) ? values[key] : dictionary[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

const tempfirst = insertAt`${1}${3}${2}${0}`;
tempfirst("?", "w", "y", "h")