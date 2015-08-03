define(['com/add','com/subtract'],function(add,subtract){
	var x = 0;
	var doAdd = function(y){
		this.x = add.add(this.x,y);
	},
	doSub = function(y){
		this.x = subtract.subtract(this.x,y);
	},
	getX = function(){
		return this.x;
	},
	setX = function(x){
		this.x = x;
	};
	return {
		setX:setX,
		getX:getX,
		doAdd:doAdd,
		doSub:doSub
	}
});