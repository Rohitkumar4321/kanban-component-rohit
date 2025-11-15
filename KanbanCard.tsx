export default function KanbanCard({task}:{task:any}){
 return(<div className='bg-gray-100 p-3 shadow rounded'>{task.title}</div>);
}