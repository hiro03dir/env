export function required(value: any):boolean | string {
  return !!value || "必須項目です。";
}
