class Polygon {
  constructor(arr) {
    this.arr = arr
  }
  
  get countSides() {
    return this.arr.length
  }
  
  get perimeter() {
    let total = 0
      for (let i = 0; i < this.arr.length; i ++){
        total += this.arr[i]
      }
    return total;
  }
}

class Triangle extends Polygon {
  if (this.arr.length !== 3) return;
    let side1 = this.arr[0]
    let side2 = this.arr[1]
    let side3 = this.arr[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
}