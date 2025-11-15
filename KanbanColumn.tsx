import KanbanCard from './KanbanCard';
export default function KanbanColumn({column,tasks}:{column:any,tasks:any[]}){
 return(<div className='w-72 bg-white p-3 rounded-lg shadow'>
  <h2 className='font-semibold text-lg mb-3'>{column.title}</h2>
  <div className='flex flex-col gap-2'>{tasks.map(t=><KanbanCard key={t.id} task={t}/>)}</div>
 </div>);
}