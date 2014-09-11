var output;
$(function(){
    
    var login = document.getElementById('login');
    var logout = document.getElementById('logout');
    var check = document.getElementById('check');
    <!-- These are the notifications that are displayed to the user through pop-ups if the above JS files does not exist in the same directory-->
            if ((typeof cordova == 'undefined') && (typeof Cordova == 'undefined')) alert('Cordova variable does not exist. Check that you have included cordova.js correctly');
            if (typeof CDV == 'undefined') alert('CDV variable does not exist. Check that you have included cdv-plugin-fb-connect.js correctly');
            if (typeof FB == 'undefined') alert('FB variable does not exist. Check that you have included the Facebook JS SDK file.');
            
            FB.Event.subscribe('auth.login', function(response) {
                               output.innerHTML = 'auth.login event fired';
                               });
            
            FB.Event.subscribe('auth.logout', function(response) {
                               output.innerHTML = 'auth.logout event fired';
                               });
            
            FB.Event.subscribe('auth.sessionChange', function(response) {
                               output.innerHTML = 'auth.sessionChange event fired';
                               });
            
            FB.Event.subscribe('auth.statusChange', function(response) {
                               output.innerHTML = 'auth.statusChange event fired';
                               });
            
    
    $('#check').click(function () {
        
        FB.getLoginStatus(function(response) {
                                  if (response.status == 'connected') {
                                   output.innerHTML = 'You are Logged';
                                  } else {
                                  output.innerHTML = 'You are not Logged';
                                  }
                                  });
    });
    $('#logout').click(function () {
                FB.logout(function(response) {
                          output.innerHTML = 'Successfully Logged Out';
                          });
            });
            
            $('#login').click(function () {
                FB.login(
                         function(response) {
                             if (response.status == 'connected') {
                         output.innerHTML = 'Successfully Logged In ';
                             } else {
                                 
                                 output.innerHTML = 'Failed to Login In ';
                             }
                         },
                         { scope: "email" }
                         );
            });
    
    

});
document.addEventListener('deviceready', function(){
    try {
        output = document.getElementById('output');
                                      output.innerHTML ='Device is ready! Make sure you have set your app_id.';
                                      FB.init({ appId: "582945355165168", nativeInterface: CDV.FB, useCachedDialogs: false });
                                      document.getElementById('data').innerHTML = "";
                                      } catch (e) {
                                      output.innerHTML = e;
                                      }
    
    
    $('#my-tab a').click(function (e) {
  e.preventDefault()
  navigator.app.exitApp();
})
    
}, false);