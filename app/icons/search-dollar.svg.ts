// prettier-ignore
const Path: Readonly<Float32Array> = new Float32Array([
  1, 235.130020, 199.420029, 220.126694, 194.920029, 205.123352, 190.420029, 190.120026, 185.920029,
  0, 184.960022, 184.370026, 181.350021, 179.140030, 181.350021, 173.190033,
  0, 181.350021, 165.920029, 186.650024, 160.000031, 193.150024, 160.000031,
  0, 202.520020, 160.000031, 211.890030, 160.000031, 221.260025, 160.000031,
  0, 225.820023, 160.000031, 230.220032, 161.290024, 234.080017, 163.720032,
  0, 237.320023, 165.750031, 241.440018, 165.630035, 244.210022, 162.990036,
  0, 248.126694, 159.253372, 252.043350, 155.516693, 255.960022, 151.780029,
  0, 259.490021, 148.410034, 259.290009, 142.570023, 255.390015, 139.640030,
  0, 246.290009, 132.810028, 235.310013, 128.870026, 224.020020, 128.290024,
  0, 224.020020, 122.860016, 224.020020, 117.430008, 224.020020, 112.000000,
  0, 224.020020, 107.580002, 220.440018, 104.000000, 216.020020, 104.000000,
  0, 210.686691, 104.000000, 205.353348, 104.000000, 200.020020, 104.000000,
  0, 195.600021, 104.000000, 192.020020, 107.580002, 192.020020, 112.000000,
  0, 192.020020, 117.373329, 192.020020, 122.746666, 192.020020, 128.119995,
  0, 168.390015, 128.750000, 149.340027, 148.669998, 149.340027, 173.190002,
  0, 149.340027, 193.160004, 162.330032, 211.000000, 180.920029, 216.580002,
  0, 195.923355, 221.080002, 210.926697, 225.580002, 225.930023, 230.080002,
  0, 231.090027, 231.630005, 234.700027, 236.860001, 234.700027, 242.809998,
  0, 234.700027, 250.080002, 229.400024, 256.000000, 222.900024, 256.000000,
  0, 213.533356, 256.000000, 204.166687, 256.000000, 194.800018, 256.000000,
  0, 190.240021, 256.000000, 185.840012, 254.710007, 181.980011, 252.279999,
  0, 178.740005, 250.250000, 174.620010, 250.369995, 171.850006, 253.009995,
  0, 167.933334, 256.746674, 164.016678, 260.483337, 160.100006, 264.220001,
  0, 156.570007, 267.589996, 156.770004, 273.429993, 160.670013, 276.360016,
  0, 169.770020, 283.190002, 180.750015, 287.130005, 192.040009, 287.710022,
  0, 192.040009, 293.140015, 192.040009, 298.570007, 192.040009, 304.000000,
  0, 192.040009, 308.420013, 195.620010, 312.000000, 200.040009, 312.000000,
  0, 205.373337, 312.000000, 210.706680, 312.000000, 216.040009, 312.000000,
  0, 220.460007, 312.000000, 224.040009, 308.420013, 224.040009, 304.000000,
  0, 224.040009, 298.626678, 224.040009, 293.253326, 224.040009, 287.880005,
  0, 247.670013, 287.250000, 266.720001, 267.339996, 266.720001, 242.809998,
  0, 266.720001, 222.839996, 253.729996, 205.000000, 235.130005, 199.419998,
  0, 235.130005, 199.420013, 235.130020, 199.420013, 235.130020, 199.420029,
  1, 208.020020, 351.960022, 128.480011, 351.960022, 64.020020, 287.620026, 64.020020, 207.980026,
  0, 64.020020, 128.450027, 128.370026, 64.000031, 208.020020, 64.000031,
  0, 287.560028, 64.000031, 352.020020, 128.340027, 352.020020, 207.980026,
  0, 352.020020, 287.510010, 287.670013, 351.960022, 208.020020, 351.960022,
  0, 208.020020, 351.960022, 208.020020, 351.960022, 208.020020, 351.960022,
  1, 505.040009, 442.660004, 471.803345, 409.429993, 438.566681, 376.200012, 405.330017, 342.970001,
  0, 400.830017, 338.470001, 394.730011, 335.970001, 388.330017, 335.970001,
  0, 382.896698, 335.970001, 377.463348, 335.970001, 372.030029, 335.970001,
  0, 399.630035, 300.670013, 416.030029, 256.279999, 416.030029, 207.980011,
  0, 416.029999, 93.089996, 322.920013, 0.000000, 208.020004, 0.000000,
  0, 93.119995, 0.000000, 0.000000, 93.089996, 0.000000, 207.979996,
  0, 0.000000, 322.869995, 93.110001, 415.959991, 208.020004, 415.959991,
  0, 256.320007, 415.959991, 300.730011, 399.559998, 336.029999, 371.959991,
  0, 336.029999, 377.393311, 336.029999, 382.826660, 336.029999, 388.259979,
  0, 336.029999, 394.659973, 338.529999, 400.759979, 343.029999, 405.259979,
  0, 376.266663, 438.489990, 409.503326, 471.719971, 442.739990, 504.949982,
  0, 452.139984, 514.349976, 467.339996, 514.349976, 476.639984, 504.949982,
  0, 486.073303, 495.516663, 495.506653, 486.083313, 504.939972, 476.649994,
  0, 514.339966, 467.250000, 514.339966, 452.059998, 505.039978, 442.660004,
  0, 505.039978, 442.660004, 505.040009, 442.660004, 505.040009, 442.660004,
  2]);
export default Path;