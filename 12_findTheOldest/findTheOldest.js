const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();

    let oldestAge = 0, oldestPerson = {};
    for (const person of people) {
        let age;
        if (!person.yearOfDeath) {
            age = currentYear - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        
        oldestPerson = age > oldestAge ? person : oldestPerson;
        oldestAge = Math.max(oldestAge, age);
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
