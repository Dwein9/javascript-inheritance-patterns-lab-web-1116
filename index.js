function Point( x, y ) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return `(${this.x}, ${this.y})`
}

function Side(length) {
  this.length = length
}

//SHAPE
function Shape() {
}

Shape.prototype.addToPlane = function ( x, y ) {
  this.position = new Point(x,y)
}

Shape.prototype.move = function ( x, y ) {
  this.position = new Point(x,y)
}

//CIRCLE
function Circle(radius) {
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.diameter = function () {
  return 2 * this.radius
}

Circle.prototype.circumference = function () {
  return Math.PI * this.radius * 2
}

Circle.prototype.area = function () {
  return Math.PI * this.radius^2
}


//POLYGON
function Polygon(sides) {
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function () {
  var perim = 0
  for(let i = 0; i < this.sides.length; i++){
    perim += this.sides[i].length
  }
  return perim
}

Polygon.prototype.numberOfSides = function () {
  return this.sides.length
}

//QUADRILATERAL
function Quadrilateral(s1, s2, s3, s4) {
  Polygon.call(this, [new Side(s1), new Side(s2), new Side(s3), new Side(s4)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral


//RECTANGLE
function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height)
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function() {
  return this.width * this.height
}


//SQUARE
function Square(length) {
  Rectangle.call(this, length, length)
  this.length = length
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square

Square.prototype.listProperties = function () {
  var outp = []
  for (var key in this) {
      if(this.hasOwnProperty(key)) {
      outp.push(`${this.key}`)
    }
    return outp.join(', ')
  }
}


//TRIANGLE
function Triangle(s1, s2, s3) {
  Polygon.call(this, [new Side(s1), new Side(s2), new Side(s3)])
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle
