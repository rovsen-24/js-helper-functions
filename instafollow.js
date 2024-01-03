(() => {
  let i = 0;
  const follow = setInterval(() => {
    if (i > 1000) {
      clearInterval(follow);
      return;
    }
    const btns = document.querySelectorAll("button");
    const nextBtn = btns[i];
    nextBtn.click();
    i++;
  }, 1000);
  console.log(follow);
})();

