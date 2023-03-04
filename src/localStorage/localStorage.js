import uuid from "react-uuid";

export const getUserList = () => {
    if(!localStorage["@users"]){
        localStorage["@users"] = JSON.stringify([]);
    }
    let users = JSON.parse(localStorage["@users"]);
    return users;
}

export const addUser = (user) => {
    const users = getUserList();
    users.push({id: uuid(), ...user});
    localStorage["@users"] = JSON.stringify(users);
}

export const getUserById = (id) => {
    const users = getUserList();
    const user = users.find(user => user.id === id);
    return user;
}

export const editUser = (id, newUser) => {
    let users = getUserList();
    users = users.filter(user => user.id !== id);
    users.push(newUser);
    localStorage["@users"] = JSON.stringify(users)
}

export const deleteUser = (id) => {
    let users = getUserList();
    users = users.filter((user) => user.id !== id);
    localStorage["@users"] = JSON.stringify(users);
} 