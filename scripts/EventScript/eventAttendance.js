$(document).ready(function(){

    /* variable host declarer dans templateGenerator.js */
	var urlWS = "http://api.chessfamily.net/api/query";
	var id_utilisateur = sessionStorage.getItem("identifiant");//5;
	var e_id = url.substring(url.lastIndexOf("=")+1);//1;
	
    function EventAttendance() {
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"event_attendance",
				member_id:id_utilisateur,
				event_id:e_id,
				perpage:3,
				page:1
				},
            dataType:"json",
          success:function(result){
                 $.each(result.event_attendance, function (index, item) { 
					$('#attendanceList').append("<p><span><img src='"+item.photo+"' class='img-circle' width='50'></span>&nbsp;&nbsp;&nbsp;<span><b>"+item.name+" "+item.last_name+"</b></span></p>");
				});
				//alert(result.event_attendance.toSource());          
          }
        });
    }

    EventAttendance();
});
