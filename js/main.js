 function Initialize(){
     jQueryAjax();
 };
//create initialization function
function jQueryAjax(){
        var mydata;
    //assign empty variable
        $.ajax('data/MegaCities.GeoJSON.txt', {
            dataType: 'json',
            success: function(response){
                mydata=response;
                //set what data is to be communicated
                
                console.log(mydata);
                //this will show up since it is within the function
            }
        });
        console.log(mydata);
        //will show up as undefined since it is not in scope
    }

$(document).ready(Initialize);