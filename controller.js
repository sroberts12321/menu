let menu = dishes
let menuDiv = document.getElementById("menu")

menu.forEach((item)=>{
	//listing out each attribute
	let menuItem = `<img class="image" src="${item.imageURL}">
	<div class="details">
	<h4 class="titles">${item.title}</h4>
	<p class="descriptions">${item.description}</p>
	</div>
	<h4 class="prices">${item.price}</h4>
	`
	menuDiv.innerHTML += menuItem
})