// prettier-ignore
const Path: Readonly<Float32Array> = new Float32Array([
  1, 385.399963, 344.999969, 383.699951, 349.299957, 380.099976, 354.299957, 375.599976, 356.099976,
  0, 363.499969, 360.999969, 329.999969, 364.799988, 313.199982, 355.799988,
  0, 302.499969, 350.099976, 295.699982, 337.299988, 289.799988, 329.799988,
  0, 287.000000, 326.199982, 272.899994, 316.899994, 289.599976, 316.899994,
  0, 302.699982, 349.600006, 347.599976, 345.899994, 385.399963, 345.000000,
  0, 385.399963, 345.000000, 385.399963, 344.999969, 385.399963, 344.999969,
  1, 293.199982, 298.299957, 312.099976, 308.199951, 346.799988, 309.299957, 372.500000, 308.499969,
  0, 373.899994, 314.099976, 373.799988, 321.099976, 373.899994, 327.899963,
  0, 340.899994, 329.699951, 301.899994, 321.499969, 293.200012, 298.299957,
  0, 293.200012, 298.299957, 293.199982, 298.299957, 293.199982, 298.299957,
  1, 435.099976, 285.899963, 424.999969, 305.099976, 410.699982, 326.299957, 381.099976, 326.899963,
  0, 380.499969, 320.699951, 379.999969, 311.299957, 381.099976, 307.499969,
  0, 403.799988, 305.299957, 417.699982, 293.799957, 435.099976, 285.899963,
  0, 435.099976, 285.899963, 435.099976, 285.899963, 435.099976, 285.899963,
  1, 135.499985, 257.099976, 128.699982, 253.199982, 127.099983, 236.099976, 119.099983, 235.699982,
  0, 107.699982, 234.999985, 109.799980, 257.899994, 109.799980, 271.199982,
  0, 101.999977, 264.099976, 100.599983, 242.099976, 106.299980, 230.899979,
  0, 99.699982, 227.699982, 96.799980, 234.499985, 93.199982, 236.799973,
  0, 97.899979, 202.699982, 142.999985, 220.999969, 135.499985, 257.099976,
  0, 135.499985, 257.099976, 135.499985, 257.099976, 135.499985, 257.099976,
  1, 336.799988, 266.299988, 340.599976, 272.899994, 338.199982, 285.000000, 348.899994, 286.899994,
  0, 369.100006, 290.299988, 392.500000, 274.600006, 407.000000, 269.100006,
  0, 416.000000, 253.900009, 406.200012, 248.400009, 398.100006, 238.600006,
  0, 381.500000, 218.600006, 359.300018, 193.800003, 360.100006, 163.900009,
  0, 366.800018, 159.000015, 367.399994, 171.300003, 368.300018, 173.600006,
  0, 377.000031, 193.900009, 398.700012, 219.800003, 414.600006, 237.100006,
  0, 418.500000, 241.400009, 424.899994, 245.500000, 425.600006, 248.300003,
  0, 427.700012, 256.500000, 420.200012, 266.299988, 421.100006, 271.799988,
  0, 399.399994, 285.699982, 375.300018, 300.899994, 339.700012, 297.399994,
  0, 332.300018, 290.699982, 329.400024, 276.000000, 336.800018, 266.299988,
  0, 336.800018, 266.299988, 336.799988, 266.299988, 336.799988, 266.299988,
  1, 309.500000, 196.300003, 302.700012, 185.400009, 290.500000, 163.800003, 295.000000, 151.000000,
  0, 301.500000, 162.899994, 303.600006, 175.399994, 312.799988, 184.300003,
  0, 316.899994, 188.300003, 325.000000, 193.300003, 321.000000, 204.500000,
  0, 320.100006, 207.199997, 313.200012, 213.100006, 309.299988, 214.199997,
  0, 294.899994, 218.500000, 261.399994, 215.099991, 272.699982, 197.099991,
  0, 284.599976, 197.799988, 300.599976, 204.899994, 309.499969, 196.299988,
  0, 309.499969, 196.299988, 309.500000, 196.300003, 309.500000, 196.300003,
  1, 406.299988, 193.600006, 414.500000, 190.000000, 428.699982, 192.900009, 435.899994, 188.300003,
  0, 431.699982, 176.800003, 425.600006, 166.900009, 426.600006, 150.600006,
  0, 427.100006, 150.600006, 427.600006, 150.600006, 428.000000, 150.700012,
  0, 434.799988, 164.900009, 440.700012, 179.900009, 449.399994, 192.400009,
  0, 443.699982, 205.900009, 405.799988, 217.800003, 406.299988, 193.600006,
  0, 406.299988, 193.600006, 406.299988, 193.600006, 406.299988, 193.600006,
  1, 222.199997, 130.500000, 227.599991, 115.599998, 249.399994, 95.800003, 267.200012, 98.500000,
  0, 274.900024, 99.699997, 285.200012, 106.699997, 279.400024, 116.199997,
  0, 249.200027, 109.199997, 234.200027, 128.800003, 225.000031, 149.299988,
  0, 216.900024, 147.299988, 220.100037, 136.199982, 222.200027, 130.499985,
  0, 222.200012, 130.499985, 222.200012, 130.500000, 222.199997, 130.500000,
  1, 466.400024, 460.100006, 464.100037, 471.300018, 460.600037, 484.100006, 456.500031, 497.200012,
  0, 456.300018, 497.100006, 456.100037, 497.100006, 455.900024, 497.100006,
  0, 446.600006, 497.100006, 437.300018, 497.100006, 428.000000, 497.100006,
  0, 428.600006, 496.000000, 429.200012, 494.899994, 429.899994, 493.800018,
  0, 427.299988, 487.700012, 420.899994, 485.100006, 419.000000, 478.300018,
  0, 431.100006, 455.600006, 425.500000, 384.900024, 394.799988, 399.800018,
  0, 399.099976, 393.500031, 410.399994, 388.300018, 415.599976, 380.500031,
  0, 428.599976, 390.900024, 436.399963, 400.800018, 448.799988, 411.900024,
  0, 455.599976, 417.900024, 468.799988, 425.200012, 470.199982, 435.000031,
  0, 470.999969, 440.500031, 467.599976, 453.900024, 466.399994, 460.100037,
  0, 466.399994, 460.100037, 466.400024, 460.100006, 466.400024, 460.100006,
  1, 383.000031, 497.100006, 383.200043, 493.100006, 383.400024, 489.300018, 383.600037, 485.600006,
  0, 399.200043, 478.300018, 412.600037, 486.899994, 419.300049, 497.100006,
  0, 407.200043, 497.100006, 395.100006, 497.100006, 383.000000, 497.100006,
  0, 383.000000, 497.100006, 383.000031, 497.100006, 383.000031, 497.100006,
  1, 374.300018, 497.100006, 369.633362, 497.100006, 364.966675, 497.100006, 360.300018, 497.100006,
  0, 360.200012, 493.899994, 357.500031, 491.300018, 354.200012, 491.300018,
  0, 350.899994, 491.300018, 348.300018, 493.900024, 348.100006, 497.100006,
  0, 342.300018, 497.100006, 336.500000, 497.100006, 330.700012, 497.100006,
  0, 327.900024, 492.700012, 325.000000, 488.500000, 321.800018, 484.600006,
  0, 323.900024, 482.399994, 325.800018, 479.899994, 327.800018, 477.700012,
  0, 336.800018, 481.400024, 342.600006, 472.800018, 349.500031, 473.500000,
  0, 357.400024, 474.299988, 363.700043, 485.200012, 374.900024, 484.500000,
  0, 374.700012, 488.700012, 374.500031, 492.899994, 374.300018, 497.100006,
  0, 374.300018, 497.100006, 374.300018, 497.100006, 374.300018, 497.100006,
  1, 320.900024, 472.399994, 310.100037, 479.699982, 300.300018, 490.699982, 287.600037, 497.600006,
  0, 281.600037, 500.899994, 260.600037, 509.300018, 254.200043, 507.800018,
  0, 250.600037, 507.000031, 250.300049, 502.500031, 248.800049, 498.300018,
  0, 245.700043, 489.300018, 238.700043, 474.900024, 238.000046, 461.300018,
  0, 237.200043, 444.100006, 235.500046, 415.300018, 254.000046, 418.900024,
  0, 268.900055, 421.800018, 286.300049, 428.600037, 297.900055, 435.000031,
  0, 305.000061, 438.900024, 309.000061, 443.600037, 319.800049, 444.500031,
  0, 319.700043, 445.900024, 319.700043, 447.300018, 319.600037, 448.800018,
  0, 313.700043, 452.700012, 304.300049, 452.600006, 297.800049, 455.900024,
  0, 307.300049, 456.300018, 314.800049, 458.600037, 321.300049, 461.800018,
  0, 321.200043, 465.200012, 321.000061, 468.800018, 320.900055, 472.400024,
  0, 320.900055, 472.400024, 320.900024, 472.399994, 320.900024, 472.399994,
  1, 305.800018, 497.100006, 307.900024, 495.700012, 310.100006, 494.300018, 312.200012, 492.800018,
  0, 313.300018, 494.200012, 314.400024, 495.600006, 315.400024, 497.100006,
  0, 312.200012, 497.100006, 309.000031, 497.100006, 305.800018, 497.100006,
  0, 305.800018, 497.100006, 305.800018, 497.100006, 305.800018, 497.100006,
  1, 298.300018, 502.800018, 298.033356, 502.800018, 297.766693, 502.800018, 297.500031, 502.800018,
  0, 297.800018, 502.600006, 298.000031, 502.400024, 298.300018, 502.300018,
  0, 298.300018, 502.466675, 298.300018, 502.633362, 298.300018, 502.800018,
  0, 298.300018, 502.800018, 298.300018, 502.800018, 298.300018, 502.800018,
  1, 57.700001, 497.100006, 53.400002, 484.399994, 48.500000, 472.000000, 42.900002, 460.200012,
  0, 73.699997, 436.400024, 108.200005, 411.300018, 145.100006, 396.700012,
  0, 147.900009, 395.600006, 168.300003, 422.100006, 171.300003, 424.300018,
  0, 187.800003, 436.000031, 208.300003, 445.300018, 227.500000, 454.500031,
  0, 228.699997, 463.300018, 231.399994, 474.700043, 236.199997, 490.000031,
  0, 236.899994, 492.300018, 237.599991, 494.700043, 238.399994, 497.200043,
  0, 178.166656, 497.200043, 117.933334, 497.200043, 57.700001, 497.200043,
  0, 57.700001, 497.166687, 57.700001, 497.133362, 57.700001, 497.100006,
  1, 226.000000, 438.600006, 214.399994, 437.899994, 177.899994, 424.600006, 187.500000, 414.899994,
  0, 196.899994, 421.399994, 215.000000, 419.799988, 228.800003, 422.199982,
  0, 229.600006, 426.599976, 226.000000, 432.399994, 226.000000, 438.599976,
  0, 226.000000, 438.599976, 226.000000, 438.600006, 226.000000, 438.600006,
  1, 330.499969, 464.800018, 328.899963, 455.400024, 326.999969, 452.800018, 327.699982, 444.600006,
  0, 352.699982, 428.000000, 357.399994, 473.200012, 330.499969, 464.800018,
  0, 330.499969, 464.800018, 330.499969, 464.800018, 330.499969, 464.800018,
  1, 342.599976, 431.600006, 325.799988, 432.399994, 316.599976, 430.399994, 304.299988, 420.800018,
  0, 304.500000, 420.000031, 305.699982, 420.300018, 305.799988, 419.400024,
  0, 323.799988, 427.400024, 346.599976, 416.100037, 364.799988, 414.500031,
  0, 356.899994, 419.600037, 350.199982, 426.100037, 342.599976, 431.600037,
  0, 342.599976, 431.600037, 342.599976, 431.600006, 342.599976, 431.600006,
  1, 359.799988, 451.600006, 363.899994, 448.600006, 370.899994, 448.700012, 377.199982, 448.000000,
  0, 371.799988, 445.299988, 364.199982, 444.299988, 357.899994, 445.799988,
  0, 357.799988, 441.599976, 355.899994, 439.000000, 354.699982, 435.599976,
  0, 365.299988, 431.799988, 390.199982, 407.099976, 404.299988, 415.299988,
  0, 411.000000, 419.199982, 413.799988, 441.500000, 414.399994, 452.299988,
  0, 414.799988, 461.299988, 413.600006, 470.299988, 409.899994, 475.099976,
  0, 391.100006, 474.499969, 374.100006, 472.299988, 359.199982, 468.099976,
  0, 360.099976, 461.999969, 358.199982, 455.999969, 359.799988, 451.599976,
  0, 359.799988, 451.599976, 359.799988, 451.600006, 359.799988, 451.600006,
  1, 137.799988, 327.500000, 136.799988, 323.399994, 135.099991, 314.600006, 135.499985, 312.399994,
  0, 137.099991, 303.699982, 152.599991, 299.899994, 146.499985, 287.699982,
  0, 135.199982, 287.599976, 132.699982, 297.899994, 122.399986, 298.999969,
  0, 95.699982, 301.599976, 76.799988, 263.599976, 77.999985, 240.599976,
  0, 78.999985, 221.099976, 95.599983, 202.399979, 118.099983, 204.799973,
  0, 134.099976, 206.599976, 139.499985, 223.999969, 142.599976, 239.499969,
  0, 151.799973, 239.999969, 165.099976, 239.099976, 169.499969, 231.899963,
  0, 168.899963, 214.399963, 160.699966, 200.299957, 161.299973, 184.199966,
  0, 162.299973, 153.899963, 178.799973, 126.599968, 166.099976, 96.799965,
  0, 179.699982, 65.899963, 219.599976, 41.499966, 249.199982, 26.799965,
  0, 285.799988, 8.499966, 344.099976, 23.099964, 378.500000, 42.599964,
  0, 398.200012, 53.699966, 412.899994, 75.299965, 426.799988, 93.299965,
  0, 407.299988, 87.499962, 390.699982, 97.499962, 393.699982, 113.599960,
  0, 409.999969, 98.699959, 437.899994, 113.399963, 446.199982, 129.999954,
  0, 454.099976, 145.799957, 453.999969, 169.299957, 455.199982, 192.799957,
  0, 458.099976, 249.799957, 444.799988, 308.699951, 416.099976, 349.899963,
  0, 408.399963, 360.899963, 401.999969, 372.899963, 391.199982, 380.499969,
  0, 365.199982, 398.699982, 325.799988, 415.199982, 292.000000, 403.899963,
  0, 247.300003, 388.899963, 227.000000, 359.099976, 202.500000, 325.099976,
  0, 203.199997, 343.799988, 216.300003, 359.199982, 229.300003, 373.499969,
  0, 240.600006, 385.999969, 254.300003, 400.099976, 269.000000, 405.899963,
  0, 256.700012, 402.999969, 237.899994, 402.099976, 232.800003, 413.099976,
  0, 204.199997, 411.199982, 177.700012, 408.299988, 164.100006, 388.899963,
  0, 153.500000, 373.499969, 142.700012, 347.499969, 137.800003, 327.499969,
  0, 137.800003, 327.499969, 137.799988, 327.500000, 137.799988, 327.500000,
  1, 101.099991, 127.300003, 114.599991, 112.400002, 133.199982, 103.200005, 155.899994, 101.400002,
  0, 167.599991, 131.100006, 147.500000, 166.399994, 155.000000, 199.000000,
  0, 157.300003, 208.899994, 165.199997, 224.399994, 152.600006, 224.699997,
  0, 152.900009, 196.399994, 117.800003, 178.399994, 91.300003, 195.099991,
  0, 89.500000, 173.599991, 86.400002, 143.399994, 101.100006, 127.299988,
  0, 101.099998, 127.299995, 101.099998, 127.299995, 101.099991, 127.300003,
  1, 205.899994, 33.700001, 207.699997, 33.200001, 209.299988, 34.400002, 210.799988, 36.100002,
  0, 210.599991, 41.300003, 205.399994, 41.200001, 201.899994, 42.900002,
  0, 196.500000, 49.600002, 188.500000, 52.700001, 181.899994, 60.100002,
  0, 175.099991, 67.600006, 167.500000, 87.800003, 158.500000, 90.100006,
  0, 154.000000, 91.200005, 148.800003, 89.300003, 144.899994, 89.600006,
  0, 134.500000, 90.300003, 127.199997, 95.600006, 116.599991, 97.100006,
  0, 130.199997, 67.200005, 172.699982, 43.100006, 205.899994, 33.700005,
  0, 205.899994, 33.700005, 205.899994, 33.700001, 205.899994, 33.700001,
  1, 487.100006, 425.000000, 485.700012, 413.799988, 468.100006, 401.899994, 458.899994, 393.100006,
  0, 453.799988, 388.100006, 429.899994, 370.000000, 428.500000, 363.200012,
  0, 427.100006, 356.600006, 438.200012, 341.700012, 441.799988, 334.300018,
  0, 446.899994, 323.600006, 450.599976, 310.600006, 453.099976, 301.700012,
  0, 471.899963, 235.600006, 473.799988, 144.800018, 446.899963, 90.500015,
  0, 436.699951, 69.900017, 408.299957, 41.500015, 390.499969, 28.000015,
  0, 348.499969, -3.699986, 270.899963, -7.299984, 220.399963, 11.400015,
  0, 206.299957, 16.600014, 192.599960, 21.200016, 180.299957, 28.500015,
  0, 147.199951, 47.900017, 111.999954, 61.000015, 102.199959, 100.100014,
  0, 77.999954, 110.900017, 70.699959, 141.900009, 71.899963, 177.900024,
  0, 72.099960, 184.900024, 75.999962, 193.700027, 74.599960, 200.300018,
  0, 73.899963, 203.600021, 69.399963, 207.900024, 68.499962, 210.100021,
  0, 56.899963, 237.800018, 66.199959, 274.100037, 79.599960, 293.800018,
  0, 87.699959, 305.700012, 101.099960, 316.200012, 118.799957, 319.000031,
  0, 119.499954, 329.600037, 122.099960, 338.700043, 126.999954, 349.400024,
  0, 130.099960, 356.200012, 141.699951, 368.400024, 137.399948, 377.100037,
  0, 135.199951, 381.500031, 116.399948, 390.900024, 110.099945, 394.700043,
  0, 89.000000, 407.200012, 73.699997, 415.000000, 54.200001, 429.000000,
  0, 41.599998, 438.000000, 21.900002, 439.200012, 25.000000, 460.100006,
  0, 27.100000, 474.200012, 35.099998, 491.700012, 39.700001, 505.899994,
  0, 40.400002, 507.899994, 41.100002, 510.000000, 41.799999, 511.899994,
  0, 182.466675, 511.899994, 323.133301, 511.899994, 463.799988, 511.899994,
  0, 468.699982, 496.600006, 473.500000, 481.000000, 478.399994, 464.699982,
  0, 481.799988, 453.299988, 488.600006, 436.899994, 487.100006, 424.999969,
  0, 487.100006, 424.999969, 487.100006, 425.000000, 487.100006, 425.000000,
  2]);
export default Path;