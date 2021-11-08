import { useState } from "react";
import { INITIAL_FORM_STATE, LECTIONS } from "../TeacherDashboard.constants";

export function Form({onAdd}) {

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

        onAdd(form);

        setForm(INITIAL_FORM_STATE);

        e.preventDefault();
    }

    return (
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
    );
}
