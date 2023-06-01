function importAll(r) {
  return r.keys().map(r);
}

const getImages = importAll(require.context('../assets/gallery', false, /\.(png|jpe?g|svg|mp4)$/));

export default getImages;