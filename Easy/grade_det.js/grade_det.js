let studentMarks = [
  ["David", 80],
  ["Vinoth", 77],
  ["Divya", 400],
  ["Ishitha", 95],
  ["Thomas", 340],
];
console.table(studentMarks);

/*console.log(student_marks[1][1]);

total_no_stu = student_marks.length;

console.log(total_no_stu);

student_marks.forEach((student) => {
  let av_mark = (student[1] / total_no_stu).toFixed();
  student[2] = av_mark;
});

console.table(student_marks);

for (let i = 0; i < student_marks.length; i++) {
  var innArrLen = student_marks[i].length;
  //for (let j = 0; j < innArrLen; j++) {
  //console.log(` ${i} ${j} = ${student_marks[i][j]}`);
  //if (student_marks[i][j] == student_marks[i][2]) {
  stu_av_mark = student_marks[i][2];
  stu_name = student_marks[i][0];
  if (student_marks[i][2] < 60) {
    console.log(
      `${stu_name}'s average score  is ${stu_av_mark}, and his grade is F`
    );
  } else if (student_marks[i][2] < 70) {
    console.log(
      `${stu_name}'s average score  is ${stu_av_mark}, and his grade is D`
    );
  } else if (student_marks[i][2] < 80) {
    console.log(
      `${stu_name}'s average score  is ${stu_av_mark}, and his grade is C`
    );
  } else if (student_marks[i][2] < 90) {
    console.log(
      `${stu_name}'s average score  is ${stu_av_mark}, and his grade is B`
    );
  } else if (student_marks[i][2] < 100) {
    console.log(
      `${stu_name}'s average score  is ${stu_av_mark}, and his grade is A`
    );
  }
  //}
  //}
}
*/

/*
function calStudentGrade(array) {
  totalNoStu = array.length;
  array.forEach((student) => {
    let avMark = (student[1] / totalNoStu).toFixed();
    student[2] = avMark;
  });
  for (let i = 0; i < array.length; i++) {
    //var innArrLen = array[i].length;
    stuAvMark = array[i][2];
    stuName = array[i][0];
    if (stuAvMark < 60) {
      console.log(
        `${stuName}'s average score  is ${stuAvMark}, and his grade is F`
      );
    } else if (studentAvMark < 70) {
      console.log(
        `${stuName}'s average score  is ${stuAvMark}, and his grade is D`
      );
    } else if (studentAvMark < 80) {
      console.log(
        `${stuName}'s average score  is ${stuAvMark}, and his grade is C`
      );
    } else if (studentAvMark < 90) {
      console.log(
        `${stuName}'s average score  is ${stuAvMark}, and his grade is B`
      );
    } else if (studentAvMark < 100) {
      console.log(
        `${stuName}'s average score  is ${stuAvMark}, and his grade is A`
      );
    }
  }
}

calStudentGrade(studentMarks);

console.log(studentMarks);
*/

function getStudentGradeByName(stuName, array) {
  //console.log(typeof stuName);
  //let name1 = stuName;
  stuName = stuName.toLowerCase();
  totalNoStu = array.length;
  array.forEach((student) => {
    let avMark = (student[1] / totalNoStu).toFixed();
    student[2] = avMark;
  });
  //console.log(name2);
  for (let i = 0; i < array.length; i++) {
    //stuName = array[i][0];
    //avMark = array[i][2];
    //console.log(array[i][0]);
    nameInArr = array[i][0].toLowerCase();
    if (stuName == nameInArr) {
      //console.log(array[i][0]);
      //console.log(name2);
      if (array[i][2] < 60) return `Student's grade is F`;
      else if (array[i][2] < 70) return `Student's grade is D`;
      else if (array[i][2] < 80) return `Student's grade is C`;
      else if (array[i][2] < 90) return `Student's grade is B`;
      else if (array[i][2] < 100) return `Student's grade is A`;
    }
  }
  //stuName == array[i][0];
  //if (stuName !== student[0]) {
  //console.log(stuName);
  //console.log(array[student[0]]);
  return `Student's details cannot be found`;
  //}
}

console.log(getStudentGradeByName("Edison", studentMarks));

console.log(studentMarks);

//console.log("string".toLowerCase());
