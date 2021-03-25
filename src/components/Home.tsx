import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify'

import { IUser } from '../store/modules/user/types';
import { addNewUser } from '../store/modules/user/actions';

const Home: React.FC = () => {
    const dispatch = useDispatch()

    const [ name, setName] = useState('');
    const [ email, setEmail ] = useState('');
    const [ age, setAge ] = useState('');
    const [ allUsers, setAllUser ] = useState<IUser[]>( () => {
        const usersStorage = localStorage.getItem('@tester')
        if (usersStorage){
            return JSON.parse(usersStorage)
        }
        return []
    }) 

    useEffect(() => {
        allUsers.map( user => dispatch((addNewUser(user))) )
    }, [allUsers])

    function hadleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log(Math.random())
        toast.success('Formulário acionado!!')
        localStorage.setItem('@tester', JSON.stringify([...allUsers, { name,  email, age }]));
        setAllUser([...allUsers, { name,  email, age }])
    }

    return (
        <div>
            <h1>Alunos Accentnure 2.1</h1>
            <div>
                <form onSubmit={ hadleSubmit }>
                    <input onChange={ e => setName( e.target.value )} placeholder="Nome do aluno" type="text" name="name"/>
                    <input onChange={ e => setEmail( e.target.value )} placeholder="Email" type="text" name="email" />
                    <input onChange={ e => setAge( e.target.value )} placeholder="Idade" type="number" name="age"/>
                    <input type="submit" value="cadastrar" />
                </form>

                <div>
                { allUsers.map( (user, index) => (
                  <div key={index}>
                      <h2>{user.name}</h2>
                  </div>  
                ))}
                </div>

                {/* { users.map( user => (
                    <div key={user.id}>
                        <article>
                            <p> { user.name } | { user.email } | { user.age }</p>
                            <button onClick={ () => handleUsers(user) }> Adicionar </button>
                        </article>
                    </div>
                ))} */}
            </div>
        </div>
    );
}

export default Home;