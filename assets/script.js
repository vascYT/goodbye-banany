const ids = [
  "ys4rkcMbtjY",
  "KWtwIf-TSlo",
  "xfrdxxDjXuw",
  "LH5ay10RTGY",
  "PCj0zLwci8U",
  "uJAzH2dA3iM",
  "rUO5P9TUqUs",
  "dQw4w9WgXcQ",
  "-3pXPvFW_ok",
];

const randomId = ids[Math.floor(Math.random() * ids.length)];
document
  .getElementById("iframe")
  .setAttribute("src", `https://www.youtube.com/embed/${randomId}`);
