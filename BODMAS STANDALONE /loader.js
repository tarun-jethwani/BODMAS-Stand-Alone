var preload=document.getElementById("loader");
	var loading=0;
	var id= setInterval(frame,90);
	function frame()
	{
		if (loading ==100)
		 {

			clearInterval(id);
			window.location="level.html";
		   }
		else{
			loading=loading+2;
			if (loading==90)
			 {
				preload.style.animation="fadeout 1s ease";
			  }
		   }


	}
