// prettier-ignore
const Path: Readonly<Float32Array> = new Float32Array([
  1, 347.500000, 283.399994, 347.500000, 286.000000, 345.500000, 288.000000, 342.899994, 288.000000,
  0, 333.766663, 288.000000, 324.633331, 288.000000, 315.500000, 288.000000,
  0, 312.899994, 288.000000, 310.899994, 286.000000, 310.899994, 283.399994,
  0, 310.899994, 262.066650, 310.899994, 240.733322, 310.899994, 219.399994,
  0, 310.899994, 216.799988, 312.899994, 214.799988, 315.500000, 214.799988,
  0, 324.633331, 214.799988, 333.766663, 214.799988, 342.899994, 214.799988,
  0, 345.500000, 214.799988, 347.500000, 216.799988, 347.500000, 219.399994,
  0, 347.500000, 240.733322, 347.500000, 262.066650, 347.500000, 283.399994,
  0, 347.500000, 283.399994, 347.500000, 283.399994, 347.500000, 283.399994,
  1, 201.100006, 283.399994, 201.100006, 286.000000, 199.100006, 288.000000, 196.500000, 288.000000,
  0, 187.366669, 288.000000, 178.233337, 288.000000, 169.100006, 288.000000,
  0, 166.500000, 288.000000, 164.500000, 286.000000, 164.500000, 283.399994,
  0, 164.500000, 262.066650, 164.500000, 240.733322, 164.500000, 219.399994,
  0, 164.500000, 216.799988, 166.500000, 214.799988, 169.100006, 214.799988,
  0, 178.233337, 214.799988, 187.366669, 214.799988, 196.500000, 214.799988,
  0, 199.100006, 214.799988, 201.100006, 216.799988, 201.100006, 219.399994,
  0, 201.100006, 240.733322, 201.100006, 262.066650, 201.100006, 283.399994,
  0, 201.100006, 283.399994, 201.100006, 283.399994, 201.100006, 283.399994,
  1, 489.200012, 287.899994, 480.066681, 287.899994, 470.933350, 287.899994, 461.800018, 287.899994,
  0, 459.200012, 287.899994, 457.200012, 289.899994, 457.200012, 292.500000,
  0, 457.200012, 303.166656, 457.200012, 313.833344, 457.200012, 324.500000,
  0, 445.000000, 324.500000, 432.800018, 324.500000, 420.600006, 324.500000,
  0, 420.600006, 265.066650, 420.600006, 205.633331, 420.600006, 146.199997,
  0, 420.600006, 143.599991, 418.600006, 141.599991, 416.000000, 141.599991,
  0, 406.866669, 141.599991, 397.733337, 141.599991, 388.600006, 141.599991,
  0, 386.000000, 141.599991, 384.000000, 143.599991, 384.000000, 146.199997,
  0, 384.000000, 156.866669, 384.000000, 167.533325, 384.000000, 178.199997,
  0, 371.799988, 178.199997, 359.600006, 178.199997, 347.399994, 178.199997,
  0, 347.399994, 167.533325, 347.399994, 156.866669, 347.399994, 146.199997,
  0, 347.399994, 143.599991, 345.399994, 141.599991, 342.799988, 141.599991,
  0, 333.666656, 141.599991, 324.533325, 141.599991, 315.399994, 141.599991,
  0, 312.799988, 141.599991, 310.799988, 143.599991, 310.799988, 146.199997,
  0, 310.799988, 156.866669, 310.799988, 167.533325, 310.799988, 178.199997,
  0, 298.599976, 178.199997, 286.399994, 178.199997, 274.199982, 178.199997,
  0, 274.199982, 167.533325, 274.199982, 156.866669, 274.199982, 146.199997,
  0, 274.199982, 140.199997, 266.199982, 141.599991, 262.499969, 141.599991,
  0, 262.499969, 128.933319, 262.499969, 116.266655, 262.499969, 103.599991,
  0, 270.799957, 101.599991, 279.599976, 100.199989, 288.199982, 100.199989,
  0, 299.099976, 100.199989, 309.099976, 104.499992, 319.599976, 104.499992,
  0, 324.199982, 104.499992, 347.299988, 103.399994, 347.299988, 96.499992,
  0, 347.299988, 76.499992, 347.299988, 56.499992, 347.299988, 36.499992,
  0, 347.299988, 33.899994, 345.299988, 31.899992, 342.699982, 31.899992,
  0, 337.599976, 31.899992, 327.599976, 36.199993, 318.699982, 36.199993,
  0, 308.999969, 36.199993, 297.799988, 31.899994, 286.099976, 31.899994,
  0, 278.099976, 31.899994, 270.099976, 32.999992, 262.399963, 34.799995,
  0, 262.399963, 33.166664, 262.399963, 31.533329, 262.399963, 29.899996,
  0, 267.799957, 27.299995, 271.499969, 21.599995, 271.499969, 15.599996,
  0, 271.499969, -5.100005, 240.099976, -5.200004, 240.099976, 15.599996,
  0, 240.099976, 21.599995, 243.799973, 27.299995, 249.199982, 29.899996,
  0, 249.199982, 67.133331, 249.199982, 104.366653, 249.199982, 141.599991,
  0, 245.499985, 141.599991, 237.499985, 140.199997, 237.499985, 146.199997,
  0, 237.499985, 156.866669, 237.499985, 167.533325, 237.499985, 178.199997,
  0, 225.299988, 178.199997, 213.099991, 178.199997, 200.899994, 178.199997,
  0, 200.899994, 167.533325, 200.899994, 156.866669, 200.899994, 146.199997,
  0, 200.899994, 143.599991, 198.899994, 141.599991, 196.299988, 141.599991,
  0, 187.166656, 141.599991, 178.033325, 141.599991, 168.899994, 141.599991,
  0, 166.299988, 141.599991, 164.299988, 143.599991, 164.299988, 146.199997,
  0, 164.299988, 156.866669, 164.299988, 167.533325, 164.299988, 178.199997,
  0, 152.199997, 178.199997, 140.099991, 178.199997, 128.000000, 178.199997,
  0, 128.000000, 167.533325, 128.000000, 156.866669, 128.000000, 146.199997,
  0, 128.000000, 143.599991, 126.000000, 141.599991, 123.400002, 141.599991,
  0, 114.266670, 141.599991, 105.133331, 141.599991, 96.000000, 141.599991,
  0, 93.400002, 141.599991, 91.400002, 143.599991, 91.400002, 146.199997,
  0, 91.400002, 205.633331, 91.400002, 265.066650, 91.400002, 324.500000,
  0, 79.199997, 324.500000, 67.000000, 324.500000, 54.799999, 324.500000,
  0, 54.799999, 313.833344, 54.799999, 303.166656, 54.799999, 292.500000,
  0, 54.799999, 289.899994, 52.799999, 287.899994, 50.200001, 287.899994,
  0, 41.066666, 287.899994, 31.933334, 287.899994, 22.799999, 287.899994,
  0, 20.199999, 287.899994, 18.199999, 289.899994, 18.199999, 292.500000,
  0, 18.199999, 365.666656, 18.199999, 438.833344, 18.199999, 512.000000,
  0, 79.166664, 512.000000, 140.133331, 512.000000, 201.099991, 512.000000,
  0, 201.099991, 480.000000, 201.099991, 448.000000, 201.099991, 416.000000,
  0, 201.099991, 343.399994, 310.799988, 343.399994, 310.799988, 416.000000,
  0, 310.799988, 448.000000, 310.799988, 480.000000, 310.799988, 512.000000,
  0, 371.766663, 512.000000, 432.733307, 512.000000, 493.699982, 512.000000,
  0, 493.699982, 438.833344, 493.699982, 365.666656, 493.699982, 292.500000,
  0, 493.799988, 289.899994, 491.799988, 287.899994, 489.199982, 287.899994,
  0, 489.199982, 287.899994, 489.200012, 287.899994, 489.200012, 287.899994,
  2]);
export default Path;