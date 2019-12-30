// prettier-ignore
const Path: Readonly<Float32Array> = new Float32Array([
  1, 408.000000, 358.429993, 408.000000, 362.669983, 406.309998, 366.739990, 403.309998, 369.739990,
  0, 400.119995, 372.929993, 396.929993, 376.119995, 393.739990, 379.309998,
  0, 390.739990, 382.309998, 386.669983, 384.000000, 382.429993, 384.000000,
  0, 377.376648, 384.000000, 372.323334, 384.000000, 367.269989, 384.000000,
  0, 363.029999, 384.000000, 358.959991, 382.309998, 355.959991, 379.309998,
  0, 351.623322, 374.973328, 347.286652, 370.636658, 342.949982, 366.299988,
  0, 336.301270, 359.651489, 326.651703, 356.979034, 317.529999, 359.259949,
  0, 310.440002, 361.033295, 303.349976, 362.806641, 296.259979, 364.579987,
  0, 294.989990, 364.899994, 293.689972, 365.059998, 292.379974, 365.059998,
  0, 288.933319, 365.059998, 285.486633, 365.059998, 282.039978, 365.059998,
  0, 277.799988, 365.059998, 273.729980, 363.369995, 270.729980, 360.369995,
  0, 266.759979, 356.399994, 262.789978, 352.429993, 258.819977, 348.459991,
  0, 257.320801, 346.957916, 256.479187, 344.922180, 256.479980, 342.799988,
  0, 256.479980, 339.399994, 256.479980, 335.999969, 256.479980, 332.599976,
  0, 256.479980, 329.329987, 258.469971, 326.389984, 261.509979, 325.169983,
  0, 274.623322, 319.923309, 287.736633, 314.676666, 300.849976, 309.429993,
  0, 302.829987, 308.639984, 304.709961, 307.609985, 306.439972, 306.380005,
  0, 314.343292, 300.750000, 322.246643, 295.119995, 330.149963, 289.489990,
  0, 331.504547, 288.525085, 333.126862, 288.007629, 334.789978, 288.009979,
  0, 338.819977, 288.009979, 342.849976, 288.009979, 346.879974, 288.009979,
  0, 350.109985, 288.009979, 353.029968, 289.949982, 354.269989, 292.939972,
  0, 356.053314, 297.223297, 357.836670, 301.506653, 359.619995, 305.789978,
  0, 360.241241, 307.279175, 361.696411, 308.249298, 363.309998, 308.249969,
  0, 364.576660, 308.249969, 365.843323, 308.249969, 367.109985, 308.249969,
  0, 368.889984, 308.249969, 370.459991, 307.069977, 370.949982, 305.369965,
  0, 372.349976, 300.546631, 373.750000, 295.723297, 375.149994, 290.899963,
  0, 375.649994, 289.189972, 377.209991, 288.019958, 378.989990, 288.019958,
  0, 381.009979, 288.019958, 383.029999, 288.019958, 385.049988, 288.019958,
  0, 387.259979, 288.019958, 389.049988, 289.809967, 389.049988, 292.019958,
  0, 389.049988, 296.329956, 389.049988, 300.639954, 389.049988, 304.949951,
  0, 389.049988, 307.069946, 389.889984, 309.109955, 391.389984, 310.609955,
  0, 395.359985, 314.579956, 399.329987, 318.549957, 403.299988, 322.519958,
  0, 406.299988, 325.519958, 407.989990, 329.589966, 407.989990, 333.829956,
  0, 407.989990, 342.029968, 407.989990, 350.229950, 407.989990, 358.429962,
  0, 407.993317, 358.429962, 407.996674, 358.429993, 408.000000, 358.429993,
  1, 236.660004, 248.229996, 233.770004, 253.050003, 228.559998, 256.000000, 222.940002, 256.000000,
  0, 222.836670, 256.000000, 222.733337, 256.000000, 222.630005, 256.000000,
  0, 218.389999, 256.000000, 214.320007, 257.690002, 211.320007, 260.690002,
  0, 209.433334, 262.576660, 207.546677, 264.463348, 205.660004, 266.350006,
  0, 202.540009, 269.470001, 202.540009, 274.540009, 205.660004, 277.660004,
  0, 207.546677, 279.546661, 209.433334, 281.433350, 211.320007, 283.320007,
  0, 214.320007, 286.320007, 216.010010, 290.390015, 216.010010, 294.630005,
  0, 216.010010, 297.753326, 216.010010, 300.876678, 216.010010, 304.000000,
  0, 216.010010, 312.839996, 208.850006, 320.000000, 200.010010, 320.000000,
  0, 197.973343, 320.000000, 195.936676, 320.000000, 193.900009, 320.000000,
  0, 187.840012, 320.000000, 182.300003, 316.579987, 179.590012, 311.149994,
  0, 172.050018, 296.073334, 164.510010, 280.996643, 156.970016, 265.919983,
  0, 154.530014, 261.039978, 148.020020, 259.979980, 144.160019, 263.839996,
  0, 137.670013, 270.326660, 131.180023, 276.813324, 124.690018, 283.299988,
  0, 121.690018, 286.299988, 117.620018, 287.989990, 113.380020, 287.989990,
  0, 92.523346, 287.989990, 71.666672, 287.989990, 50.810001, 287.989990,
  0, 49.119999, 277.549988, 48.000000, 266.920013, 48.000000, 256.000000,
  0, 48.000000, 145.720001, 137.720001, 56.000000, 248.000000, 56.000000,
  0, 269.510010, 56.000000, 290.200012, 59.509998, 309.630005, 65.820000,
  0, 292.910004, 78.663330, 276.190002, 91.506668, 259.470001, 104.349998,
  0, 254.360001, 107.760002, 254.839996, 115.409996, 260.329987, 118.159996,
  0, 263.939972, 119.963326, 267.549988, 121.766663, 271.159973, 123.569992,
  0, 276.579987, 126.279991, 279.999969, 131.819992, 279.999969, 137.879990,
  0, 279.999969, 163.919998, 279.999969, 189.959991, 279.999969, 216.000000,
  0, 279.999969, 220.419998, 276.419983, 224.000000, 271.999969, 224.000000,
  0, 270.979980, 224.000000, 269.959961, 224.000000, 268.939972, 224.000000,
  0, 265.909973, 224.000000, 263.139984, 222.289993, 261.789978, 219.580002,
  0, 260.229980, 216.460007, 255.829971, 216.290009, 254.029984, 219.279999,
  0, 248.239990, 228.929993, 242.449982, 238.580002, 236.659988, 248.229996,
  0, 236.659988, 248.229996, 236.660004, 248.229996, 236.660004, 248.229996,
  1, 248.000000, 8.000000, 111.029999, 8.000000, 0.000000, 119.029999, 0.000000, 256.000000,
  0, 0.000000, 392.970001, 111.029999, 504.000000, 248.000000, 504.000000,
  0, 384.970001, 504.000000, 496.000000, 392.970001, 496.000000, 256.000000,
  0, 496.000000, 119.029999, 384.970001, 8.000000, 248.000000, 8.000000,
  0, 248.000000, 8.000000, 248.000000, 8.000000, 248.000000, 8.000000,
  2]);
export default Path;