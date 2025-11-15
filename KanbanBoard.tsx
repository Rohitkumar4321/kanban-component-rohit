import { KanbanViewProps } from './KanbanBoard.types';import KanbanColumn from './KanbanColumn';
export default function KanbanBoard({columns,tasks}:KanbanViewProps){
 return(<div className='flex gap-4 overflow-x-auto'>
 {columns.map(col=>(
  <KanbanColumn key={col.id} column={col} tasks={col.taskIds.map(id=>tasks[id])}/>
 ))}
 </div>);
}