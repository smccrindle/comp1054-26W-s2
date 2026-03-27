// STEP 6: Nab all the DETAILS elements
const details = document.querySelectorAll("details");

// STEP 7a: Loop through the element array
details.forEach((targetDetail) => {
  // STEP 7b: Add an event listener for the toggle event
  targetDetail.addEventListener("toggle", () => {
    // STEP 8a: Check to see if this is the detail element that was just opened
    if (targetDetail.open) {
		// STEP 8b: Now close all the other detail elements
		details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.open = false;
        }
      });
    }
  });
});
// STEP 9: Verify that this works in the browser

// This experiment based on https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
