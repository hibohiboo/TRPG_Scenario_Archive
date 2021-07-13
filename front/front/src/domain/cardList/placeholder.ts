export const replacePlaceHolder = (csv: string, json: string) => {
  let result = json;
  csv.split(',').forEach((t, i) => {
    const text = t.replaceAll('"', '\\"');
    result = result.replaceAll(new RegExp(`\\$${i + 1}`, 'g'), text);
  });
  return result;
};