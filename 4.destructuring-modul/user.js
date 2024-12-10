export function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

export function print(user) {
    console.log(user);
}

export default class Person {

}

// default jika kalian ingin import satu
// export default User;

// salah satu untuk multi export
// export { User, print }