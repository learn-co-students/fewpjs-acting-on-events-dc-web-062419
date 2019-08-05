// Your code here
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#BADA55';

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') moveDodgerLeft();
  if (e.key === 'ArrowRight') moveDodgerRight();
});

const moveDodgerLeft = () => {
  let leftNumber = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumber, 10);
  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
};

const moveDodgerRight = () => {
  let leftNumber = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumber, 10);
  if (left < 380) {
    dodger.style.left = `${left + 10}px`;
  }
};
