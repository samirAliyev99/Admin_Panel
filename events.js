import {db,set,ref,onValue,push,remove} from './firebase.js';

const branch_event=ref(db,'/Events');

document.querySelector("#event_submit").addEventListener("click",function(){

    var connection_type=$("#event_name").val();
    var connection_link=$("#event_description").val();

    var obj=push(branch_event);
    set(obj,{
                [connection_type]:connection_link
            })

 })


 onValue(branch_event,function(snapshot){
    var obj=snapshot.val();
    // Identify the exact row
    var row_number=1; 

// Getting data from database
    for (let [key,values] of Object.entries(obj)){
         for (let [key1,name] of Object.entries(values)){
        
               $('<tr>',{
               class:[key1]
           }).appendTo('tbody');

           $('<th>', {
               scope: 'row'
               
           }).html(row_number).appendTo("."+[key1]);
        
           console.log(name);
        $('<td>').html(key1).appendTo("."+[key1]);
        $('<td>').html(name.substring(1,8)).appendTo("."+[key1]);

        // button remove
        $('<button>',{
            class:"btn btn-danger "+key,
            text:"Delete",

        }).appendTo("."+[key1]);

        // button update
        $('<button>',{
            class:"btn btn-warning "+key+"o",
            text:"Update"
        }).appendTo("."+[key1]);

       row_number++;

    //    Delete funtionality
       $("."+key).click(function(){

        remove(ref(db,'/Events/'+key));
        location.reload();

    })

// Update functionality
    $("."+key+"o").click(function(){

            $("#event_name").val([key1]);
            $("#event_description").val([name]);

        remove(ref(db,'/Events/'+key));
        
    })
    


   }
}})
