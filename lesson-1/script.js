let user = {
    id : 1,
    name : 'Leanne Graham',
    username: 'Bret',
    email: 'sincere@april.biz',
    address: {
        street: 'Kulas LIght',
        suite: "Apt. 556",
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
            lat: '-37.3149',
            lng: '81.1496',
        },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hidegard'
}







console.log(user);
console.log(`User info
id: ${user.id},
name: ${user.name},
street: ${user.address.street}`);