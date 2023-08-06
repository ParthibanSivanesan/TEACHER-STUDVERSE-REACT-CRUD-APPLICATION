import React , {useContext} from 'react';
import Base from '../Base';
import { useNavigate, useParams } from 'react-router';
import { TeacherContext } from '../Context/TeacherContext';

function TeacherProfile() {

    const {id} = useParams();
    const {state, dispatch} = useContext(TeacherContext);

    const navigate = useNavigate();

    const currteacher = state.teacherdata.find((teacher)=> teacher.empid === id);

    if(!currteacher){
        return navigate("/teachers");
    }

    
    return (
        <Base title = {"Teachers Profile"} description = {"All Teachers info will be displayed here"}>
                                
                    <div className="stud-collection">
                    <div className="card card-style" style={{width: "20rem", backgroundColor: "rgb(136, 129, 129)"}}>
                    <img className="card-img-top card-profile-img" src={`/images/${currteacher.image}`} alt={currteacher.name} />
                    <div className="card-body">
                    <h4 className="card-title card-name">{currteacher.name}</h4>
                    <p className="card-text"><b>REG NO:</b> {currteacher.regno}</p>
                    <p className="card-text"><b>DOMAINS:</b> {currteacher.domain}</p>
                    <p className="card-text"><b>EXPERIENCE:</b> {currteacher.experience}</p>
                    <p className="card-text"><b>BATCH:</b> {currteacher.batch}</p>
                    <p className="card-text"><b>EDUCATION:</b> {currteacher.education}</p>
                    <p className="card-text"><b>GENDER:</b> {currteacher.gender}</p>
                    <div className="card-btn-grp">
                    <button className="btn btn-light" onClick={()=>navigate(`/edit-teacher/${currteacher.empid}`)}>Edit</button>
                    <button className="btn btn-light" onClick={()=> dispatch({type: "Delete-Teacher", payload: currteacher.empid})}>Delete</button>
                    </div>
                    </div>
                    </div>   
                    </div> 
        </Base>
    );
}

export default TeacherProfile;