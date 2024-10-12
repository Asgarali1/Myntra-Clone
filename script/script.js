let bagItem;
onLoad();

function onLoad(){
    let bagItemStr = localStorage.getItem('bagItem');
    bagItem = bagItemStr ? JSON.parse(bagItemStr) : [];
displayItemOnHomePage();
bagIconDisplay();
}

function addToBag(itemId){
    bagItem.push(itemId);
    localStorage.setItem('bagItem', JSON.stringify(bagItem));
    bagIconDisplay();
}
function bagIconDisplay(){
    let bagItemCount = document.querySelector('.bag-item-count');
    if(bagItem.length>0){
        bagItemCount.style.visibility = 'visible';
    bagItemCount.innerHTML = bagItem.length;
    }
    else{
        bagItemCount.style.visibility = 'hidden';
    }
}
function displayItemOnHomePage(){
    let itemContainerElement = document.querySelector(".items-container");
    if(!itemContainerElement){
        return;
    }
    let innerHTML = '';
    items.forEach(item =>{
    
        innerHTML += `<div class="item-container">
                    <img src="${item.image}" alt="item image" class="item-image">
                    <div class="rating">
                        ${item.rating.stars} ⭐| ${item.rating.count}
                    </div>
                    <div class="compony-name">${item.company} </div>
                    <div class="item-name">
                        ${item.item_name}
                    </div>
                    <div class="price">
                        <span class="current-price">Rs ${item.current_price}</span>
                        <span class="original-price">Rs ${item.original_price} </span>
                        <span class="discount">(${item.discount_percentage} % OFF)</span>
                    </div>
                    <button class="btn-add-bag"onclick='addToBag(${item.id})'>Add to Bag </button>
                </div>`;
    })
    itemContainerElement.innerHTML = innerHTML;
}

