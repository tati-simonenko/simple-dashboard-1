import { STATUSES } from "../TeacherDashboard.constants";

export function Filter({onFilter}) {

    const onFilterChange = (e) => onFilter(e.target.value);

    return (
        <div className="TeacherDashboard-Filter">
            <select 
                className="TeacherDashboard-Control"
                onChange={onFilterChange}
            >
                <option value="">No filter</option>
                {Object.keys(STATUSES).map(status => (
                    <option value={status} key={status}>{STATUSES[status]}</option>
                ))}
            </select>
        </div>
    );
}
