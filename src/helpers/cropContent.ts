export const cropContent = (content: string, words = 20) => {
  if (!content) {
    return 'Coming soon';
  }
  return content
    .split(/\s+/)
    .slice(0, words)
    .join(' ');
};
