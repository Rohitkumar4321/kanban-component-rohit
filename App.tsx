import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import data from './sample';
export default function App()
{
  return(<div className='p-6'><KanbanBoard columns={data.columns} tasks={data.tasks}/></div>);
}
