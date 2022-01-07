async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    const resetButton = document.querySelector('#reset-button');

    const response = await fetch('http://127.0.0.1:9001/counter');
    const result = await response.json();

    let countValue = result.value;
    
    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    function reset(){
        countValue = 0;
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    resetButton.addEventListener('click', reset);
    countContainer.textContent = countValue;

    
}
main()