var judgeCircle = function (moves) {
  let moveArr = moves.split(""),
    origin = 0;
  moveArr.map((item) => {
    if (item === "U") origin += 1;
    if (item === "D") origin -= 1;
    if (item === "R") origin += 2;
    if (item === "L") origin -= 2;
  });
  return origin === 0;
};

let moves = "UDDUURLRLLRRUDUDLLRLURLRLRLUUDLULRULRLDDDUDDDDLRR";
console.log(judgeCircle(moves));
