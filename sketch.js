let body;
let eyes;
let mouth;
let nose;
let hair;
let accessories;

function setup() {
  let canvasX = 150;
  let canvasY = 150;
  createCanvas(canvasX, canvasY);
  let button = createButton('Randomize');
  button.position(0, canvasY + 10);
  button.mousePressed(randomizeFeatures);
  randomizeFeatures();
}

function randomizeFeatures() {
  body = Math.floor(random(3));
  eyes = Math.floor(random(3));
  mouth = Math.floor(random(3));
  nose = Math.floor(random(3));
  hair = Math.floor(random(3));
  accessories = Math.floor(random(2));
  clear();
}

function drawFace() {
  beginShape();
  vertex(7.62, 54.6);
  bezierVertex(7.55, 58.11, 0.8500000000000005, 54.02, 1.75, 61.75);
  bezierVertex(2, 63.88, 6.87, 64.25, 7.37, 66.6);
  bezierVertex(9.41, 76.3, 20.06, 93.31, 39.8, 93.33999999999999);
  bezierVertex(62.03999999999999, 93.38, 70.44999999999999, 82.46999999999998, 74.61, 67.44999999999999);
  bezierVertex(75.04, 65.89999999999999, 81.11, 67.44999999999999, 81.12, 62.72999999999999);
  bezierVertex(81.13000000000001, 58.25999999999999, 74.62, 60.61999999999999, 76.11, 54.66999999999999);
  bezierVertex(86.74, 12.04999999999999, 9.159999999999997, -17.140000000000015, 7.6299999999999955, 54.59999999999999);
  endShape();
}

function drawEyes(choice = 0) {
  switch (choice) {
    case 0:
      beginShape();
      vertex(64.96, 57.56);
      bezierVertex(64.96, 57.56, 57.529999999999994, 54.06, 50.92999999999999, 58.050000000000004);
      endShape()
      beginShape();
      arc(53.21, 59, 2.63, 0, 6.283185307179586, true);
      endShape();
      beginShape();
      vertex(31.52, 57.56);
      bezierVertex(31.52, 57.56, 24.09, 54.06, 17.490000000000002, 58.050000000000004);
      endShape()
      beginShape();
      arc(19.76, 59, 2.63, 0, 6.283185307179586, true);
      endShape();
      break;
    case 1:
      beginShape();
      vertex(32.38, 59.61);
      bezierVertex(32.38, 59.61, 27.240000000000002, 62.03, 22.680000000000003, 59.269999999999996);
      endShape()
      beginShape();
      vertex(61.55, 59.61);
      bezierVertex(61.55, 59.61, 56.41, 62.03, 51.849999999999994, 59.269999999999996);
      endShape()
      beginShape();
      vertex(23.18, 59.46);
      vertex(21.73, 62.03);
      endShape()
      beginShape();
      vertex(52.23, 59.6);
      vertex(50.78, 62.17);
      endShape()
      beginShape();
      vertex(27.55, 60.41);
      vertex(27.52, 63.35);
      endShape()
      beginShape();
      vertex(56.44, 60.41);
      vertex(56.41, 63.35);
      endShape()
      beginShape();
      vertex(31.75, 59.55);
      vertex(33.02, 62.21);
      endShape()
      beginShape();
      vertex(60.91, 59.55);
      vertex(62.18, 62.21);
      endShape()

      break;
    case 2:
      beginShape();
      vertex(32.69, 60.02);
      bezierVertex(32.69, 60.02, 27.549999999999997, 57.6, 22.99, 60.36000000000001);
      endShape()
      beginShape();
      arc(27.84, 61.02, 1.82, 0, 6.283185307179586, true);
      endShape();
      beginShape();
      vertex(61.85, 60.02);
      bezierVertex(61.85, 60.02, 56.71, 57.6, 52.150000000000006, 60.36000000000001);
      endShape()
      beginShape();
      arc(57, 61.02, 1.82, 0, 6.283185307179586, true);
      endShape();
      break;

    default:
      break;
  }


}

function drawBody(choice = 0) {
  switch (choice) {
    case 0:
      beginShape();
      vertex(23.11, 89.21);
      bezierVertex(23.11, 89.21, 5.800000000000001, 112.16999999999999, 12.309999999999999, 119.49);
      bezierVertex(12.309999999999999, 119.49, 41.209999999999994, 122.89, 47.629999999999995, 123.22999999999999);
      bezierVertex(47.629999999999995, 123.22999999999999, 74.86999999999999, 125.1, 76.21, 118.28999999999999);
      bezierVertex(76.21, 118.28999999999999, 72.91, 94.10999999999999, 62.379999999999995, 87.72999999999999);
      bezierVertex(62.379999999999995, 87.72999999999999, 35.059999999999995, 76.44, 23.109999999999992, 89.18999999999998);
      endShape();
      beginShape();
      vertex(46.73, 80.2);
      bezierVertex(45.38999999999999, 80.12, 44.4, 80.36, 43.69, 80.84);
      bezierVertex(42.98, 80.36, 41.989999999999995, 80.12, 40.65, 80.2);
      bezierVertex(33.54, 80.62, 22.599999999999998, 85.65, 23.11, 89.21000000000001);
      bezierVertex(23.11, 89.21000000000001, 24.689999999999998, 103.31, 27.75, 102.86000000000001);
      bezierVertex(30.81, 102.41000000000001, 40.37, 98.24000000000001, 42.74, 93.35000000000001);
      bezierVertex(43.06, 92.69000000000001, 43.38, 91.96000000000001, 43.690000000000005, 91.2);
      bezierVertex(43.99, 91.83, 45.18000000000001, 92.15, 45.84, 93.57000000000001);
      bezierVertex(50.730000000000004, 105.5, 54.900000000000006, 108.56, 55.35, 96.63000000000001);
      bezierVertex(55.800000000000004, 101.27000000000001, 41.7, 101.27000000000001, 41.7, 97.14000000000001);
      bezierVertex(38.14, 86.71000000000001, 33.11, 79.60000000000002, 32.690000000000005, NaN);
      endShape()
      beginShape();
      vertex(43.69, 91.2);
      vertex(43.69, 123.33);
      endShape()
      beginShape();
      arc(47.01, 106.58, 1.02, 0, 6.283185307179586, true);
      endShape();
      beginShape();
      arc(47.01, 111.13, 1.02, 0, 6.283185307179586, true);
      endShape();
      beginShape();
      arc(47.01, 115.52, 1.02, 0, 6.283185307179586, true);
      endShape();
      break;
    case 1:
      beginShape();
      vertex(23.94, 87.96);
      bezierVertex(23.94, 87.96, 6.630000000000003, 110.91999999999999, 13.14, 118.24);
      bezierVertex(19.65, 125.56, 42.04, 121.64, 48.46, 121.97999999999999);
      bezierVertex(54.88, 122.31999999999998, 75.7, 123.85, 77.03999999999999, 117.03999999999999);
      bezierVertex(78.38, 110.22999999999999, 73.74, 92.85999999999999, 63.209999999999994, 86.47999999999999);
      bezierVertex(52.67999999999999, 80.1, 35.88999999999999, 75.19, 23.93999999999999, 87.93999999999998);
      endShape();
      beginShape();
      vertex(30.22, 87.57);
      bezierVertex(30.22, 87.57, 25.57, 93.13999999999999, 32.56, 92);
      endShape()
      beginShape();
      vertex(32.12, 92.1);
      bezierVertex(32.12, 92.1, 26.629999999999995, 96.85, 33.72, 96.85);
      endShape()
      beginShape();
      vertex(33, 97.19);
      bezierVertex(33, 97.19, 31.49, 104.28999999999999, 37.14, 100.00999999999999);
      endShape()
      beginShape();
      vertex(37.14, 100.19);
      bezierVertex(37.14, 100.19, 37, 107.45, 41.74, 102.17999999999999);
      endShape()
      beginShape();
      vertex(41.99, 102.05);
      bezierVertex(41.99, 102.05, 45.6, 108.34, 46.95, 101.39);
      endShape()
      beginShape();
      vertex(46.86, 101.97);
      bezierVertex(46.86, 101.97, 52.37, 106.69, 51.32, 99.69);
      endShape()
      beginShape();
      vertex(51.2, 99.36);
      bezierVertex(51.2, 99.36, 58.17, 101.37, 54.31, 95.42999999999999);
      endShape()
      beginShape();
      vertex(53.69, 95.83);
      bezierVertex(53.69, 95.83, 60.86, 94.74, 54.87, 90.96);
      endShape()
      beginShape();
      vertex(43.57, 81.83);
      bezierVertex(50.142188522986444, 81.83, 55.47, 86.42803561923775, 55.47, 92.1);
      bezierVertex(55.47, 97.77196438076224, 50.142188522986444, 102.36999999999999, 43.57, 102.36999999999999);
      bezierVertex(36.997811477013556, 102.36999999999999, 31.67, 97.77196438076224, 31.67, 92.1);
      bezierVertex(31.67, 86.42803561923775, 36.997811477013556, 81.83, 43.57, 81.83);
      endShape();
      beginShape();
      arc(26.64, 113.6, 0.85, 0, 6.283185307179586, true);
      endShape();
      beginShape();
      arc(23.18, 98.84, 0.85, 0, 6.283185307179586, true);
      endShape();
      beginShape();
      arc(33.13, 111.18, 0.85, 0, 6.283185307179586, true);
      endShape();
      beginShape();
      arc(26.11, 105.99, 0.85, 0, 6.283185307179586, true);
      endShape();
      beginShape();
      arc(17.63, 112.88, 0.85, 0, 6.283185307179586, true);
      endShape();
      beginShape();
      arc(38.2, 116.62, 0.85, 0, 6.283185307179586, true);
      endShape();
      beginShape();
      arc(43.57, 110.75, 0.85, 0, 6.283185307179586, true);
      endShape();
      beginShape();
      arc(49.66, 114.45, 0.85, 0, 6.283185307179586, true);
      endShape();
      beginShape();
      arc(54.54, 107.69, 0.85, 0, 6.283185307179586, true);
      endShape();
      beginShape();
      arc(62.83, 99.18, 0.85, 0, 6.283185307179586, true);
      endShape();
      beginShape();
      arc(66.39, 106.64, 0.85, 0, 6.283185307179586, true);
      endShape();
      beginShape();
      arc(69.22, 113.6, 0.85, 0, 6.283185307179586, true);
      endShape();
      beginShape();
      arc(60.74, 110.75, 0.85, 0, 6.283185307179586, true);
      endShape();
      beginShape();
      arc(62.21, 117.48, 0.85, 0, 6.283185307179586, true);
      endShape();

      break;
    case 2:
      beginShape();
      vertex(24.24, 89.2);
      bezierVertex(24.24, 89.2, 6.93, 112.16, 13.439999999999998, 119.48);
      bezierVertex(19.949999999999996, 126.80000000000001, 42.339999999999996, 122.88000000000001, 48.76, 123.22);
      bezierVertex(55.18, 123.55999999999999, 76, 125.09, 77.34, 118.28);
      bezierVertex(78.68, 111.47, 74.04, 94.1, 63.510000000000005, 87.72);
      bezierVertex(52.980000000000004, 81.34, 36.190000000000005, 76.43, 24.240000000000002, 89.17999999999999);
      endShape();
      beginShape();
      vertex(43.88, 83.07000000000001);
      bezierVertex(50.45218852298645, 83.07000000000001, 55.78, 87.66803561923776, 55.78, 93.34);
      bezierVertex(55.78, 99.01196438076225, 50.45218852298645, 103.61, 43.88, 103.61);
      bezierVertex(37.30781147701356, 103.61, 31.980000000000004, 99.01196438076225, 31.980000000000004, 93.34);
      bezierVertex(31.980000000000004, 87.66803561923776, 37.30781147701356, 83.07000000000001, 43.88, 83.07000000000001);
      endShape();
      break;
    default:
      break;
  }


}

function drawMouth(choice = 0) {
  switch (choice) {
    case 0:
      beginShape();
      vertex(42.74, 83.99);
      bezierVertex(42.74, 83.99, 49.29, 85.27, 53.71, 80.21);
      endShape()
      break;
    case 1:
      beginShape();
      vertex(35.7, 78.61);
      bezierVertex(35.7, 78.61, 42.68000000000001, 72.4, 48.6, 78.95);
      endShape()
      beginShape();
      vertex(40.13, 79.55);
      bezierVertex(40.13, 79.55, 43.45, 79.64, 44.47, 79.55);
      endShape()
      beginShape();
      vertex(36.32, 80.27);
      bezierVertex(36.32, 80.27, 41, 86.53999999999999, 47.980000000000004, 81.28);
      endShape()

      break;
    case 2:
      beginShape();
      vertex(34.67, 80.58);
      bezierVertex(34.67, 80.58, 40.68, 84.32, 48.910000000000004, 80.58);
      endShape()
      beginShape();
      vertex(38.32, 82.36);
      vertex(38.52, 84.02);
      bezierVertex(38.64, 84.97999999999999, 40.17, 85.94, 40.1, NaN);
      bezierVertex(42.75, NaN, NaN, NaN, 40.03, NaN);
      bezierVertex(39.18, NaN, 38.230000000000004, NaN, 38.34, NaN);
      bezierVertex(31.990000000000002, NaN, NaN, NaN, 38.34, NaN);
      bezierVertex(38.400000000000006, NaN, 38.470000000000006, NaN, NaN, NaN);
      endShape()
      beginShape();
      vertex(41.78, 82.24);
      vertex(41.78, 85.51);
      endShape()

      break;
    default:
      break;
  }


}

function drawNose(choice = 0) {
  switch (choice) {
    case 0:
      beginShape();
      vertex(37.71, 58.05);
      bezierVertex(37.71, 58.05, 34.480000000000004, 70.94, 36.86, 72.13);
      bezierVertex(36.86, 72.13, 47.07, 75.19, 48.26, 72.81);
      bezierVertex(48.26, 72.81, 50.3, 70.09, 48.26, 67.19);
      endShape()
      break;
    case 1:
      beginShape();
      vertex(41.39, 72.23);
      bezierVertex(41.39, 72.23, 34.39, 71.8, 35.34, 69.34);
      bezierVertex(35.34, 69.34, 39.870000000000005, 65.51, 40.550000000000004, 62.870000000000005);
      endShape()
      break;
    case 2:
      beginShape();
      vertex(37.18, 73.13);
      bezierVertex(37.18, 73.13, 41.29, 66.66, 47.24, 73.13);
      endShape()

      break;
    default:
      break;
  }


}

function drawHair(choice = 0) {
  switch (choice) {
    case 0:
      beginShape();
      vertex(3.45, 56.53);
      bezierVertex(3.45, 56.53, 11.489999999999998, 56.79, 16.21, 43);
      bezierVertex(20.94, 29.21, 20.78, 28.53, 27.75, 27.3);
      bezierVertex(36.15, 25.810000000000002, 34.21, 33.43, 42.72, 31.9);
      bezierVertex(51.23, 30.369999999999997, 50.239999999999995, 25.49, 56.11, 26.54);
      bezierVertex(61.980000000000004, 27.59, 66.35, 33.56, 66.35, 40.84);
      bezierVertex(66.35, 48.120000000000005, 70.08999999999999, 52.970000000000006, 73.64, 53.480000000000004);
      bezierVertex(77.19000000000001, 53.99, 76.95, 56.540000000000006, 77.66, 51.95);
      bezierVertex(78.36999999999999, 47.36, 78.84, 21.570000000000004, 56.86, 14.160000000000004);
      bezierVertex(34.879999999999995, 6.7500000000000036, 20.979999999999997, 14.290000000000004, 15.5, 20.290000000000003);
      bezierVertex(10.940000000000001, 25.28, 2.74, 36.120000000000005, 3.4499999999999993, 56.55);
      endShape();
      break;
    case 1:
      beginShape();
      vertex(36.1, 4.31);
      bezierVertex(36.1, 4.31, 12.43, -0.11, 3.24, 34.95);
      bezierVertex(-5.949999999999999, 70.01, 7.84, 56.230000000000004, 9.77, 56.230000000000004);
      bezierVertex(15.559999999999999, 56.230000000000004, 14.11, 58.410000000000004, 18.56, 55.550000000000004);
      bezierVertex(23.33, 52.49, 21.939999999999998, 57.27, 27.11, 57.27);
      bezierVertex(32.28, 57.27, 32.78, 52.02, 35.07, 52.32);
      bezierVertex(38.29, 52.74, 34.44, 52.8, 41.34, 54.85);
      bezierVertex(48.24, 56.89, 49.550000000000004, 54.81, 55.330000000000005, 51.300000000000004);
      bezierVertex(60.10000000000001, 48.410000000000004, 58.800000000000004, 55.040000000000006, 64.52000000000001, 54.02);
      bezierVertex(70.24000000000001, 53, 66.84, 53.31, 70.99000000000001, 52.970000000000006);
      bezierVertex(75.14000000000001, 52.63000000000001, 74.2, 57.07000000000001, 79.79, 55.370000000000005);
      bezierVertex(85.38000000000001, 53.67, 84.66, 7.88, 60.6, 4.65);
      bezierVertex(36.540000000000006, 1.4200000000000008, 45.14, 4.65, 36.1, 4.3100000000000005);
      endShape();
      break;
    case 2:
      beginShape();
      vertex(4.29, 19.37);
      bezierVertex(4.6, 26.51, 0.3799999999999999, 26.1, 3.87, 35.7);
      bezierVertex(5.23, 39.440000000000005, 11.11, 42.17, 22.34, 37.400000000000006);
      bezierVertex(33.57, 32.63000000000001, 35, 43.220000000000006, 43.85, 39.13);
      bezierVertex(52.7, 35.040000000000006, 54.400000000000006, 30.96, 61.21, 33.34);
      bezierVertex(68.02, 35.720000000000006, 76.87, 45.980000000000004, 79.93, 40.85);
      bezierVertex(82.99000000000001, 35.72, 87.80000000000001, 21.220000000000002, 65.09, 15.260000000000002);
      bezierVertex(52.85, 12.06, 48.72, 0.98, 39.87, 2);
      bezierVertex(31.019999999999996, 3.02, 31.489999999999995, 12.04, 22.979999999999997, 6.94);
      bezierVertex(14.47, 1.83, 3.85, 9.14, 4.29, 19.37);
      endShape();
      break;
    default:
      break;
  }

}

function drawAccessories(choice = 0) {
  switch (choice) {
    case 0:
      beginShape();
      vertex(24.4, 2.5);
      bezierVertex(25.919999999999998, 1.63, 28.459999999999997, 1.87, 30.07, 2.82);
      bezierVertex(30.69, 4.199999999999999, 31.89, 5.14, 32.65, 3.69);
      bezierVertex(34.75, 4.91, 35.489999999999995, 5.77, 34.23, 5.51);
      bezierVertex(34.669999999999995, 10.1, 33.13999999999999, 11.59, 32.55, 7.16);
      bezierVertex(28.439999999999998, 9.26, 26.229999999999997, 9.72, 30.889999999999997, 7.41);
      bezierVertex(27.4, 8.22, 25.769999999999996, 7.6000000000000005, 29.339999999999996, 6.74);
      bezierVertex(26.959999999999997, 3.89, 26.879999999999995, 2.17, 29.339999999999996, 5.01);
      bezierVertex(30.089999999999996, 1.71, 30.669999999999995, 0.05999999999999961, 29.959999999999997, 3.4099999999999997);
      bezierVertex(31.419999999999998, 0.019999999999999574, 32.669999999999995, -0.8000000000000003, NaN, 3.5199999999999996);
      bezierVertex(NaN, NaN, NaN, NaN, NaN, NaN);
      endShape()
      beginShape();
      vertex(17.36, 30.68);
      bezierVertex(15.85, 31.58, 13.309999999999999, 31.37, 11.69, 30.44);
      bezierVertex(10.74, 29.830000000000002, 10.28, 28.64, 9.33, 27.89);
      bezierVertex(8.44, 27.14, 7.21, 26.7, 6.46, 25.85);
      bezierVertex(4.85, 24.05, 5.95, 21.270000000000003, 7.46, 19.76);
      bezierVertex(9.12, 18.090000000000003, 11.54, 17.6, 13.75, 17.110000000000003);
      bezierVertex(15.41, 16.840000000000003, 17.23, 16.250000000000004, 18.86, 16.85);
      bezierVertex(20.419999999999998, 17.5, 21.28, 19.67, 21.38, 21.39);
      bezierVertex(21.4, 23.12, 20.68, 24.7, 20.119999999999997, 26.36);
      bezierVertex(19.519999999999996, 27.97, 18.709999999999997, 29.78, 17.47, 30.61);
      vertex(17.36, 30.68);
      endShape();
      beginShape();
      arc(21.29, 16.85, 4.68, 0, 6.283185307179586, true);
      endShape();
      break;
    case 1:
      beginShape();
      vertex(22.939999999999998, 55.68);
      vertex(32.78, 55.68);
      quadraticVertex(37.18, 55.68, 37.18, 60.08);
      vertex(37.18, 65.32);
      quadraticVertex(37.18, 69.72, 32.78, 69.72);
      vertex(22.939999999999998, 69.72);
      quadraticVertex(18.54, 69.72, 18.54, 65.32);
      vertex(18.54, 60.08);
      quadraticVertex(18.54, 55.68, 22.939999999999998, 55.68);
      endShape();
      beginShape();
      vertex(50.86, 57.35);
      vertex(60.699999999999996, 57.35);
      quadraticVertex(65.1, 57.35, 65.1, 61.75);
      vertex(65.1, 66.99);
      quadraticVertex(65.1, 71.39, 60.699999999999996, 71.39);
      vertex(50.86, 71.39);
      quadraticVertex(46.46, 71.39, 46.46, 66.99);
      vertex(46.46, 61.75);
      quadraticVertex(46.46, 57.35, 50.86, 57.35);
      endShape();
      beginShape();
      vertex(8.32, 56.72);
      vertex(18.84, 58.49);
      endShape()
      beginShape();
      vertex(37.18, 58.49);
      vertex(47.91, 58.49);
      endShape()
      beginShape();
      vertex(65.1, 60.02);
      vertex(77.48, 58.94);
      endShape()

      break;

    default:
      break;
  }
}

function draw() {
  drawBody(body);
  drawFace();
  drawEyes(eyes);
  drawMouth(mouth);
  drawNose(nose);
  drawHair(hair);
  drawAccessories(accessories);
}