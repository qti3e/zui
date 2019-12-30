// prettier-ignore
const Path: Readonly<Float32Array> = new Float32Array([
  1, 369.655365, 208.250000, 362.780365, 201.750000, 355.528351, 195.375000, 347.776459, 189.125000,
  0, 346.151459, 175.625000, 343.901459, 162.250000, 341.024445, 148.875000,
  0, 342.899445, 148.875000, 345.026459, 148.500000, 346.776459, 148.500000,
  0, 368.280365, 148.500000, 381.284271, 153.875000, 384.659302, 160.000000,
  0, 388.659302, 167.250000, 384.784302, 184.750000, 369.655365, 208.250000,
  0, 369.655365, 208.250000, 369.655365, 208.250000, 369.655365, 208.250000,
  1, 384.659302, 352.000000, 381.034302, 358.625000, 365.655396, 363.875000, 341.024506, 363.000000,
  0, 343.776520, 350.000000, 346.151520, 336.625000, 347.776520, 322.875000,
  0, 355.528473, 316.625000, 362.780426, 310.250000, 369.655426, 303.750000,
  0, 384.784302, 327.250000, 388.659302, 344.750000, 384.659302, 352.000000,
  0, 384.659302, 352.000000, 384.659302, 352.000000, 384.659302, 352.000000,
  1, 223.999084, 336.000000, 191.642105, 336.000000, 162.471191, 316.508606, 150.088715, 286.614655,
  0, 137.706238, 256.720703, 144.550705, 222.311295, 167.430557, 199.431458,
  0, 190.310410, 176.551620, 224.719818, 169.707153, 254.613770, 182.089645,
  0, 284.507721, 194.472137, 303.999084, 223.643021, 303.999084, 256.000000,
  0, 303.999084, 300.182495, 268.182037, 335.999756, 223.999313, 336.000000,
  0, 223.999237, 336.000000, 223.999161, 336.000000, 223.999084, 336.000000,
  1, 223.999084, 448.000000, 214.497086, 448.000000, 201.745163, 434.500000, 190.116257, 410.750000,
  0, 201.370163, 407.000000, 212.622131, 402.750000, 223.999084, 397.875000,
  0, 235.378006, 402.750000, 246.629944, 407.000000, 257.881897, 410.750000,
  0, 246.254944, 434.500000, 233.501007, 448.000000, 223.999084, 448.000000,
  0, 223.999084, 448.000000, 223.999084, 448.000000, 223.999084, 448.000000,
  1, 223.999084, 64.000000, 233.501038, 64.000000, 246.254944, 77.500000, 257.881897, 101.250000,
  0, 246.629898, 105.000000, 235.377991, 109.250000, 223.999084, 114.125000,
  0, 212.622086, 109.250000, 201.370163, 105.000000, 190.116257, 101.250000,
  0, 201.745163, 77.500000, 214.497116, 64.000000, 223.999084, 64.000000,
  0, 223.999084, 64.000000, 223.999084, 64.000000, 223.999084, 64.000000,
  1, 100.223640, 189.125000, 92.471642, 195.375000, 85.219719, 201.750000, 78.342773, 208.250000,
  0, 63.213863, 184.750000, 59.338852, 167.250000, 63.338863, 160.000000,
  0, 66.715866, 153.875000, 79.717773, 148.500000, 101.223648, 148.500000,
  0, 102.973648, 148.500000, 105.098648, 148.875000, 106.973648, 148.875000,
  0, 104.098640, 162.250000, 101.848640, 175.625000, 100.223640, 189.125000,
  0, 100.223640, 189.125000, 100.223640, 189.125000, 100.223640, 189.125000,
  1, 63.338860, 352.000000, 59.338860, 344.750000, 63.213860, 327.250000, 78.342773, 303.750000,
  0, 85.219727, 310.250000, 92.471680, 316.625000, 100.223648, 322.875000,
  0, 101.848648, 336.625000, 104.223648, 350.000000, 106.973648, 363.000000,
  0, 82.344719, 363.875000, 67.090813, 358.625000, 63.338860, 352.000000,
  0, 63.338860, 352.000000, 63.338860, 352.000000, 63.338860, 352.000000,
  1, 438.171082, 128.000000, 427.294067, 108.500000, 397.661285, 77.250000, 321.895630, 86.125000,
  0, 300.391693, 34.875000, 267.633850, 0.000000, 223.999084, 0.000000,
  0, 180.364319, 0.000000, 147.608429, 34.875000, 126.102554, 86.125000,
  0, 50.336899, 77.375000, 20.705999, 108.500000, 9.829070, 128.000000,
  0, -6.549840, 157.375000, -5.174840, 201.125000, 34.958000, 256.000000,
  0, -5.174840, 310.875000, -6.549840, 354.625000, 9.829070, 384.000000,
  0, 38.959942, 436.375000, 111.475594, 427.625000, 126.102554, 425.875000,
  0, 147.608414, 477.125000, 180.364288, 512.000000, 223.999084, 512.000000,
  0, 267.633881, 512.000000, 300.391693, 477.125000, 321.895599, 425.875000,
  0, 336.524506, 427.625000, 409.040161, 436.375000, 438.171021, 384.000000,
  0, 454.549988, 354.625000, 453.174988, 310.875000, 413.040161, 256.000000,
  0, 453.174988, 201.125000, 454.549988, 157.375000, 438.170990, 128.000000,
  0, 438.171021, 128.000000, 438.171051, 128.000000, 438.171082, 128.000000,
  1, 223.999084, 224.000000, 206.326996, 224.004318, 192.004028, 238.333130, 192.006897, 256.005219,
  0, 192.009766, 273.677307, 206.337402, 288.001434, 224.009491, 288.000000,
  0, 241.681580, 287.998566, 256.006897, 273.672089, 256.006897, 256.000000,
  0, 255.971344, 238.338226, 241.660278, 224.030945, 223.998795, 224.000015,
  0, 223.998886, 224.000015, 223.998993, 224.000000, 223.999084, 224.000000,
  2]);
export default Path;