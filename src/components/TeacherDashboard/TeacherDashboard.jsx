import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Filter } from './Filter/TeacherDashboard-Filter';
import { Form } from './Form/TeacherDashboard-Form';
import { List } from './List/TeacherDashboard-List';

function TeacherDashboard() {
    const [homeworks, setHomeworks] = useState([]);
    const [filter, setFilter] = useState('');

    console.log(homeworks);

    const onAddHomework = (homework) => {
        setHomeworks(prev => [...prev, {
            ...homework,
            id: uuidv4(),
            status: 'NEW',
        }]);
    }

    const onHomeworkStatusChange = (statusChangeData) => {
        const { id, status } = statusChangeData;

        setHomeworks(prev => prev.map(homework => {
            if (homework.id === id) {
                homework.status = status;
            }
            return homework;
        }));
    }

    const onFilterChange = (filter) => setFilter(filter);

    const filteredHomeworks = filter ? homeworks.filter(homework => homework.status === filter) : homeworks;
    
    return (
        <div className="TeacherDashboard">
            <Filter onFilter={onFilterChange} />
            <List homeworks={filteredHomeworks} onHomeworkStatusChange={onHomeworkStatusChange} />
            <Form onAdd={onAddHomework} />
        </div>
    );
}

export default TeacherDashboard;