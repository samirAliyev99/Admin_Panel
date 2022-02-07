import {db,set,ref,onValue,push,remove} from './firebase.js';
const branch=ref(db,'/Contact_Information');

document.querySelector("#connection_submit").addEventListener("click",function(){

    var connection_type=$("#connection_type").val();
    var connection_link=$("#connection_link").val();

    var obj=push(branch);
    set(obj,{
                [connection_type]:connection_link
            })

 })

 onValue(branch,function(snapshot){
    var obj=snapshot.val();
    // Identify the exact row
    var row_number=1; 

// Gettind data from database
    for (let [key,values] of Object.entries(obj)){
         for (let [key1,name] of Object.entries(values)){
        
               $('<tr>',{
               class:[key1]
           }).appendTo('tbody');

           $('<th>', {
               scope: 'row'
               
           }).html(row_number).appendTo("."+[key1]);
        
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

        remove(ref(db,'/Contact_Information/'+key));
        location.reload();

    })


    $("."+key+"o").click(function(){

            $("#connection_type").val([key1]);
            $("#connection_link").val([name]);

        remove(ref(db,'/Contact_Information/'+key));
        
    })
    


   }
}

//      for (let [key,values] of Object.entries(obj)){

//          console.log(values)

//         for (var [key1,name] of Object.entries(values)){
//          console.log(key1+"_"+name);
         
//             $('<tr>').appendTo('tbody');

//             $('<th>', {
//                 scope: 'row',
                
//             }).html(row_number).appendTo('tbody tr');

            
         
//          $('<td>').html(key1).appendTo('tbody tr');
//          $('<td>').html(name).appendTo('tbody tr');
//         row_number++;
//     }
// }
     


    
 })








