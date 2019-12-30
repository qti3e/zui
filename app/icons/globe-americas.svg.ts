// prettier-ignore
const Path: Readonly<Float32Array> = new Float32Array([
  1, 417.000000, 274.250000, 411.209991, 272.799988, 406.160004, 269.250000, 402.850006, 264.279999,
  0, 396.856659, 255.289993, 390.863342, 246.300003, 384.869995, 237.309998,
  0, 379.490021, 229.252151, 379.490021, 218.747849, 384.869995, 210.690002,
  0, 391.399994, 200.896667, 397.929993, 191.103333, 404.459991, 181.309998,
  0, 406.779999, 177.839996, 409.959991, 175.020004, 413.699982, 173.160004,
  0, 418.026642, 170.996674, 422.353333, 168.833328, 426.679993, 166.669998,
  0, 440.200012, 193.589996, 448.000000, 223.869995, 448.000000, 256.000000,
  0, 448.000000, 264.670013, 447.260010, 273.160004, 446.179993, 281.540009,
  0, 436.453339, 279.110016, 426.726654, 276.679993, 417.000000, 274.250000,
  0, 417.000000, 274.250000, 417.000000, 274.250000, 417.000000, 274.250000,
  1, 330.290009, 365.600006, 326.390015, 369.480011, 322.300018, 373.550018, 318.980011, 376.880005,
  0, 315.990021, 379.880005, 313.880005, 383.580017, 312.809998, 387.589996,
  0, 311.299988, 393.250000, 310.079987, 398.970001, 308.040009, 404.459991,
  0, 302.243347, 420.076660, 296.446686, 435.693329, 290.650024, 451.309998,
  0, 276.890015, 454.309998, 262.650024, 456.000000, 248.000031, 456.000000,
  0, 248.000031, 446.873322, 248.000031, 437.746674, 248.000031, 428.619995,
  0, 249.690033, 416.000000, 240.360031, 392.359985, 225.370026, 377.369995,
  0, 219.370026, 371.369995, 216.000031, 363.229980, 216.000031, 354.739990,
  0, 216.000031, 344.069977, 216.000031, 333.399994, 216.000031, 322.729980,
  0, 216.000031, 311.089966, 209.730026, 300.389984, 199.540039, 294.759979,
  0, 185.170044, 286.809967, 164.730042, 275.699982, 150.730042, 268.649963,
  0, 139.250046, 262.869965, 128.630035, 255.509964, 119.080040, 246.899963,
  0, 118.813370, 246.659958, 118.546707, 246.419968, 118.280037, 246.179962,
  0, 111.450661, 240.015320, 105.387192, 233.052063, 100.220047, 225.439972,
  0, 90.840042, 211.669952, 75.560043, 189.019958, 65.630035, 174.299957,
  0, 86.100037, 128.799957, 122.990036, 92.259956, 168.830032, 72.409958,
  0, 176.833359, 76.413292, 184.836700, 80.416626, 192.840027, 84.419960,
  0, 203.479996, 89.739998, 216.000000, 82.010002, 216.000000, 70.110001,
  0, 216.000000, 66.343338, 216.000000, 62.576668, 216.000000, 58.810001,
  0, 223.990005, 57.520000, 232.119995, 56.700001, 240.389999, 56.389999,
  0, 249.823334, 65.823334, 259.256653, 75.256668, 268.690002, 84.690002,
  0, 274.940002, 90.940002, 274.940002, 101.070000, 268.690002, 107.320000,
  0, 267.126678, 108.879997, 265.563324, 110.440002, 264.000000, 112.000000,
  0, 260.553345, 115.446663, 257.106659, 118.893333, 253.660004, 122.339996,
  0, 250.540009, 125.459999, 250.540009, 130.529999, 253.660004, 133.649994,
  0, 255.223343, 135.213333, 256.786682, 136.776657, 258.350006, 138.339996,
  0, 261.470001, 141.459991, 261.470001, 146.529999, 258.350006, 149.649994,
  0, 255.683334, 152.316666, 253.016678, 154.983322, 250.350006, 157.649994,
  0, 248.847931, 159.149155, 246.812195, 159.990784, 244.690002, 159.989990,
  0, 241.693329, 159.989990, 238.696671, 159.989990, 235.699997, 159.989990,
  0, 233.619995, 159.989990, 231.619995, 160.799988, 230.119995, 162.259995,
  0, 226.813324, 165.476654, 223.506668, 168.693329, 220.199997, 171.909988,
  0, 217.704971, 174.339615, 217.066238, 178.103241, 218.619995, 181.219986,
  0, 223.816666, 191.616653, 229.013321, 202.013321, 234.209991, 212.409988,
  0, 236.869995, 217.729996, 232.999985, 223.989990, 227.059998, 223.989990,
  0, 225.179993, 223.989990, 223.300003, 223.989990, 221.419998, 223.989990,
  0, 219.490005, 223.989990, 217.630005, 223.289993, 216.179993, 222.029984,
  0, 213.086655, 219.343323, 209.993332, 216.656647, 206.899994, 213.969986,
  0, 202.627594, 210.263550, 196.717102, 209.085251, 191.349991, 210.869980,
  0, 180.959991, 214.333313, 170.569992, 217.796646, 160.179993, 221.259979,
  0, 155.299622, 222.887299, 152.008469, 227.455429, 152.010010, 232.599976,
  0, 152.009995, 237.129974, 154.569992, 241.259979, 158.619995, 243.289978,
  0, 162.313324, 245.136642, 166.006668, 246.983307, 169.699997, 248.829971,
  0, 179.110001, 253.539978, 189.489990, 255.989975, 200.009995, 255.989975,
  0, 210.529999, 255.989975, 222.599991, 283.279968, 232.009995, 287.989990,
  0, 254.259995, 287.989990, 276.510010, 287.989990, 298.760010, 287.989990,
  0, 307.250000, 287.989990, 315.380005, 291.359985, 321.390015, 297.359985,
  0, 325.953339, 301.923309, 330.516693, 306.486664, 335.080017, 311.049988,
  0, 340.799194, 316.771362, 344.011414, 324.530304, 344.010010, 332.619995,
  0, 344.010040, 344.985138, 339.076508, 356.855469, 330.301086, 365.588989,
  0, 330.297394, 365.592651, 330.293701, 365.596344, 330.290009, 365.600006,
  1, 248.000000, 8.000000, 111.029999, 8.000000, 0.000000, 119.029999, 0.000000, 256.000000,
  0, 0.000000, 392.970001, 111.029999, 504.000000, 248.000000, 504.000000,
  0, 384.970001, 504.000000, 496.000000, 392.970001, 496.000000, 256.000000,
  0, 496.000000, 119.029999, 384.970001, 8.000000, 248.000000, 8.000000,
  0, 248.000000, 8.000000, 248.000000, 8.000000, 248.000000, 8.000000,
  2]);
export default Path;