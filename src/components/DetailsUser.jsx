import React from 'react'
import { useSelector } from 'react-redux'

export default function DetailsUser() {

  const Selecteduser = useSelector(state => state.user.selecteduser);
  const user = useSelector(state => state.user.data).filter(item => item.firstName===Selecteduser);

  return (
    <div>
        {user.length!==0 && 
            <div>
                <img src={require("../images/user.png")} alt="" />
                <h3>Nom : {user[0].firstName}</h3>
                <h3>Prenom : {user[0].lastName}</h3>
                <h3>Age : {user[0].age}</h3>
                <h3>Genre : {user[0].gender}</h3>
                <h3>Email : {user[0].email}</h3>
                <h3>Phone : {user[0].phone}</h3>
                <h3>Email : {user[0].email}</h3>
                <h3>Hauteur : {user[0].height}</h3>
                <h3>Poids: {user[0].width}</h3>
                <h3>Colour des eyeux : {user[0].eyecolor}</h3>
                <h3>Date de naissance : {user[0].birthDate}</h3>
            </div>
        }
    </div>
  )
}

