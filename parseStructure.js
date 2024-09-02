// Output table
//  | A      | B     | C
// 1| Number | Place | Deficiencies
// 2| 1      | ..    | ..

// Input data
// num = 1 (from output table, $A2)
// cell = [{"number": 1}, {"place": "Classroom"}, {"deficiencies": "Broken tables"}] (from other table)

function parseStructure(num, cell) {
  var result = [];
  var data = JSON.parse(cell);
  data.forEach(
    function(element) {
      if (element.number == num) {
        result.push(element.place);
        result.push(element.deficiencies);
      };
    }
  );
  return result;
};

// Output data
// result = ["Classroom", "Broken tables"]
// If you enter this formula "TRANSPOSE(parseStructure(num, cell))" in B2, you will get next output table
//  | A      | B            | C
// 1| Number | Place        | Deficiencies
// 2| 1      | Classroom    | Broken tables
