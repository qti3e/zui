// prettier-ignore
const Path: Readonly<Float32Array> = new Float32Array([
  1, 535.953064, 352.000000, 493.312378, 446.171875, 398.312195, 512.000000, 287.968262, 512.000000,
  0, 283.702637, 512.000000, 279.421387, 511.901031, 275.124481, 511.703125,
  0, 171.155579, 506.937500, 81.264809, 442.234375, 40.014740, 352.000000,
  0, 53.322056, 352.000000, 66.629372, 352.000000, 79.936684, 352.000000,
  0, 60.400192, 332.468750, 40.863693, 312.937500, 21.327200, 293.406250,
  0, 18.638819, 280.412170, 16.930895, 267.234467, 16.217804, 253.984344,
  0, 15.836349, 243.988251, 16.003283, 233.978149, 16.717834, 224.000198,
  0, 32.457439, 224.000137, 48.197044, 224.000061, 63.936649, 224.000000,
  0, 50.139767, 210.208328, 36.342880, 196.416672, 22.546000, 182.625000,
  0, 37.101650, 117.041115, 75.601540, 59.246716, 130.514755, 20.546997,
  0, 133.222916, 18.609081, 136.466232, 17.560738, 139.796143, 17.546881,
  0, 145.219574, 17.576979, 150.275696, 20.292309, 153.296158, 24.796879,
  0, 156.337341, 29.236300, 156.947693, 34.905605, 154.921158, 39.890621,
  0, 148.417343, 56.199963, 145.076660, 73.597961, 145.077362, 91.156250,
  0, 145.077393, 136.265625, 166.124298, 177.734375, 202.796234, 204.890625,
  0, 206.791214, 207.798584, 209.251419, 212.361755, 209.485291, 217.297485,
  0, 209.719162, 222.233215, 207.701477, 227.008575, 203.999359, 230.281250,
  0, 177.452438, 254.265625, 162.827423, 286.781250, 162.827423, 321.859375,
  0, 162.827423, 381.890625, 205.780609, 432.140625, 262.718201, 443.781250,
  0, 263.551544, 422.026031, 264.384857, 400.270844, 265.218201, 378.515625,
  0, 256.166138, 384.677094, 247.114059, 390.838531, 238.061996, 397.000000,
  0, 234.933884, 399.006012, 230.855896, 398.700165, 228.061996, 396.250000,
  0, 225.329300, 393.671448, 224.751465, 389.542114, 226.671371, 386.312500,
  0, 233.379700, 375.057281, 240.088043, 363.802094, 246.796371, 352.546875,
  0, 232.775513, 349.635406, 218.754654, 346.723969, 204.733795, 343.812500,
  0, 201.014389, 343.052673, 198.343170, 339.780609, 198.343170, 335.984375,
  0, 198.343170, 332.188141, 201.014389, 328.916077, 204.733795, 328.156250,
  0, 218.754654, 325.250000, 232.775497, 322.343750, 246.796356, 319.437500,
  0, 240.093216, 308.192719, 233.390091, 296.947906, 226.686951, 285.703125,
  0, 224.745941, 282.483185, 225.311981, 278.345703, 228.046494, 275.765411,
  0, 230.781006, 273.185120, 234.944351, 272.859924, 238.046326, 274.984375,
  0, 248.176559, 281.869781, 258.306793, 288.755219, 268.437012, 295.640625,
  0, 272.275543, 199.651031, 276.114105, 103.661469, 279.952637, 7.671880,
  0, 280.114136, 3.375679, 283.653442, -0.018469, 287.952637, 0.000000,
  0, 287.968262, 0.000000, 287.983887, 0.000000, 287.999512, 0.000000,
  0, 292.281921, 0.032697, 295.783234, 3.423938, 295.952637, 7.703121,
  0, 299.796417, 103.677078, 303.640167, 199.651031, 307.483948, 295.625000,
  0, 317.614166, 288.734375, 327.744415, 281.843750, 337.874634, 274.953125,
  0, 340.993073, 272.872223, 345.133026, 273.208588, 347.874634, 275.765625,
  0, 350.600555, 278.334747, 351.178467, 282.451508, 349.265259, 285.671875,
  0, 342.551697, 296.927094, 335.838165, 308.182281, 329.124603, 319.437500,
  0, 343.150665, 322.348969, 357.176727, 325.260406, 371.202789, 328.171875,
  0, 374.915161, 328.939514, 377.577850, 332.209106, 377.577850, 336.000000,
  0, 377.577850, 339.790894, 374.915161, 343.060486, 371.202789, 343.828125,
  0, 357.176727, 346.734375, 343.150665, 349.640625, 329.124603, 352.546875,
  0, 335.827728, 363.791656, 342.530884, 375.036469, 349.234009, 386.281250,
  0, 351.179443, 389.489380, 350.626587, 393.619598, 347.905884, 396.203125,
  0, 345.128876, 398.710815, 341.012726, 399.037811, 337.874634, 397.000000,
  0, 328.817322, 390.843750, 319.760010, 384.687500, 310.702698, 378.531250,
  0, 311.536041, 400.312500, 312.369354, 422.093750, 313.202698, 443.875000,
  0, 361.687164, 434.468750, 400.780975, 395.718750, 410.515381, 347.375000,
  0, 419.442535, 304.265472, 404.751526, 259.662872, 371.952759, 230.296875,
  0, 368.241180, 227.023041, 366.217285, 222.240707, 366.451263, 217.297104,
  0, 366.685242, 212.353500, 369.151703, 207.783676, 373.155914, 204.875000,
  0, 409.812225, 177.703125, 430.843506, 136.265625, 430.843506, 91.140617,
  0, 430.854004, 73.562874, 427.507385, 56.146660, 420.983459, 39.826408,
  0, 418.944519, 34.846882, 419.549438, 29.173552, 422.593506, 24.734371,
  0, 425.618225, 20.236530, 430.673279, 17.527617, 436.093506, 17.500000,
  0, 439.411438, 17.513168, 442.643494, 18.555944, 445.343506, 20.484379,
  0, 500.172058, 59.344479, 538.624390, 117.173157, 553.250000, 182.765594,
  0, 539.500000, 196.510391, 525.749939, 210.255203, 511.999908, 224.000000,
  0, 527.651001, 224.000000, 543.302063, 224.000000, 558.953125, 224.000000,
  0, 559.312500, 229.765625, 560.000000, 235.453125, 560.000000, 241.265625,
  0, 559.967102, 258.678772, 558.250610, 276.046021, 554.874634, 293.126862,
  0, 535.244507, 312.751251, 515.614380, 332.375610, 495.984283, 352.000000,
  0, 509.307220, 352.000000, 522.630127, 352.000000, 535.953064, 352.000000,
  2]);
export default Path;