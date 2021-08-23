class FigureCalculator {
  constructor(mathBasic) {
    this.mathBasic = mathBasic;
  }

  verifyArgs(args, expectedArgsCount) {
    if (args.length !== expectedArgsCount) {
      throw new Error(`fungsi hanya menerima ${expectedArgsCount} parameter`);
    }

    args.forEach( (arg) => {
      if (typeof arg !== 'number') {
        throw new Error('fungsi hanya menerima parameter number');
      }
    });

    return args;
  }

  calculateRectanglePerimeter(...args) {
    const [length, width] = this.verifyArgs(args, 2);

    // formula = 2 * (length + width)
    return this.mathBasic.multiply(2, this.mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    const [length, width] = this.verifyArgs(args, 2);

    // formula = length * width
    return this.mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    const [sideA, sideB, base] = this.verifyArgs(args, 3);

    // formula = sideA + sideB + base
    return this.mathBasic.add(sideA, this.mathBasic.add(sideB, base));
  }

  calculateTriangleArea(...args) {
    const [base, height] = this.verifyArgs(args, 2);

    // formula = (base * height) / 2
    return this.mathBasic.divide(this.mathBasic.multiply(base, height), 2);
  }
}

module.exports = FigureCalculator;