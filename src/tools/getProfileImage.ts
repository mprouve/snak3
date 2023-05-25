import ProfilePlaceholder from 'src/assets/placeholders/account_placeholder_blue.webp';

export const getProfileImage = (url: string) => {
  if (url) {
    return url;
  }

  return ProfilePlaceholder;
};
