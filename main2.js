const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false }
]

/*const toggleUserState = (allUsers, userName, callback) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );

  callback(updatedUsers);
};*/

const toggleUserState = (allUsers, userName) => {
    const promise = new Promise((resolve, reject) => {
        resolve(allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user
        ))
    })
    return promise
}
const logger = updatedUsers => console.table(updatedUsers)

/*toggleUserState(users, 'Mango', logger);
toggleUserState(users, 'Lux', logger);*/

toggleUserState(users, 'Mango').then(logger)
toggleUserState(users, 'Lux').then(logger)