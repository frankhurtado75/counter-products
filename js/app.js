const counter = document.getElementById('counter');
const inc = document.getElementById('inc');
const dec = document.getElementById('dec');

let count = 0;

inc.addEventListener("click", () => {
    count++;
    counter.value = count;
})

dec.addEventListener("click", () => {
    if (count == 0) {
        return false;
    }

    count--;
    counter.value = count;
})