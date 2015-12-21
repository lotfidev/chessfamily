function myFunction() {
    
    var name = document.getElementById("name").value;
    var last_name = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password_conf = document.getElementById("password_conf").value;
    var birthday = document.getElementById("birthday").value;
    var genre = document.getElementById("genre").value;
    
// Returns successful data submission message when the entered information is stored in database.
    var dataString = 'authentication=chessfemily&action=member_add&name='+name+'&last_name='+last_name + 
                     '&email='+email+'&password='+password + 
                     '&password_conf='+password_conf+'&birthday='+birthday +
                     '&genre='+genre;

    if ((name == '') && (last_name == '') && (email == ''))
    {
        $('.info_requis').fadeIn();
    }
    else
    {
//AJAX code to submit form.
        var HOST = "http://epavia.com/proxy/";
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          data: dataString,
          dataType: 'jsonp',
          jsonpCallback: 'member_add',
          url: HOST + "MemberWebService/memberAdd.php",
          success:function(result){
                  if(result.success == 1){
                      //$('.testlogin').html(' success connexion');
                      $('.info_requis').fadeOut();
                      $('.inscritok').fadeIn();
                      $('.inscritok').fadeOut(4000);
                  }else{
                      $('.info_requis').fadeIn();
                  }

                  
          }
        });
        
    }
    return false;
}