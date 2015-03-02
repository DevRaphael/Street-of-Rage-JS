		//Initialisation

			var position = 0;
			var animationPosition = 0;
			var limiteGauche = -40;
			var limiteDroite = 600;
			var animationGauche;
			var animationDroite;
			var deplacementGauche;
			var deplacementDroite;
			var deplacement = true;
			var animation = true;
			
		//classe Animation (position du sprite)
		
			var animationPos = function(width,left,top){
				this.containerWidth = width;
				this.spriteLeft = left;
				this.spriteTop = top;
			};
			
		//enregistrement des coordonnées des positions des sprites
		
			var positionInitiale = new animationPos(44,-15,-6);
			var marche1 = new animationPos(22,-15,-90);
			var marche2 = new animationPos(39,-43,-90);
			var marche3 = new animationPos(22,-95,-90);
			var marche4 = new animationPos(39,-125,-90);
			
		//fonction marcher gauche
			
			window.onload = function(){
			
				//apparition du jeu
				var cheminMegadrive = window.document.getElementById('page-megadrive'); 
				var opacite = 0;
				
				var apparaitre = function(){
					cheminMegadrive.style.opacity = opacite;
					opacite += 0.01;
					if(opacite>=1){
						clearInterval(apparition);
					};
				};
				
				var apparition = setInterval(apparaitre,50);
			
			
				//enregistrement des chemins du DOM	
				var cheminDiv = document.getElementById("container");
				var cheminImg = document.getElementById("contenu");
				var cheminDivContainer = document.getElementById("id-masque-container");
				
				
				
				//fonction d'animation
				
				var animerGauche = function(){
				
					if(cheminDiv.style.transform == "scaleX(1)" || cheminDiv.style.transform == ""){
						cheminDiv.style.transform = "scaleX(-1)";
					};
								
					if(animationPosition == 0){
						cheminDiv.style.width = marche3.containerWidth + 'px';
						cheminImg.style.left = marche3.spriteLeft + 'px';
						cheminImg.style.top = marche3.spriteTop + 'px';
						animationPosition = 1;
					}else{
						if(animationPosition == 1){
							cheminDiv.style.width = marche2.containerWidth + 'px';
							cheminImg.style.left = marche2.spriteLeft + 'px';
							cheminImg.style.top = marche2.spriteTop + 'px';
							animationPosition = 2;
						}else{
							if(animationPosition == 2){
								cheminDiv.style.width = marche1.containerWidth + 'px';
								cheminImg.style.left = marche1.spriteLeft + 'px';
								cheminImg.style.top = marche1.spriteTop + 'px';
								animationPosition = 3;
							}else{	
								if(animationPosition == 3){
									cheminDiv.style.width = marche4.containerWidth + 'px';
									cheminImg.style.left = marche4.spriteLeft + 'px';
									cheminImg.style.top = marche4.spriteTop + 'px';
									animationPosition = 0;		
								};
							};
						};
					};
				};
			
			
			//fonction d'animation
			
			var animerDroite = function(){
			
				if(cheminDiv.style.transform == "scaleX(-1)" || cheminDiv.style.transform == ""){
					cheminDiv.style.transform = "scaleX(1)";
				};
							

				if(animationPosition == 0){
					cheminDiv.style.width = marche3.containerWidth + 'px';
					cheminImg.style.left = marche3.spriteLeft + 'px';
					cheminImg.style.top = marche3.spriteTop + 'px';
					animationPosition = 1;
				}else{
					if(animationPosition == 1){
						cheminDiv.style.width = marche2.containerWidth + 'px';
						cheminImg.style.left = marche2.spriteLeft + 'px';
						cheminImg.style.top = marche2.spriteTop + 'px';
						animationPosition = 2;
					}else{
						if(animationPosition == 2){
							cheminDiv.style.width = marche1.containerWidth + 'px';
							cheminImg.style.left = marche1.spriteLeft + 'px';
							cheminImg.style.top = marche1.spriteTop + 'px';
							animationPosition = 3;
						}else{	
							if(animationPosition == 3){
								cheminDiv.style.width = marche4.containerWidth + 'px';
								cheminImg.style.left = marche4.spriteLeft + 'px';
								cheminImg.style.top = marche4.spriteTop + 'px';
								animationPosition = 0;
							};
						};
					};
				};
			};
			
			
			
			//fonctions de déplacements
			
			var vitesse = 1;
			
			var marcherDroite = function(){
						
				if(position < limiteDroite){
					position += vitesse;
					cheminDivContainer.style.left = position + 'px';
				};
			};
		

			var marcherGauche = function(){
						
				if(position > limiteGauche) {
					position -= vitesse;
					cheminDivContainer.style.left = position + 'px';	
				};
			};
				
			
				window.onkeydown = function(event){

					var code = event.keyCode;
				
					//appui des touches du clavier
					
					switch(code){
					
						case 37:
							//gauche
						
						if(animation == true){
							animerGauche();
							animationGauche = setInterval(animerGauche, 250);
							animation = false;
						};
						//var actionGauche = setInterval(marcherGauche, 100);
						if(deplacement == true){
							marcherGauche();
							deplacementGauche = setInterval(marcherGauche, 10);
							deplacement = false;
						};
						break;
						
						
						case 38:
							//haut
						break;
						

						case 39:
							//droite
						
						if(animation == true){
							animerDroite();
							animationDroite = setInterval(animerDroite, 250);
							animation = false;
						};
						//var actionDroite = setInterval(marcherDroite, 100);
						if(deplacement == true){
							marcherDroite();
							deplacementDroite = setInterval(marcherDroite, 10);
							deplacement = false;
						};
						break;
						
						
						case 40:
							//bas
						break;
					};

				};
				
				//quand on relache les touches
				
				window.onkeyup = function(){
					
					//on arrête le déplacement
					clearInterval(deplacementGauche);
					clearInterval(deplacementDroite);
					clearInterval(animationDroite);
					clearInterval(animationGauche);
					deplacement = true;
					animation = true;
					
					//on switche sur la position initiale du sprite
					cheminDiv.style.width = positionInitiale.containerWidth + 'px';
					cheminImg.style.left = positionInitiale.spriteLeft + 'px';
					cheminImg.style.top = positionInitiale.spriteTop + 'px';
					
					//on remet la position de l'animation à 0
					animationPosition = 0;
						
				};

			};