import React, { createContext, useReducer } from 'react';
import { teacherdata } from '../Data/teachers';
import Teachers from '../Teachers';
import AddTeachers from '../AddTeachers';
import EditTeachers from '../EditTeachers';

const teacherDetails = {
    teacherdata,
}

export const TeacherContext = createContext();


function teacherReducer(state, action){
    switch(action.type){
        case "Add-Teacher":
            return{
                ...state,
                teacherdata: [...state.teacherdata, action.payload],
            };
        case "Edit-Teacer":
            return{
                ...state,
                teacherdata: [...state.teacherdata, action.payload],
            }
        case "Delete-Teacher":
            return{
                ...state,
                teacherdata: state.teacherdata.filter((teacher)=>teacher.empid !== action.payload),
            };
        default:
            return state; 
    }

}

export function TeacherProvider({children}){

    const [state, dispatch] = useReducer(teacherReducer, teacherDetails);

    return(
        <TeacherContext.Provider value={{state, dispatch}}>
            {children}
            {Teachers}
            {AddTeachers}
            {EditTeachers}
        </TeacherContext.Provider>

    )
}


