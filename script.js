const input = document.getElementById('input');
const button = document.getElementById('button');
const count = document.getElementById('count');


const update = () => {
    const inputValue = input.value
    count.textContent = inputValue.length;
    console.log(inputValue);
    
}