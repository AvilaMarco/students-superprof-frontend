const toggleFlipContent = ({ target: { dataset } }) =>
  document.getElementById(dataset.id).classList.toggle("box-rotate-flip");

const clipData = () => document.execCommand("copy");

export { toggleFlipContent, clipData };
