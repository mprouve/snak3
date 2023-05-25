// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getRefFromDotString = (obj: any, str: string) => {
  return str.split('.').reduce((o, i) => o[i], obj);
};

export default getRefFromDotString;
