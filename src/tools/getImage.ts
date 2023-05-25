import NFTPlaceholder from 'src/assets/placeholders/generic_placeholder_blue.webp';

export const getNFTImage = (url: string) => {
  if (url) {
    return url;
  }

  return NFTPlaceholder;
};
