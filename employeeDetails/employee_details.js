const employees = [
    { id: 1, name: 'Metin Altay', age: 30, department: 'IT', salary: 50000, specializaion: 'javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 , specializaion: 'Python'},
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specializaion: 'java' },
    //... More employee records can be added here
  ];

  const totalEmployees = 
  employees.map((employee, index)=> `<p>${employee.id}: ${employee.name} -${employee.age} - ${employee.department} - $${employee.salary}<p?>`);

  document.getElementById('employeesDetails').innerHTML = totalEmployees;

  function calculateTotalSalaries() {
   const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
   alert(`Total Salaries: $${totalSalaries}`)
   
  }

  function displayHREmployees() {
    // departman filitrelendi
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    //ardindn hrEmployees filtre edilmis haldeki yeni dizi map lenniyor
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }
}

function findEmployee(){

    const employeeFindBy = employees.filter(employee => employee.specializaion === 'javascript');
    console.log(employeeFindBy);
   const findBySpec = employeeFindBy.map(employee => `<p>${employee.id}: ${employee.name}: ${employee.age}- ${employee.department}-  ${employee.specializaion}- $${employee.salary}</p>`)
   document.getElementById('employeesDetails').innerHTML= findBySpec;
}