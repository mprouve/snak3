export const getTileColor = (value: number) => {
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
      colorPrimary: '#ff5500',
    };
  }

  return {
    colorPrimary: '#00000000',
  };
};
