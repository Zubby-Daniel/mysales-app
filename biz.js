
let qty1;
let pri1;
let cst1;
let ftbl = document.querySelector('#ftbl');
let qty = document.querySelector('#qty');
let pri = document.querySelector('#pri');
let cst = document.querySelector('#cst');

prod1 = ()=>{
	if (ftbl.checked) {
		
		pri.value = 2000;
		pri1 = pri.value;
	}else{
		pri.value = "";
	}
	
}

prodqty1 = ()=>{
	cst1 = cst.value;
	qty1 = qty.value;
	cst.value = pri1 * qty1;
	if(pri.value === ""){
		alert("Price can't be empty! ");
	}else{
		pri1 = pri.value;
	}
}


	
let qty2;
let pri2;
let cst2;
let bsbl = document.querySelector("#bsbl");
let qtty = document.querySelector("#qtty");
let pr = document.querySelector("#pr");
let cs = document.querySelector("#cs");

function prod2(){
	if(bsbl.checked){
		pr.value = 4000;
		pri2 = pr.value;
	}else{
		pr.value = "";
	}

}

function prodqty2(){
	cst2 = cs.value;
	qty2 = qtty.value;
	cs.value = qty2 * pri2;
	if (pr.value === "") {
		alert("Price Can't Be Empty")
	}else{
		pri2 = pr.value;
	}
}

	
let qty3;
let pri3;
let cst3;
let bskbl = document.querySelector("#bskbl");
let bskqty = document.querySelector("#bskqty");
let price = document.querySelector("#price");
let cost = document.querySelector("#cost");

bskbl.addEventListener('click', ()=>{
	if (bskbl.checked) {
		price.value = 5000;
		pri3 = price.value;
	
}else{
	price.value = "";
}
})

bskqty.addEventListener('input', ()=>{

	qty3 = bskqty.value;
	cst3 = cost.value;
	cost.value = qty3 * pri3;
	if (price.value === "") {
		alert("Price Can't Be Empty!")
	}else{
		pri3 = price.value;

	}
	
})

// TOTALS
let totItem;
let totCst;
let totalItems = document.querySelector("#TotalItems");
let totalCosts = document.querySelector("#TotalCosts");
let reset = document.querySelector("#reset");


items = ()=>{
	totItem = Number(qty.value) + Number(qtty.value) + Number(bskqty.value);
	totalItems.value = totItem;
}

costs = ()=>{
	totCst = Number(cst.value) + Number(cs.value) + Number(cost.value);
	totalCosts.value = totCst;

}

	let inpu = document.querySelector(".inpu");
	let orderNumb = document.querySelector(".order__numberInput");
	let slt = document.querySelector(".slt");
	let optn = document.querySelector(".optn");
 rst = ()=>{
 	qty.value = "";
 	qtty.value = "";
 	bskqty.value = "";
 	pri.value = "";
 	pr.value = "";
 	price.value = "";
 	cst.value = "";
 	cs.value = "";
 	cost.value = "";
 	totalItems.value = "";
 	totalCosts.value = "";
 	inpu = "";
 	optn = "SELECT";
 	orderNumb.value = 0;

 }