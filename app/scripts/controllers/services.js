angular.module('yapp')
	.service('searchFactory',function(){
		var subcs = [
			{
				_id: 0,
				name: "H S Krishnamurthy",
	    		conNum: "080 - 26612661",
	    		date: "01/01/2003",
	    		subsnperiod: "LIFE",
	    		address: "464, 8th Main, 6th Cross, Hanumanthanagar, Bangalore - 560019"
    		},
    		{
				_id: 1,
				name: "AB",
	    		conNum: "22556614567",
	    		date: "26/26/2006",
	    		subsnperiod: "5cadc",
	    		address: "464, 8th Main, 6th Cross, Hanumanthanagar, Bangalore - 560019"
    		},
    		{
				_id: 2,
				name: "xxxxxxxx",
	    		conNum: "22556614567",
	    		date: "26/26/2006",
	    		subsnperiod: "5cadc",
	    		address: "464, 8th Main, 6th Cross, Hanumanthanagar, Bangalore - 560019"
    		},
    		{
				_id: 3,
				name: "vfdvndjkvk",
	    		conNum: "22556614567",
	    		date: "26/26/2006",
	    		subsnperiod: "5cadc",
	    		address: "464, 8th Main, 6th Cross, Hanumanthanagar, Bangalore - 560019"
    		},
    		{
				_id: 4,
				name: "Niranjna",
	    		conNum: "22556614567",
	    		date: "26/26/2006",
	    		subsnperiod: "5cadc",
	    		address: "464, 8th Main, 6th Cross, Hanumanthanagar, Bangalore - 560019"
    		}
		];

		this.getSubscriber = function(index){
			return subcs[index];
		};

		this.getSubscribers = function(){
			return subcs;
		}

	});