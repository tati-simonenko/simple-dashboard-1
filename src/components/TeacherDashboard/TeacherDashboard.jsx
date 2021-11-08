import { useState } from "react";

const LECTIONS = [
    'Events, State', 
    'Forms'
];

const INITIAL_FORM_STATE = {
    name: '',
    lection: '',
}

function TeacherDashboard() {
    const [homeworks, setHomeworks] = useState([]);
    const [form, setForm] = useState(INITIAL_FORM_STATE);

    const onFieldChange = (e) => {
        console.log('onFieldChange');

        const { target } = e;

        setForm(prev => ({ 
            ...prev, 
            [e.target.name]:target.type === 'checkbox' ? target.checked : target.value 
        }));
    }

    const onAddHomework = (e) => {
        console.log('onAddHomework');
        console.log(form);
        e.preventDefault();
    }
    
    return (
        <div className="TeacherDashboard">
            <form className="TeacherDashboard-Form" onSubmit={onAddHomework}>
                <div className="TeacherDashboard-Field">
                    <label>Name: </label>
                    <input 
                        className="TeacherDashboard-Control"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={onFieldChange}
                    />
                </div>
                <div className="TeacherDashboard-Field">
                    <label htmlFor="lection">Lection: </label>
                    <select 
                        className="TeacherDashboard-Control"
                        name="lection"
                        id="lection"
                        value={form.lection}
                        onChange={onFieldChange}
                    >
                    <option value="">Choose ...</option>
                    {LECTIONS.map(lection => (
                        <option value={lection} key={lection}>{lection}</option>
                    ))}
                </select>
            </div>
            </form>
        </div>
    );
}

export default TeacherDashboard;