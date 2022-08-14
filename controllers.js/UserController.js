const users = [];
const usersMayorDeEdad = [];
const usersMenorDeEdad = [];
let counter = 1;

const getUser = (req, res) => {
    return res.json(users);
};

const getUserById = (req, res) => {
    const { params } = req;

    const user = users.find((user) => {
        return user.id == params.id;
    });

    return res.json(user);
};

const addUser = (req, res) => {
    const { body } = req;
    const { name } = body;
    const { age } = body;

    if(body && name && age) {
        const data = {
        id: counter,
        name: name,
        age: age
        };
        users.push(data);

        if(age >= 18) {
        usersMayorDeEdad.push(data);
        } else if(age < 18) {
        usersMenorDeEdad.push(data);
        } else {
        return res.sendStatus(400);
        }
        counter = counter + 1;

        return res.sendStatus(201);
    } else {
        return res.sendStatus(400);
    }
};

const getUserMayorEdad = (req, res) => {
    res.sendStatus(300);
    //return res.json(usersMayorDeEdad);
};

const getUserMenorEdad = (req, res) => {
    return res.json(usersMenorDeEdad);
};

const getUserMayorEdadById = (req, res) => {
    const { params } = req;

    const mayorDeEdad = usersMayorDeEdad.find((mayorDeEdad) => {
        return mayorDeEdad.id == params.id;
    });

    return res.json(mayorDeEdad);
};

const getUserMenorEdadById = (req, res) => {
    const { params } = req;

    const menorDeEdad = usersMenorDeEdad.find((menorDeEdad) => {
        return menorDeEdad.id == params.id;
    });

    return res.json(menorDeEdad);
};

module.exports = {
    getUser,
    getUserById,
    addUser,
    getUserMayorEdad,
    getUserMenorEdad,
    getUserMayorEdadById,
    getUserMenorEdadById
}