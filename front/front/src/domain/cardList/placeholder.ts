export const replacePlaceHolder = (csv: string, json: string) => {
  let result = json;
  csv.split(',').forEach((t, i) => {
    result = result.replaceAll(new RegExp(`\\$${i + 1}`, 'g'), t);
  });
  return result;
};