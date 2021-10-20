import {TODO} from "./components/TODO";

export const App = () => {
  const todos =[
    {title:"first list to do",details:"my first list todo"},
    {title:"second list to do",details:"my second list todo"},
    {title:"third list to do",details:"my third list todo"},
    {title:"fourth list to do",details:"my fourth list todo"},
    
  ];
  return (
    <div>
      <h1> Welcome to my to do list</h1>
    
  {todos.map((todo)=>(
    <TODO title={todo.title} details={todo.details}/>
  ))}
    </div>
  );
};
