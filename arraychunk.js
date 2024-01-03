const mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function chunk(arr, count) {
  const massive = [];
  const math = Math.floor(arr.length / count);
  for (let i = 0; i < count; i++) {
    const mas = [];
    for (let a = 0; a < math; a++) {
      mas.push(arr[a]);
    }
    mass.splice(0, math);
    massive.push(mas);
  }
  console.log(massive);
}

chunk(mass, 2);
