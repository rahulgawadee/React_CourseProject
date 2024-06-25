import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";


const card = (props) => {
    let course = props.course;
    let likedCourse =props.likedCourse;
    let setlikedCourse = props.setlikedCourse;

    function clickHandler() {
        //logic
        if(likedCourse.includes(props.course.id)){
            // it was liked from first
            setlikedCourse((prev) => prev.filter((cid) => cid !== props.course.id));
            toast.warning("like removed sucesfully !");
        }
        else {
            //liked from first
            //Liked kelele course apan Insert kartoo...
            if(likedCourse.length === 0) {
                setlikedCourse([props.course.id]);
            }
            else{

                //non-empty pehle se
                setlikedCourse((prev)=>[...prev, props.course.id]);

            }
            toast.success("Liked Sucesssfully !");


        }
    }

    return(
        <div className='w-[300px]  bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className=''>
            <img src= {course.image.url} alt="images"></img>    
                                                        {/* Ithe course.image.url dila ahe because we importt it from json */}
            </div>

            <div className=' rounded-full  w-[40px] h-[40px] bg-white  right-2 bottom-3 grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likedCourse.includes(course.id) ? (<FcLike  font-size="1.75rem"/>) : (<FcLikePlaceholder  font-size="1.75rem"/>)
                    }
                </button>
            </div>
            
            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6'>{props.course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        props.course.description.length > 100 ? (props.course.description.substring(0, 100) + "...") : (props.course.description)
                    }

                </p>
            </div>
        </div>
    )
}
export default card