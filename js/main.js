 function Initialize(){
     jQueryAjax();
 };
    
function jQueryAjax(){
        var mydata;

        $.ajax('data/MegaCities.GeoJSON.txt', {
            dataType: 'json',
            success: function(response){
                mydata=response;
                
                console.log(mydata);
            }
        });
        console.log(mydata);
    }

$(document).ready(Initialize);