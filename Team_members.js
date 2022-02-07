import {db,set,ref,onValue,push} from './firebase.js';

const branch_courses=ref(db,'/Team_Members');

document.querySelector("#team_member_submit").addEventListener("click",function(){

    var team_member_name=$("#team_member_name").val();
    var team_member_surname=$("#team_member_surname").val();
    var team_member_position=$("#team_member_position").val();
    var team_member_info=$("#team_member_info").val();
    
    
    var obj=push(branch_courses);
    set(obj,{
        team_member_name,
        team_member_surname,
        team_member_position,
        team_member_info
        
            })

 })


