	<style>
			.cookie-popup{
				  display: -webkit-flex;
				position: fixed;
					bottom: 20px;
					padding: 10px 0;
				  right: 0px;
				   max-width: 600px;
					background-color: #fff;    	
					box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);    
					transform: translateY(150%);
				-webkit-transform: translateY(150%);
					opacity: 0;
					transition: all 0.8s ease-in-out;
				-webkit-transition: all 0.8s ease-in-out;
					z-index: 999;
			}
			.cookie-popup .container-fluid {
				padding: 0 20px;
			}
			
			.cookie-popup.revealed {
				   transform: translateY(0%);
				-webkit-transform: translateY(0%);
							opacity: 1;
		width:100%;
			}
			
			@media screen and (max-width: 575px) {
				.cookie-popup{
					font-size: 12px;
				}
				.cookie-btn--close {
					font-size: 12px;
					padding: 10px 22px;
				}
				.cookie-popup .flex-col-auto{
					padding-left: 0;
				}
		
			}
			
		
		</style>
		
		<script>
			
		
			(function () {
				var $cPopup = $(
					'<div class="cookie-popup hidden">
						<div class="cookie-popup--inner">
							<div class="container-fluid">
								<div class="flex-row align-items-center">
									<div class="flex-col">
										<div class="cookie-popup--massege">
											<p class="m-0">Cookies are used for measurement, ads and optimization. By continuing to use our site you agree to our 
												<a href="https://www.visithoustontexas.com/privacy-policy/" target="_blank">privacy policy.</a>
											</p>
										</div>
									</div>
									<div class="flex-col-auto pr-0">
										<div class="cookie-popup--close">
											<button type="button" class="btn btn-primary border-0 cookie-btn--close">accept</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>'
				);

				$("body").on("click", ".cookie-popup .btn", function () {
					console.log("i have been clicked")
					$(this)
						.closest(".cookie-popup")
						.removeClass("revealed")
						.delay(500)
						.queue(function () {
							$(this).addClass("hidden");
						});
					setCookie("consentCookie", 30)
					console.log(document.cookie)
				});


				function setCookie(name, value, days) {
					var expires = "";
					if (days) {
						var date = new Date();
						date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
						expires = "; expires=" + date.toUTCString();
					}
					document.cookie = name + "=" + (value || "") + expires + "; path=/";
				}
				function getCookie(name) {
					var nameEQ = name + "=";
					var ca = document.cookie.split(';');
					for (var i = 0; i < ca.length; i++) {
						var c = ca[i];
						while (c.charAt(0) == ' ') c = c.substring(1, c.length);
						if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
					}
					return null;
				}
				function eraseCookie(name) {
					document.cookie = name + '=; Max-Age=-99999999;';
				}

				if (!getCookie("consentCookie")) {
    	$cPopup.appendTo($("body")).removeClass("hidden").addClass("revealed");
  }
  else 
 	{
 	$cPopup.hide()	
	}

			})();
		
				
				
		</script>