import React , {useContext, useState} from 'react';
import Base from '../Base';
import { useNavigate } from 'react-router';
import { TeacherContext } from '../Context/TeacherContext';

function AddTeachers() {

    const {dispatch} = useContext(TeacherContext)

    const navigate = useNavigate();

    const[image, setImage] = useState('');
    const [empid, setEmpId] = useState('');
    const [regno, setRegNo] = useState('');
    const [name, setName] = useState('');
    const [batch, setBatch] = useState('');
    const [education, setEducation] = useState('');
    const [gender, setGender] = useState('');
    const [domain, setDomain] = useState('');
    const [experience, setExperience] = useState('');

    const addTeacher = (e)=>{
        e.preventDefault();
        const newTeacher = {
            image,
            empid,
            regno,
            name,
            domain,
            education,
            gender,
            batch,
            experience
        }
        dispatch({type: "Add-Teacher", payload: newTeacher});
        navigate("/teachers");
    }

    return (
        <Base title = {"Add New Teacher Details"} description = {"Update all the fields to add new Teacher details"}>
            <h2 className="App">Add New Teacher</h2>
            <span className="main-card-style" >
                <form className="form-class">
                <div className="form-group mx-sm-3 mb-2 inp-bar">

                <div className="wrapper">
                    <label for="profile" id="profile">Choose Profile</label><br></br>
                    <input type="radio" id="TMale1" name="profile" value="TMale1" onChange={(e)=>setImage(e.target.value + '.jpg')}></input>
                    <label for="TMale1">TMale1</label>
                    <input type="radio" id="Tmale2" name="profile" value="Tmale2" onChange={(e)=>setImage(e.target.value + '.jpg')}></input>
                    <label for="TMale2">Tmale2</label>
                    <input type="radio" id="Tmale3" name="profile" value="Tmale3" onChange={(e)=>setImage(e.target.value + '.jpg')}></input>
                    <label for="Tmale3">Tmale3</label>
                    <input type="radio" id="TFemale1" name="profile" value="TFemale1" onChange={(e)=>setImage(e.target.value + '.jpg')}></input>
                    <label for="TFemale1">TFemale1</label>
                    <input type="radio" id="TFemale2" name="profile" value="TFemale2" onChange={(e)=>setImage(e.target.value + '.jpg')}></input>
                    <label for="TFemale2">TFemale2</label>
                    <input type="radio" id="TFemale3" name="profile" value="TFemale3" onChange={(e)=>setImage(e.target.value + '.jpg')}></input>
                    <label for="TFemale3">TFemale3</label>
                    </div>

                    <label for="ID">Employee Id</label>
                    <input className="form-control "  placeholder="Enter Employee Id" value={empid} id="empid" onChange={(e)=>setEmpId(e.target.value)} required ></input>
                    <label for="ID">Reg No</label>
                    <input className="form-control "  placeholder="Enter Employee RegNo" value={regno} id="regno" onChange={(e)=>setRegNo(e.target.value)} required ></input>
                    <label for="name">Name</label>
                    <input className="form-control"  placeholder="Enter Name" value={name} id="name" onChange={(e)=>setName(e.target.value)} required ></input>
                    <label for="batch">Domain</label>
                    <input className="form-control"  placeholder="Enter Your Domain" value={domain} id="batch" onChange={(e)=>setDomain(e.target.value)} required ></input>
                    <label for="education">Education</label>
                    <input className="form-control"  placeholder="Enter Education" value={education} id="education" onChange={(e)=>setEducation(e.target.value)} required ></input>
                    <label for="experience">Experience</label>
                    <input className="form-control"  placeholder="Enter Experience" value={experience} id="experience" onChange={(e)=>setExperience(e.target.value)} required ></input>
                    <label for="batch">Batch</label>
                    <input className="form-control"  placeholder="Enter Batch handling" value={batch} id="batch" onChange={(e)=>setBatch(e.target.value)}required  ></input>
                    <label for="gender">Gender</label>
                    <input className="form-control"  placeholder="Enter Gender" value={gender} id="gender" onChange={(e)=>setGender(e.target.value)} required ></input>
                    <div className="nav-btn-group">
                        <button className="btn btn-dark" onClick={(e)=>addTeacher(e)}>Add</button>
                    </div>
                </div>
            </form>
            </span>

        
        </Base>
    );
}

export default AddTeachers;