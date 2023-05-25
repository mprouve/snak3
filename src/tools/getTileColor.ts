export const getTileColor = (value: number, isHead: boolean) => {
  if (value === -1) {
    return {
      colorPrimary: '#00000000',
    };
  }

  if (value === 0) {
    return {
      colorPrimary: '#00000000',
    };
  }

  if (value >= 1) {
    return {
      colorPrimary: !isHead ? '#ff99ff' : '#ff5500',
    };
  }

  return {
    colorPrimary: '#00000000',
  };
};
