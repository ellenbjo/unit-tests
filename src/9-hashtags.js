export const hashtags = (text) => {
  const textArray = text.split(" ")
  return textArray.filter(hashtag => hashtag.includes("#"))
}
