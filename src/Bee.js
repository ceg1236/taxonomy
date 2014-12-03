var Bee = function() {
	// var bee = Grub();
	this.age = 5;
	this.color = 'yellow';
	this.job = "Keep on growing";
	// return bee; 


};
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Grub;


