import React, { useContext } from 'react';
import Base from '../Base';
import { useNavigate } from 'react-router';
import { TeacherContext } from '../Context/TeacherContext';

function Teachers() {

    const {state, dispatch} = useContext(TeacherContext)

    const navigate = useNavigate();

    return (
        <Base title = {"Teachers Info"} description = {"All Teachers info will be displayed here"}>
            <div className="teacher-collection ">
             <table className="table table-hover table-dark" >
                    <thead>
                        <tr>
                        <th scope="col">EmpId</th>
                        <th scope="col">Reg No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Domain</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                {state.teacherdata.map((teacher, idx)=>(
                
                
                    <tbody className="" key={idx}>
                        <tr>
                        <th className="bg-secondary" scope="row">{teacher.empid}</th>
                        <td className="bg-secondary">{teacher.regno}</td>
                        <td className="bg-secondary">{teacher.name}</td>
                        <td className="bg-secondary">{teacher.domain}</td>
                        <td className="bg-secondary"> <button className="btn btn-light" onClick={()=>navigate(`/teacher-profile/${teacher.empid}`)}>View Profile</button></td>
                        <td className="bg-secondary"> <button className="btn btn-light emp-button" onClick={()=>navigate(`/edit-teacher/${teacher.empid}`)}>Edit</button></td>
                        <td className="bg-secondary"><button className="btn btn-light emp-button" onClick={()=> dispatch({type: "Delete-Teacher", payload: teacher.empid}) }>Delete</button></td>
                        </tr>
                    </tbody>
                 ))}
            </table>
                              
            
           
            </div>
        </Base>
    );
}

export default Teachers;