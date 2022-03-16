let cryptoButtonContainer = document.querySelector('#CryptoSearchedContainer')
let logoutText = document.querySelector('#logout');


function loadButtons () {
    // if (localStorage.length !== 0) {
    //     searchContainerEl.classList.remove('is-invisible');
    // }

    if (logoutText){
    

    for (let i = 0; i < localStorage.length; i++) {
    let coinButton = document.createElement('button');
    let storedCoins = JSON.parse(localStorage.getItem(localStorage.key(i)));

    console.log(storedCoins)
    coinButton.textContent = storedCoins.coinText;
    coinButton.classList.add("searchedButtons");
    coinButton.addEventListener('click', newButtonNavStorage, false)
    coinButton.myParam = storedCoins.id
    cryptoButtonContainer.appendChild(coinButton);

    // id = storedCoins.id;
    // coinButton.id = id;
    }
}
}

let newButtonNavStorage = function specificCoinNav (e) {
    console.log(e.currentTarget.myParam)
document.location.replace(`/specific-coin/${e.currentTarget.myParam}`);
}


loadButtons();