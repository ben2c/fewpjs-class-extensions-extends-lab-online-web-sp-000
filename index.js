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
  
}