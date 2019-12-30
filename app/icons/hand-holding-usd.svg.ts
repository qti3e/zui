// prettier-ignore
const Path: Readonly<Float32Array> = new Float32Array([
  1, 565.270020, 328.100006, 553.470032, 317.399994, 535.070007, 318.100006, 522.670044, 328.100006,
  0, 491.870026, 352.733337, 461.070007, 377.366669, 430.269989, 402.000000,
  0, 418.927673, 411.099457, 404.811218, 416.040222, 390.269989, 416.000000,
  0, 350.846649, 416.000000, 311.423340, 416.000000, 272.000000, 416.000000,
  0, 266.283752, 416.000000, 261.001709, 412.950409, 258.143585, 408.000000,
  0, 255.285461, 403.049591, 255.285461, 396.950409, 258.143585, 392.000000,
  0, 261.001709, 387.049591, 266.283752, 384.000000, 272.000000, 384.000000,
  0, 298.096680, 384.000000, 324.193329, 384.000000, 350.290009, 384.000000,
  0, 366.190002, 384.000000, 381.000000, 373.100006, 383.540009, 357.399994,
  0, 383.853210, 355.597015, 384.007111, 353.769928, 384.000031, 351.939972,
  0, 383.967194, 334.290802, 369.650238, 320.000244, 352.000519, 320.000000,
  0, 298.667023, 320.000000, 245.333511, 320.000000, 192.000000, 320.000000,
  0, 165.016098, 320.007111, 138.854599, 329.288971, 117.900002, 346.290009,
  0, 102.400002, 358.860016, 86.900002, 371.429993, 71.400002, 384.000000,
  0, 52.933334, 384.000000, 34.466667, 384.000000, 16.000000, 384.000000,
  0, 11.756534, 384.000000, 7.686875, 385.685699, 4.686292, 388.686279,
  0, 1.685709, 391.686859, -0.000000, 395.756531, 0.000000, 400.000000,
  0, 0.000000, 432.000000, 0.000000, 464.000000, 0.000000, 496.000000,
  0, 0.000001, 500.243469, 1.685711, 504.313141, 4.686295, 507.313721,
  0, 7.686878, 510.314301, 11.756538, 512.000000, 16.000004, 512.000000,
  0, 134.923340, 512.000000, 253.846649, 512.000000, 372.769989, 512.000000,
  0, 387.306335, 512.011353, 401.413483, 507.073853, 412.769989, 498.000000,
  0, 463.179993, 457.666656, 513.589966, 417.333344, 564.000000, 377.000000,
  0, 571.363525, 371.110504, 575.754700, 362.273254, 576.001465, 352.847412,
  0, 576.248230, 343.421570, 572.325317, 334.366669, 565.280029, 328.100006,
  0, 565.276672, 328.100006, 565.273376, 328.100006, 565.270020, 328.100006,
  1, 271.059998, 144.300003, 289.149994, 149.066666, 307.239990, 153.833344, 325.329987, 158.600006,
  0, 329.119812, 159.486221, 331.840210, 162.809799, 331.959991, 166.700012,
  0, 331.959991, 171.300018, 327.869995, 175.100006, 322.839996, 175.100006,
  0, 310.973328, 175.100006, 299.106659, 175.100006, 287.239990, 175.100006,
  0, 283.403625, 175.088898, 279.605011, 174.342072, 276.049988, 172.900009,
  0, 270.809998, 170.700012, 264.769989, 171.200012, 260.750000, 174.900009,
  0, 254.416672, 180.733337, 248.083328, 186.566681, 241.750000, 192.400009,
  0, 240.871231, 193.169205, 240.112793, 194.065842, 239.500000, 195.060013,
  0, 237.915619, 197.658844, 237.434235, 200.782639, 238.162720, 203.737885,
  0, 238.891205, 206.693130, 240.769287, 209.235306, 243.380005, 210.800018,
  0, 253.902161, 217.114807, 265.683197, 221.040665, 277.890015, 222.300018,
  0, 277.890015, 228.200012, 277.890015, 234.100006, 277.890015, 240.000000,
  0, 277.890015, 248.800003, 285.720001, 256.000000, 295.260010, 256.000000,
  0, 301.050018, 256.000000, 306.839996, 256.000000, 312.630005, 256.000000,
  0, 322.179993, 256.000000, 330.010010, 248.800003, 330.010010, 240.000000,
  0, 330.010010, 234.133331, 330.010010, 228.266663, 330.010010, 222.399994,
  0, 362.940002, 218.799988, 387.850006, 191.399994, 383.510010, 159.399994,
  0, 380.360016, 136.399994, 361.050018, 118.099991, 336.950012, 111.699997,
  0, 318.860016, 106.933334, 300.769989, 102.166664, 282.679993, 97.400002,
  0, 278.890167, 96.513794, 276.169769, 93.190224, 276.049988, 89.300011,
  0, 276.049988, 84.700005, 280.139984, 80.900002, 285.169983, 80.900002,
  0, 297.036652, 80.900002, 308.903320, 80.900002, 320.769989, 80.900002,
  0, 324.619843, 80.905983, 328.432526, 81.652901, 332.000031, 83.099998,
  0, 337.230011, 85.299995, 343.279999, 84.799995, 347.299988, 81.099998,
  0, 353.633331, 75.266663, 359.966644, 69.433334, 366.299988, 63.599998,
  0, 367.149750, 62.847153, 367.881287, 61.970665, 368.470032, 61.000000,
  0, 370.067871, 58.401955, 370.561127, 55.273022, 369.839935, 52.309402,
  0, 369.118744, 49.345783, 367.242981, 46.793339, 364.629974, 45.220001,
  0, 354.104187, 38.905334, 342.319946, 34.979527, 330.110046, 33.720001,
  0, 330.110046, 27.813334, 330.110016, 21.906668, 330.110016, 16.000000,
  0, 330.110016, 7.200000, 322.290009, 0.000000, 312.740021, 0.000000,
  0, 306.950012, 0.000000, 301.160004, 0.000000, 295.369995, 0.000000,
  0, 285.820007, 0.000000, 278.000000, 7.200000, 278.000000, 16.000000,
  0, 278.000000, 21.866667, 278.000000, 27.733332, 278.000000, 33.599998,
  0, 245.110001, 37.199997, 220.149994, 64.599998, 224.490005, 96.599998,
  0, 227.630005, 119.599998, 247.000000, 137.899994, 271.059998, 144.300003,
  0, 271.059998, 144.300003, 271.059998, 144.300003, 271.059998, 144.300003,
  2]);
export default Path;