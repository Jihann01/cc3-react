import React from 'react'
import { useSelector } from 'react-redux';

export default function ListTodo() {

  const Selecteduser = useSelector(state => state.user.selecteduser);
  const listtaches = useSelector(state => state.todo.data).filter(item => item.firstName===Selecteduser);

  return (
    <div>

        <h1>Liste des Taches</h1>
        {listtaches.length!==0 && 
            listtaches.map(item => <h2>{item.firstName}</h2>)
        }
    </div>
  )
}
