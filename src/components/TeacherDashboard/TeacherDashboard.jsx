import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form } from './Form/TeacherDashboard-Form';
import { List } from './List/TeacherDashboard-List';

function TeacherDashboard() {
    const [homeworks, setHomeworks] = useState([]);

    console.log(homeworks);

    const onAddHomework = (homework) => {
        setHomeworks(prev => [...prev, {
            ...homework,
            id: uuidv4(),
            status: 'NEW',
        }]);
    }
    
    return (
        <div className="TeacherDashboard">
            <List homeworks={homeworks} />
            <Form onAdd={onAddHomework} />
        </div>
    );
}

export default TeacherDashboard;