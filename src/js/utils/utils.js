export const setSlideContent = (slide) => {
  document.querySelector(".team__name").innerHTML = slide.dataset.name;
  document.querySelector(".team__text_team").innerHTML = slide.dataset.team;
  document.querySelector(".team__text_date").innerHTML = slide.dataset.date;
};

/**
 * toggles body lock
 * @param {number} delay
 */
export const bodyLockToggle = (delay = 500) => {
  if (document.documentElement.classList.contains("lock")) {
    bodyUnlock(0);
  } else {
    bodyLock(0);
  }
};
/**
 * unlocks body
 * @param {number} delay
 */
export const bodyUnlock = (delay = 500) => {
  if (!document.querySelector("._is-locked")) {
    setTimeout(() => {
      document.documentElement.classList.remove("_lock");

      document.dispatchEvent(new CustomEvent("bodyUnlock"));
    }, 0);
  }
};
/**
 * locks body
 * @param {number} delay
 */
export const bodyLock = (delay = 500) => {
  if (!document.querySelector("._is-locked")) {
    setTimeout(() => {
      document.documentElement.classList.add("_lock");

      document.dispatchEvent(new CustomEvent("bodyLock"));
    }, 0);
  }
};

/**
 * converts rem to pixels
 * @param {number} remValue
 * @returns string
 */
export function remToPx(remValue) {
  const htmlFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );

  const pxValue = remValue * htmlFontSize;

  return Math.round(pxValue) + "px";
}

export const removeClasses = (array, className) => {
  for (var i = 0; i < array.length; i++) {
    array[i].classList.remove(className);
  }
};
