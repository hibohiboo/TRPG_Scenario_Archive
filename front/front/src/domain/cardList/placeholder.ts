export const replacePlaceHolder = (csv: string[], json: string) => {
  let result = json;
  for (let i = csv.length - 1; i > -1; i--) {
    const t = csv[i];
    // 置換するテキストを無害化
    const text = JSON.stringify(t).slice(1).slice(0, -1).replaceAll("\\\\n", "\\n");

    result = result.replaceAll(new RegExp(`\\$${i + 1}`, 'g'), text);
  }


  return result;
};