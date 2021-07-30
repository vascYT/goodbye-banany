const ids = ["ys4rkcMbtjY", "KWtwIf-TSlo", "xfrdxxDjXuw", "LH5ay10RTGY"];

const randomId = ids[Math.floor(Math.random() * ids.length)];
document
  .getElementById("iframe")
  .setAttribute("src", `https://www.youtube.com/embed/${randomId}`);
