

var array1 = [
  { empId: 1, fullName: "Trump", gender: "Male" },
  { empId: 2, fullName: "Ivanka", gender: "Female" },
  { empId: 3, fullName: "Kushner", gender: "Male" }
];

var array2 = array1.map (
    e =>
    <Emloyee fullName={e.fullName} gender={e.gender} />
);
