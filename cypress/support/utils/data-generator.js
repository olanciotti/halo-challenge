const { faker } = require('@faker-js/faker');

export function getFirstName(){
    return faker.person.firstName();
}

export function getLastName(){
    return faker.person.lastName();
}

export function generateNewEmail(){
    return faker.internet.email();
}

export function getPhoneNumber(){
    return faker.phone.number();
}

export function getPersonalData() {
    const personalData = {
        firstName: getFirstName(),
        lastName: getLastName(),
        email: generateNewEmail(),
        phone: getPhoneNumber(),
        fax: getPhoneNumber(),
    };
    return personalData;
}