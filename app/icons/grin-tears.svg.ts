// prettier-ignore
const Path: Readonly<Float32Array> = new Float32Array([
  1, 320.000000, 432.000000, 259.399994, 432.000000, 185.500000, 393.700012, 176.199997, 338.700012,
  0, 174.199997, 327.000000, 185.399994, 317.100006, 196.899994, 320.800018,
  0, 227.100006, 330.500000, 272.000000, 336.000000, 320.000000, 336.000000,
  0, 368.000000, 336.000000, 412.899994, 330.500000, 443.100006, 320.799988,
  0, 454.500000, 317.099976, 465.700012, 326.899994, 463.800018, 338.699982,
  0, 454.500031, 393.699982, 380.600037, 432.000000, 320.000000, 432.000000,
  0, 320.000000, 432.000000, 320.000000, 432.000000, 320.000000, 432.000000,
  1, 240.000000, 152.000000, 263.799988, 152.000000, 292.700012, 181.300003, 296.000000, 223.399994,
  0, 296.700012, 232.000000, 285.200012, 235.399994, 281.100006, 227.899994,
  0, 277.933350, 222.233322, 274.766663, 216.566666, 271.600006, 210.899994,
  0, 263.899994, 197.199997, 252.400009, 189.299988, 240.100006, 189.299988,
  0, 227.800003, 189.299988, 216.300003, 197.199982, 208.600006, 210.899994,
  0, 205.433334, 216.566666, 202.266678, 222.233322, 199.100006, 227.899994,
  0, 194.900009, 235.299988, 183.500000, 231.899994, 184.200012, 223.399994,
  0, 187.300018, 181.299988, 216.200012, 152.000000, 240.000015, 152.000000,
  0, 240.000015, 152.000000, 240.000000, 152.000000, 240.000000, 152.000000,
  1, 400.000000, 152.000000, 423.799988, 152.000000, 452.700012, 181.300003, 456.000000, 223.399994,
  0, 456.700012, 232.000000, 445.200012, 235.399994, 441.100006, 227.899994,
  0, 437.933350, 222.233322, 434.766663, 216.566666, 431.600006, 210.899994,
  0, 423.899994, 197.199997, 412.399994, 189.299988, 400.100006, 189.299988,
  0, 387.800018, 189.299988, 376.300018, 197.199982, 368.600006, 210.899994,
  0, 365.433350, 216.566666, 362.266663, 222.233322, 359.100006, 227.899994,
  0, 354.899994, 235.299988, 343.500000, 231.899994, 344.200012, 223.399994,
  0, 347.300018, 181.299988, 376.200012, 152.000000, 400.000000, 152.000000,
  0, 400.000000, 152.000000, 400.000000, 152.000000, 400.000000, 152.000000,
  1, 496.400055, 270.100006, 492.600067, 243.500000, 515.500061, 220.600006, 542.100037, 224.400009,
  0, 551.000061, 225.700012, 558.900024, 227.100006, 566.400024, 228.500015,
  0, 552.700012, 104.500000, 447.700012, 8.000000, 320.000000, 8.000000,
  0, 192.299988, 8.000000, 87.300003, 104.500000, 73.599998, 228.500000,
  0, 81.099998, 227.100006, 89.000000, 225.699997, 97.899994, 224.399994,
  0, 131.099991, 220.500000, 146.500000, 249.699997, 143.599991, 270.100006,
  0, 131.799988, 352.400024, 113.699989, 370.500000, 107.799988, 376.500000,
  0, 106.899986, 377.399994, 105.799988, 378.100006, 104.799988, 379.000000,
  0, 147.499985, 453.600006, 227.799988, 504.000000, 320.000000, 504.000000,
  0, 412.200012, 504.000000, 492.500000, 453.600006, 535.200012, 378.899994,
  0, 534.200012, 378.000000, 533.100037, 377.399994, 532.200012, 376.399994,
  0, 526.299988, 370.500000, 508.200012, 352.399994, 496.400024, 270.099976,
  0, 496.400024, 270.099976, 496.400055, 270.100006, 496.400055, 270.100006,
  1, 625.800049, 282.899994, 611.000061, 268.100006, 560.100037, 259.399994, 537.500061, 256.100006,
  0, 532.000061, 255.300003, 527.200073, 260.000000, 528.000061, 265.600006,
  0, 531.200073, 288.200012, 540.000061, 339.100006, 554.800049, 353.900024,
  0, 574.000061, 373.100037, 605.400024, 372.800018, 625.000061, 353.200012,
  0, 644.600098, 333.600006, 645.000061, 302.000000, 625.800049, 282.900024,
  0, 625.800049, 282.900024, 625.800049, 282.899994, 625.800049, 282.899994,
  1, 102.400002, 256.100006, 79.800003, 259.300018, 28.900002, 268.100006, 14.099998, 282.899994,
  0, -5.000002, 302.000000, -4.700001, 333.500000, 14.899999, 353.099976,
  0, 34.500000, 372.699951, 65.900002, 372.999969, 85.099998, 353.799988,
  0, 99.900002, 339.000000, 108.599998, 288.099976, 111.899994, 265.500000,
  0, 112.699997, 260.000000, 107.999992, 255.300003, 102.399994, 256.100006,
  0, 102.399994, 256.100006, 102.400002, 256.100006, 102.400002, 256.100006,
  2]);
export default Path;