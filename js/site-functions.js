//  ========== 
//  = Custom JS and jQuery = 
//  ========== 


jQuery(document).ready(function($) {
	
		$('.home-icon').click(function(){
		$('.home-icon').hide();
		$('.home-icon').delay(500).fadeIn();
		$('.carousel').fadeOut('fast');
		$('#myCarousel').fadeIn('fast');
		});
		
		$('.new-ob-visit').click(function(){
		$('#myCarousel').fadeOut('fast');
		$('#newObVisit').fadeIn('fast');
		//return false;
		});
		
		$('#newObVisit .left.first').click(function(){
		$('#newObVisit').fadeOut('fast');
		$('#myCarousel').fadeIn('fast');
		return false;
		});
		
		$('#below34').click(function(){
		$('#newObVisit').fadeOut('fast');
		$('#ageBelow34').fadeIn('fast');
		return false;
		});
		$('#ageBelow34 .left').click(function(){
			$('#ageBelow34').fadeOut('fast');
			$('#newObVisit').fadeIn('fast');
			});
		
		$('#above34').click(function(){
		$('#newObVisit').fadeOut('fast');
		$('#ageAbove34').fadeIn('fast');
		return false;
		});
		$('#ageAbove34 .left').click(function(){
			$('#ageAbove34').fadeOut('fast');
			$('#newObVisit').fadeIn('fast');
			});
			
		$('#transferofcare').click(function(){
		$('#newObVisit').fadeOut('fast');
		$('#transferCare').fadeIn('fast');
		return false;
		});
		$('#transferCare .left.first').click(function(){
			$('#transferCare').fadeOut('fast');
			$('#newObVisit').fadeIn('fast');
			});
			
		$('#highRiskLink').click(function(){
		$('#newObVisit').fadeOut('fast');
		$('#highRisk').fadeIn('fast');
		return false;
		});
		$('#highRisk .left').click(function(){
			$('#highRisk').fadeOut('fast');
			$('#newObVisit').fadeIn('fast');
			});
			
		$('#geneticAbnormalityLink').click(function(){
		$('#highRisk').fadeOut('fast');
		$('#geneticAbnormality').fadeIn('fast');
		return false;
		});
		$('#geneticAbnormality .left').click(function(){
			$('#geneticAbnormality').fadeOut('fast');
			$('#highRisk').fadeIn('fast');
			});
			
		$('#southeastAsianLink').click(function(){
		$('#highRisk').fadeOut('fast');
		$('#southeastAsian').fadeIn('fast');
		return false;
		});
		$('#southeastAsian .left').click(function(){
			$('#southeastAsian').fadeOut('fast');
			$('#highRisk').fadeIn('fast');
			});
			
		$('#cajunAsjkenaziLink').click(function(){
		$('#highRisk').fadeOut('fast');
		$('#cajunAsjkenazi').fadeIn('fast');
		return false;
		});
		$('#cajunAsjkenazi .left').click(function(){
			$('#cajunAsjkenazi').fadeOut('fast');
			$('#highRisk').fadeIn('fast');
			});
			
		$('#obesePatientLink').click(function(){
		$('#highRisk').fadeOut('fast');
		$('#obesePatient').fadeIn('fast');
		return false;
		});
		$('#obesePatient .left').click(function(){
			$('#obesePatient').fadeOut('fast');
			$('#highRisk').fadeIn('fast');
			});
			
		$('.ob-visit').click(function(){
		$('#myCarousel').fadeOut('fast');
		$('#ObVisit').fadeIn('fast');
		return false;
		});
		  $('#ObVisit .left.first').click(function(){
		  $('#ObVisit').fadeOut('fast');
		  $('#myCarousel').fadeIn('fast');
		  });
		
		$('#1113WeeksLink').click(function(){
		$('#ObVisit').fadeOut('fast');
		$('#1113Weeks').fadeIn('fast');
		//return false;
		});
		  $('#1113Weeks .left').click(function(){
		  $('#1113Weeks').fadeOut('fast');
		  $('#ObVisit').fadeIn('fast');
		  });
		 
		$('#transferCare .refer-obvisit, #newObVisit .refer-obvisit').click(function(){
		$('#transferCare, #newObVisit').fadeOut('fast');
		$('#ObVisit').fadeIn('fast');
		//return false;
		});
		 
		/*$('#1520WeeksLink').click(function(){
		$('#ObVisit').fadeOut('fast');
		$('#1520Weeks').fadeIn('fast');
		return false;
		});
		  $('#1520Weeks .left').click(function(){
		  $('#1520Weeks').fadeOut('fast');
		  $('#ObVisit').fadeIn('fast');
		  });*/
		  
		/*$('#2428WeeksLink').click(function(){
		$('#ObVisit').fadeOut('fast');
		$('#2428Weeks').fadeIn('fast');
		return false;
		});
		  $('#2428Weeks .left').click(function(){
		  $('#2428Weeks').fadeOut('fast');
		  $('#ObVisit').fadeIn('fast');
		  });*/
		
		$('#3438WeeksLink').click(function(){
		$('#ObVisit').fadeOut('fast');
		$('#3438Weeks').fadeIn('fast');
		});
		  $('#3438Weeks .left').click(function(){
		  $('#3438Weeks').fadeOut('fast');
		  $('#ObVisit').fadeIn('fast');
		  });
	
	$('.carousel-control').click(function(){
		$('.mastfoot').hide();
		$('.mastfoot').delay(500).fadeIn();
		$('.home-icon').hide();
		$('.home-icon').delay(500).fadeIn();
		});
	
	});