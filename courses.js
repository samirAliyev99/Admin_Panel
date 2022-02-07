import {db,set,ref,onValue,push} from './firebase.js';

const branch_courses=ref(db,'/Courses');

document.querySelector("#course_submit").addEventListener("click",function(){

    var course_name=$("#course_name").val();
    var course_duration=$("#course_duration").val();
    var course_seats=$("#course_seats").val();
    var course_information=$("#course_information").val();
    var course_participants=$("#course_participants").val();
    var course_program=$("#course_program").val();
    
    var course_skills=$("#course_skills").val();
    var course_assigned_instructors=$("#course_assigned_instructors").val();
    
    var obj=push(branch_courses);
    set(obj,{
        course_name,
        course_duration,
        course_seats,
        course_information,
        course_participants,
        course_program,
        course_skills,
        course_assigned_instructors
            })

 })


