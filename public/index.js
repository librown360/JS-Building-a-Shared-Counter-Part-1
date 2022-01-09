async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    const resetButton = document.querySelector('#reset-button');

    const response = await fetch('http://127.0.0.1:9001/counter');
    const result = await response.json();

    let countValue = 0
    
    function increment(){
        countValue++;
        countContainer.textContent = countValue;
        updateServer()
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
        updateServer()
    }

    function reset(){
        countValue = 0;
        countContainer.textContent = countValue;
        updateServer()
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    resetButton.addEventListener('click', reset);
    countContainer.textContent = countValue;
    
    async function updateServer(){
        await fetch('http://127.0.0.1:9001/counter', 
        {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'value': countValue})
        })
        // countValue = result
    }
}

main()