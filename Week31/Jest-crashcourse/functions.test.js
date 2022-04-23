const functions = require('./functions'); 


test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4); 
})
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5); 
})


//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull(); 
})

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy(); 
    expect(functions.checkValue(0)).toBeFalsy(); 
    expect(functions.checkValue(undefined)).toBeFalsy(); 
})


// toEqual - objects/arrays compare with different memory
test('User should be Craig Davison object', () => {
    expect(functions.createUser()).toEqual({firstName: 'Craig', lastName: 'Davison'})
})

//less than and greater than
test('Should be under 1600', () => {
    const load1 = 800; 
    const load2 = 800; 
    expect(load1 + load2).toBeLessThanOrEqual(1600);
})

//Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i); 
})

// Arrays
test('Admin should be in usernames', () => {
    const usernames = ['John', 'Karen', 'Admin']
    expect(usernames).toContain('Admin');
})




// Working with async data
//promise
test('User fetched name should be Leanna Graham', () => {
    expect.assertions(1); // make sure the assertions actually get called
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        })
})


//async await
test('User fetched name should be Leanna Graham', async () => {
    expect.assertions(1); // make sure the assertions actually get called
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham');
})