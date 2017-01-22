angular.module('yapp')
	.service('searchFactory',function(){
		var subcs = [
			{
				_id: 0,
				name: "A",
	    		conNum: "6614567",
	    		date: "26/26/26",
	    		subsnperiod: "5",
	    		address: "qwewtytui"
    		},
    		{
				_id: 1,
				name: "AB",
	    		conNum: "22556614567",
	    		date: "26/26/2qwq6",
	    		subsnperiod: "5cadc",
	    		address: "qwewtytuicacccdac"
    		}
		];

		this.getSubscriber = function(index){
			return subcs[index];
		};

	});