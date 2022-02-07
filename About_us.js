import {db,set,ref,onValue,push,remove} from './firebase.js';

const branch_about=ref(db,'/About_us');

document.querySelector("#about_submit").addEventListener("click",function(){

    var connection_type=$("#about_name").val();
    var connection_link=$("#about_content").val();

    var obj=push(branch_about);
    set(obj,{
                [connection_type]:connection_link
            })

 })

 onValue(branch_about,function(snapshot){
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
        $('<td>').html(name).appendTo("."+[key1]);

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

        remove(ref(db,'/About_us/'+key));
        location.reload();

    })

// Update functionality
    $("."+key+"o").click(function(){

            $("#about_name").val([key1]);
            $("#about_content").val([name]);

        remove(ref(db,'/About_us/'+key));
        
    })
    


   }
}})


