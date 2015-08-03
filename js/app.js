define(['user/acc'], function(acc){
	acc.setX(50);
	console.log(acc.getX());
	acc.doAdd(10);
	console.log("after add:"+acc.getX());
	acc.doSub(20);
	console.log("afer sub:"+acc.getX());
})