import { STATUSES } from "../TeacherDashboard.constants";
import './TeacherDashboard-List.css';

export function List({ homeworks, onHomeworkStatusChange }) {

    const onStatusChange = (id) => {
        return (e) => {
            const status = e.target.value;

            onHomeworkStatusChange({ id, status });
        }
    }

    return (
        <div className="TeacherDashboard-List">
            {
                homeworks.map(homework => (
                    <div 
                        key={homework.id}
                        className="TeacherDashboard-ListItem"
                    >
                        <div className="TeacherDashboard-ListItemName">
                            {homework.name}
                        </div>
                        <div className="TeacherDashboard-ListItemLection">
                            {homework.lection}
                        </div>
                        <div className="TeacherDashboard-ListItemStatus">
                        <select 
                            className="TeacherDashboard-Control"
                            name="lection"
                            id="lection"
                            value={homework.status}
                            onChange={onStatusChange(homework.id)}
                        >
                            <option value="">Choose ...</option>
                            {STATUSES.map(status => (
                                <option value={status} key={status}>{STATUSES[status]}</option>
                            ))}
                        </select>
                        {STATUSES[homework.status]}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
