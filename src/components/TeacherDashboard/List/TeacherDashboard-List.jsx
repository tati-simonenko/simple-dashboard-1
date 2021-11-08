import { STATUSES } from "../TeacherDashboard.constants";

export function List({homeworks}) {
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
                            {STATUSES[homework.status]}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
