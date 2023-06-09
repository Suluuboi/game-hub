/***
 * add 'crop/600/400/' inbeteen the 'media/' string in the text provided
 * the https://api.rawg.io/api api alow users to get croped images
 */
export default function getCropedImageUrl(url: string) {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}
