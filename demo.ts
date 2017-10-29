let fname: string;// ='test';

let age: number;

let dob: Date;

let isValid: boolean = false;
console.log(isValid);

let anytype : any;
anytype= 'asdfdsf';
anytype=10 ;
anytype = true;

let empList: string[] = [];

empList.push('sdfg');

let employeeList: any[] = [];

employeeList.push({ id: 1, name: 'test1', address: 'pune' });
employeeList.push({ id: 2, name: 'test2', address: 'pune' });
employeeList.push({ id: 3, name: 'test3', address: 'pune' });

employeeList.forEach(function (emp) {
    console.log(emp.id);
});

for (let emp of employeeList) {
    console.log(emp);
}

for (let emp in employeeList) {
    console.log(emp);
}

let unionType: string | string[] | number;