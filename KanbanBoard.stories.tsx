import KanbanBoard from './KanbanBoard';import data from '../../sample';
export default {title:'Kanban/KanbanBoard',component:KanbanBoard};
export const Default=()=> <KanbanBoard columns={data.columns} tasks={data.tasks}/>;