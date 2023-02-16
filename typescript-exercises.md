[typescript-exercises 문제 바로가기](https://typescript-exercises.github.io)

<br />

### 1번 문제 
```ts
export type User = unknown;

export const users: unknown[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: unknown) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);
```
1번 풀이 
: users 라는 배열이 name,age,occupation 를 가지고 있기 때문에  User Object 타입을 지정하여 타입 선언을 해주게 된다. 
```ts
export type User = {
    name:string;
    age:number;
    occupation:string;
};

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);
```

<br />

### 2번 문제 
```ts
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = unknown;

export const persons: User[] /* <- Person[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
```
2번 풀이 
: persons 배열의 object는  User 와 Admin 의 객체를 동시에 가지기 위해 타입 확장이 필요하다. 
Person Type 에  Union Type의 | 연산자를 이용하여 User 와 Admin 을 동시에가지는 타입을 생성하여 타입 선언을 변경해 주었다. 
```ts

export type Person = User | Admin;

export const persons: Person[]  = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
```

<br />

### 3번 문제 
```ts
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    let additionalInformation: string;
    if (person.role) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
```

3번 풀이 : User | Admin 두 타입을 참조하는 Person Type 에서의 객체 조건을 찾을 경우 javascript in 연산자를 사용하여 객체 변수의 유형을 좁히는 방법으로 판별했다. 
"role" 이라는 특정 객체가 참조하는지를 판별하여 true또는false을 반환하게된다.


```ts

export function logPerson(person: Person) {
    let additionalInformation: string;
    if('role' in person) additionalInformation = person.role;
     else  additionalInformation = person.occupation;
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

```

<br/>


### 4번 문제 
```ts
interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

export function isAdmin(person: Person) {
    return person.type === 'admin';
}

export function isUser(person: Person) {
    return person.type === 'user';
}

export function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);
```

4번 풀이 :logPerson 함수의 조건문에서 isAdmin 과 isUser 를 호출하여 person.type 을 판별하게 되는데 이때 리턴값에 타입 명제(Type Predicates)를 사용하여 person값을 특정 타입으로 좁혀 주는것으로 문제를 해결했다. 
* 조건을 만족하는 경우 true를 반환하고, 통과한 값은 명제를 만족하므로 특정 type을 가지게 된다.

```ts

export function isAdmin(person: Person):person is Admin  {
    return person.type === 'admin';
}

export function isUser(person: Person):person is User {
    return person.type === 'user';
}

```
