import { PRIVILAGE, user } from "../constants/types";
import { USERS } from "../constants/users";

const users: Array<user> = [...USERS];

export const findUsers = (): Array<user> => {
  return users;
};

export const findUsersByType = (type: PRIVILAGE): Array<user> => {
  const usersPerType: Array<user> = users.filter((user) => {
    return user.type === type;
  });

  return usersPerType;
};

export const findUserByName = (name: string): user | undefined => {
  const userPerName: user | undefined = users.find((user) => {
    return user.name.toUpperCase() === name.toUpperCase();
  });

  return userPerName;
};

export const createUser = (
  name: string,
  age: number,
  email: string,
  type: PRIVILAGE
): user => {
  const isAlreadyExists: boolean = users.some((user) => {
    return user.email === email;
  });

  if (isAlreadyExists) {
    throw new Error("The email already exists");
  }

  const newUser: user = {
    age: age,
    name: name,
    email: email,
    type: type,
    id: Date.now(),
  };

  users.push(newUser);

  return newUser;
};

export const alterateUser = (id:number):user => {
    const userToUpdate:(user|undefined) = users.find(user => {
        return user.id===id
    })

    if(!userToUpdate){
        throw new Error('Can not find user')
    }

    userToUpdate.name += '-ALTERADO'

    return userToUpdate
}

export const realterateUser = (id:number):user => {
    const userToUpdate:(user|undefined) = users.find(user => {
        return user.id===id
    })

    if(!userToUpdate){
        throw new Error('Can not find user')
    }

    if(!userToUpdate.name.includes('-ALTERADO')){
        throw new Error('This user has not been alterated')
    }

    userToUpdate.name = userToUpdate.name.replace(/ALTERADO/i,'REALTERADO')

    return userToUpdate
}