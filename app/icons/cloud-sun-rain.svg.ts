// prettier-ignore
const Path: Readonly<Float32Array> = new Float32Array([
  1, 236.500000, 418.099976, 228.899994, 413.799988, 219.100006, 416.299988, 214.699997, 424.099976,
  0, 202.500000, 445.433319, 190.300003, 466.766632, 178.100006, 488.099976,
  0, 173.700012, 495.799988, 176.400009, 505.499969, 184.100006, 509.899963,
  0, 186.600006, 511.299957, 189.300003, 511.999969, 192.000000, 511.999969,
  0, 197.500000, 511.999969, 202.899994, 509.099976, 205.899994, 503.899963,
  0, 218.099991, 482.566620, 230.300003, 461.233307, 242.500000, 439.899963,
  0, 246.800003, 432.199951, 244.199997, 422.499969, 236.500000, 418.099976,
  0, 236.500000, 418.099976, 236.500000, 418.099976, 236.500000, 418.099976,
  0, 324.899994, 413.799988, 315.100006, 416.299988, 310.700012, 424.099976,
  0, 298.500000, 445.433319, 286.300018, 466.766632, 274.100006, 488.099976,
  0, 269.700012, 495.799988, 272.399994, 505.499969, 280.100006, 509.899963,
  0, 282.600006, 511.299957, 285.300018, 511.999969, 288.000000, 511.999969,
  0, 293.500000, 511.999969, 298.899994, 509.099976, 301.899994, 503.899963,
  0, 314.100006, 482.566620, 326.299988, 461.233307, 338.500000, 439.899963,
  0, 342.799988, 432.199951, 340.200012, 422.499969, 332.500000, 418.099976,
  0, 332.500000, 418.099976, 332.500000, 418.099976, 332.500000, 418.099976,
  0, 420.899994, 413.799988, 411.100006, 416.299988, 406.700012, 424.099976,
  0, 394.500000, 445.433319, 382.300018, 466.766632, 370.100006, 488.099976,
  0, 365.700012, 495.799988, 368.399994, 505.499969, 376.100006, 509.899963,
  0, 378.600006, 511.299957, 381.300018, 511.999969, 384.000000, 511.999969,
  0, 389.500000, 511.999969, 394.899994, 509.099976, 397.899994, 503.899963,
  0, 410.100006, 482.566620, 422.299988, 461.233307, 434.500000, 439.899963,
  0, 438.799988, 432.199951, 436.200012, 422.499969, 428.500000, 418.099976,
  0, 428.500000, 418.099976, 428.500000, 418.099976, 428.500000, 418.099976,
  0, 516.900024, 413.799988, 507.100006, 416.299988, 502.700012, 424.099976,
  0, 490.500000, 445.433319, 478.300018, 466.766632, 466.100006, 488.099976,
  0, 461.700012, 495.799988, 464.399994, 505.499969, 472.100006, 509.899963,
  0, 474.600006, 511.299957, 477.300018, 511.999969, 480.000000, 511.999969,
  0, 485.500000, 511.999969, 490.899994, 509.099976, 493.899994, 503.899963,
  0, 506.100006, 482.566620, 518.299988, 461.233307, 530.500000, 439.899963,
  0, 534.799988, 432.199951, 532.200012, 422.499969, 524.500000, 418.099976,
  0, 524.500000, 418.099976, 524.500000, 418.099976, 524.500000, 418.099976,
  1, 193.900009, 201.899994, 198.200012, 177.399994, 209.700012, 155.500000, 225.800003, 137.899994,
  0, 216.000000, 131.699997, 204.400009, 127.999992, 192.000000, 127.999992,
  0, 156.699997, 127.999992, 128.000000, 156.699997, 128.000000, 192.000000,
  0, 128.000000, 210.699997, 136.199997, 227.399994, 149.100006, 239.100006,
  0, 160.400009, 223.200012, 175.700012, 210.200012, 193.900009, 201.900009,
  0, 193.900009, 201.900009, 193.900009, 201.899994, 193.900009, 201.899994,
  1, 124.100006, 259.899994, 86.700005, 222.500000, 86.700005, 161.599991, 124.100006, 124.099991,
  0, 158.700012, 89.499992, 213.200012, 87.299988, 250.800003, 116.699989,
  0, 270.799988, 103.799988, 294.399994, 95.999985, 320.000000, 95.999985,
  0, 320.700012, 95.999985, 321.299988, 96.199982, 322.000000, 96.199982,
  0, 324.966675, 87.299980, 327.933319, 78.399986, 330.899994, 69.499985,
  0, 334.299988, 59.299984, 324.600006, 49.699986, 314.399994, 53.099983,
  0, 289.299988, 61.466648, 264.199982, 69.833313, 239.099991, 78.199982,
  0, 227.266663, 54.533318, 215.433319, 30.866648, 203.599991, 7.199982,
  0, 198.799988, -2.400019, 185.099991, -2.400019, 180.299988, 7.199982,
  0, 168.466660, 30.866648, 156.633316, 54.533318, 144.799988, 78.199982,
  0, 119.699989, 69.833313, 94.599983, 61.466648, 69.499985, 53.099983,
  0, 59.299984, 49.699982, 49.699986, 59.399982, 53.099983, 69.599983,
  0, 61.466648, 94.699989, 69.833313, 119.799988, 78.199982, 144.899994,
  0, 54.533318, 156.733322, 30.866648, 168.566666, 7.199982, 180.399994,
  0, -2.400019, 185.199997, -2.400019, 198.899994, 7.199982, 203.699997,
  0, 30.866648, 215.533325, 54.533318, 227.366669, 78.199982, 239.199997,
  0, 69.833313, 264.299988, 61.466648, 289.399994, 53.099983, 314.500000,
  0, 49.699982, 324.700012, 59.399982, 334.299988, 69.599983, 331.000000,
  0, 89.333321, 324.433319, 109.066650, 317.866669, 128.799988, 311.299988,
  0, 128.599991, 308.899994, 128.099991, 306.599976, 128.099991, 304.099976,
  0, 128.099991, 291.599976, 130.399994, 279.599976, 134.299988, 268.199982,
  0, 130.699982, 265.499969, 127.199989, 262.999969, 124.099991, 259.899994,
  0, 124.099998, 259.899994, 124.099998, 259.899994, 124.100006, 259.899994,
  1, 510.500000, 225.500000, 503.600006, 188.300003, 471.200012, 160.000000, 432.000000, 160.000000,
  0, 419.700012, 160.000000, 408.100006, 163.000000, 397.700012, 168.000000,
  0, 380.300018, 143.899994, 352.100006, 128.000000, 320.000000, 128.000000,
  0, 267.000000, 128.000000, 224.000000, 171.000000, 224.000000, 224.000000,
  0, 224.000000, 224.500000, 224.199997, 225.100006, 224.199997, 225.600006,
  0, 187.600006, 233.000000, 160.000000, 265.200012, 160.000000, 304.000000,
  0, 160.000000, 348.200012, 195.800003, 384.000000, 240.000000, 384.000000,
  0, 325.333344, 384.000000, 410.666656, 384.000000, 496.000000, 384.000000,
  0, 540.200012, 384.000000, 576.000000, 348.200012, 576.000000, 304.000000,
  0, 576.000000, 264.799988, 547.799988, 232.300003, 510.500000, 225.500000,
  0, 510.500000, 225.500000, 510.500000, 225.500000, 510.500000, 225.500000,
  2]);
export default Path;