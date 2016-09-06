	function changeImage(id) {
			for( var i = 0; i < imagesArray.length; i++) {
				if(imagesArray[i].id == id) {
					document.getElementById('selectedImage').innerHTML = imagesArray[i].path;
				}
			}
		}	