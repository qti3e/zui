// prettier-ignore
const Path: Readonly<Float32Array> = new Float32Array([
  1, 46.299999, 358.100006, 31.633331, 394.766663, 16.966667, 431.433350, 2.299999, 468.100006,
  0, -4.300001, 484.500000, 3.699999, 503.100006, 20.099998, 509.700012,
  0, 36.899998, 516.299988, 55.199997, 508.000000, 61.699997, 491.900024,
  0, 70.933327, 468.833344, 80.166664, 445.766693, 89.399994, 422.700012,
  0, 88.733330, 416.633331, 88.066658, 410.566681, 87.399994, 404.500000,
  0, 73.699997, 389.033325, 59.999996, 373.566681, 46.299995, 358.100006,
  0, 46.299995, 358.100006, 46.299999, 358.100006, 46.299999, 358.100006,
  1, 603.500000, 258.299988, 597.333313, 231.566666, 591.166687, 204.833328, 585.000000, 178.100006,
  0, 580.400024, 158.100006, 566.400024, 141.300003, 547.500000, 133.200012,
  0, 529.000000, 125.200012, 508.500000, 126.500015, 491.399994, 136.500015,
  0, 468.699982, 149.900009, 451.699982, 171.000015, 443.299988, 195.900024,
  0, 439.533325, 207.200012, 435.766663, 218.500015, 432.000000, 229.800003,
  0, 426.666656, 233.199997, 421.333344, 236.600006, 416.000000, 240.000000,
  0, 416.000000, 208.000000, 416.000000, 176.000000, 416.000000, 144.000000,
  0, 416.000000, 135.199997, 408.799988, 128.000000, 400.000000, 128.000000,
  0, 346.666656, 128.000000, 293.333344, 128.000000, 240.000000, 128.000000,
  0, 231.199997, 128.000000, 224.000000, 135.199997, 224.000000, 144.000000,
  0, 224.000000, 176.000000, 224.000000, 208.000000, 224.000000, 240.000000,
  0, 218.633331, 236.600006, 213.266663, 233.199997, 207.899994, 229.800003,
  0, 204.133331, 218.500000, 200.366653, 207.199997, 196.599991, 195.899994,
  0, 188.299988, 170.899994, 171.199997, 149.899994, 148.500000, 136.500000,
  0, 131.300003, 126.500000, 110.900002, 125.199997, 92.400002, 133.199997,
  0, 73.500000, 141.300003, 59.500000, 158.099991, 54.900002, 178.100006,
  0, 48.766666, 204.833328, 42.633335, 231.566666, 36.500000, 258.299988,
  0, 31.900000, 278.299988, 37.200001, 299.500000, 50.900002, 315.000000,
  0, 73.300003, 340.299988, 95.699997, 365.600006, 118.099998, 390.899994,
  0, 121.466667, 421.766663, 124.833328, 452.633331, 128.199997, 483.500000,
  0, 130.000000, 499.799988, 143.800003, 512.000000, 160.000000, 512.000000,
  0, 161.199997, 512.000000, 162.300003, 511.899994, 163.500000, 511.799988,
  0, 181.100006, 509.899994, 193.699997, 494.099976, 191.800003, 476.500000,
  0, 188.433334, 445.566681, 185.066666, 414.633331, 181.699997, 383.700012,
  0, 180.199997, 370.700012, 174.800003, 358.600006, 166.099991, 348.700012,
  0, 151.666656, 332.366669, 137.233322, 316.033356, 122.799988, 299.700012,
  0, 128.666656, 276.266663, 134.533325, 252.833344, 140.399994, 229.400009,
  0, 142.666656, 236.200012, 144.933334, 243.000000, 147.199997, 249.800003,
  0, 151.300003, 262.299988, 159.099991, 273.200012, 171.699997, 282.399994,
  0, 188.733322, 293.233337, 205.766663, 304.066650, 222.799988, 314.899994,
  0, 227.399994, 317.799988, 234.899994, 319.500000, 239.999985, 319.899994,
  0, 293.333313, 319.899994, 346.666656, 319.899994, 400.000000, 319.899994,
  0, 405.100006, 319.500000, 412.600006, 317.799988, 417.200012, 314.899994,
  0, 434.233337, 304.066650, 451.266693, 293.233337, 468.300018, 282.399994,
  0, 480.900024, 273.199982, 488.700012, 262.399994, 492.800018, 249.799988,
  0, 495.066681, 242.999985, 497.333344, 236.199997, 499.600006, 229.399994,
  0, 505.466675, 252.833328, 511.333344, 276.266663, 517.200012, 299.700012,
  0, 502.766693, 316.033356, 488.333344, 332.366669, 473.900024, 348.700012,
  0, 465.200012, 358.600006, 459.800018, 370.700012, 458.300018, 383.700012,
  0, 454.933350, 414.633331, 451.566681, 445.566681, 448.200012, 476.500000,
  0, 446.300018, 494.100006, 459.000000, 509.899994, 476.500000, 511.799988,
  0, 477.700012, 511.899994, 478.799988, 512.000000, 480.000000, 512.000000,
  0, 496.100006, 512.000000, 510.000000, 499.899994, 511.799988, 483.500000,
  0, 515.166626, 452.633331, 518.533325, 421.766663, 521.899963, 390.899994,
  0, 544.299988, 365.600006, 566.699951, 340.299988, 589.099976, 315.000000,
  0, 602.699951, 299.500000, 608.099976, 278.299988, 603.500000, 258.299988,
  0, 603.500000, 258.299988, 603.500000, 258.299988, 603.500000, 258.299988,
  1, 637.700012, 468.100006, 623.033325, 431.433350, 608.366699, 394.766663, 593.700012, 358.100006,
  0, 580.000000, 373.566681, 566.300049, 389.033325, 552.600037, 404.500000,
  0, 551.933350, 410.566681, 551.266724, 416.633331, 550.600037, 422.700012,
  0, 559.833374, 445.766693, 569.066711, 468.833344, 578.300049, 491.900024,
  0, 583.300049, 504.400024, 595.300049, 512.000000, 608.000061, 512.000000,
  0, 612.000061, 512.000000, 616.000061, 511.299988, 619.900085, 509.700012,
  0, 636.300110, 503.100006, 644.300110, 484.500000, 637.700073, 468.100006,
  0, 637.700073, 468.100006, 637.700012, 468.100006, 637.700012, 468.100006,
  1, 512.000000, 96.000000, 538.500000, 96.000000, 560.000000, 74.500000, 560.000000, 48.000000,
  0, 560.000000, 21.500000, 538.500000, 0.000000, 512.000000, 0.000000,
  0, 485.500000, 0.000000, 464.000000, 21.500000, 464.000000, 48.000000,
  0, 464.000000, 74.500000, 485.500000, 96.000000, 512.000000, 96.000000,
  0, 512.000000, 96.000000, 512.000000, 96.000000, 512.000000, 96.000000,
  0, 154.500000, 96.000000, 176.000000, 74.500000, 176.000000, 48.000000,
  0, 176.000000, 21.500000, 154.500000, 0.000000, 128.000000, 0.000000,
  0, 101.500000, 0.000000, 80.000000, 21.500000, 80.000000, 48.000000,
  0, 80.000000, 74.500000, 101.500000, 96.000000, 128.000000, 96.000000,
  0, 128.000000, 96.000000, 128.000000, 96.000000, 128.000000, 96.000000,
  2]);
export default Path;