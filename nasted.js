const college = {
    name: 'vnc',
    class: ['10', '11', '12'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        school: 'kamarjuri'

    }
}

console.log(college.unique.school)
console.log(college.class[1])
console.log(college)
delete college.class;
console.log(college)