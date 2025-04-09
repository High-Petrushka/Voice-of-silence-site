
function upScroll() {
  document.documentElement.scrollTop = 0;
  console.log("Done");
}

export default function useScrollTop() {
  return { upScroll };
}
