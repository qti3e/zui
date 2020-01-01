// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 501, 431, 540, 460, 584, 416, 554, 378,
  0, 515, 348, 472, 392, 501, 431,
  0, 501, 431, 501, 431, 501, 431,
  1, 512, 489, 509, 494, 506, 499, 503, 504,
  0, 500, 509, 494, 511, 488, 509,
  0, 476, 505, 466, 498, 456, 491,
  0, 452, 487, 450, 480, 453, 475,
  0, 456, 470, 459, 465, 462, 461,
  0, 455, 453, 449, 443, 446, 433,
  0, 440, 433, 435, 433, 429, 433,
  0, 423, 433, 418, 429, 417, 423,
  0, 415, 411, 415, 398, 417, 386,
  0, 418, 380, 423, 375, 429, 375,
  0, 435, 375, 440, 375, 446, 375,
  0, 449, 365, 455, 356, 462, 348,
  0, 459, 343, 456, 338, 453, 334,
  0, 450, 328, 451, 322, 456, 318,
  0, 466, 310, 477, 304, 488, 299,
  0, 494, 297, 500, 299, 503, 305,
  0, 506, 309, 509, 314, 512, 319,
  0, 522, 317, 533, 317, 543, 319,
  0, 546, 314, 549, 309, 552, 305,
  0, 555, 299, 561, 297, 567, 299,
  0, 578, 304, 589, 310, 599, 318,
  0, 603, 322, 604, 328, 601, 334,
  0, 599, 338, 596, 343, 593, 348,
  0, 600, 356, 606, 365, 609, 375,
  0, 615, 375, 620, 375, 626, 375,
  0, 632, 375, 637, 380, 638, 386,
  0, 640, 398, 640, 410, 638, 423,
  0, 637, 429, 632, 433, 626, 433,
  0, 620, 433, 615, 433, 609, 433,
  0, 606, 443, 600, 453, 593, 461,
  0, 596, 465, 599, 470, 601, 475,
  0, 604, 480, 603, 487, 599, 491,
  0, 589, 498, 578, 505, 567, 509,
  0, 561, 511, 555, 509, 552, 504,
  0, 549, 499, 546, 494, 543, 489,
  0, 533, 491, 522, 491, 512, 489,
  0, 512, 489, 512, 489, 512, 489,
  1, 268, 307, 327, 230, 239, 142, 162, 201,
  0, 103, 278, 191, 366, 268, 307,
  0, 268, 307, 268, 307, 268, 307,
  1, 386, 286, 397, 291, 408, 297, 420, 302,
  0, 430, 308, 434, 321, 430, 332,
  0, 421, 356, 404, 378, 387, 397,
  0, 380, 406, 367, 408, 357, 403,
  0, 347, 397, 338, 391, 328, 386,
  0, 312, 400, 293, 410, 273, 418,
  0, 273, 429, 273, 440, 273, 451,
  0, 273, 463, 265, 473, 253, 475,
  0, 229, 479, 203, 479, 178, 475,
  0, 166, 473, 158, 463, 158, 451,
  0, 158, 440, 158, 429, 158, 418,
  0, 137, 410, 119, 400, 103, 386,
  0, 93, 391, 83, 397, 74, 403,
  0, 64, 408, 51, 406, 43, 397,
  0, 27, 378, 10, 356, 1, 332,
  0, -2, 321, 1, 308, 12, 302,
  0, 23, 297, 34, 291, 45, 286,
  0, 41, 265, 41, 243, 45, 222,
  0, 34, 217, 23, 211, 12, 205,
  0, 1, 200, -2, 187, 1, 176,
  0, 10, 152, 27, 130, 43, 111,
  0, 51, 102, 63, 99, 74, 105,
  0, 83, 111, 93, 116, 103, 122,
  0, 119, 108, 137, 97, 158, 90,
  0, 158, 79, 158, 68, 158, 57,
  0, 158, 45, 166, 35, 177, 33,
  0, 202, 29, 228, 29, 253, 33,
  0, 265, 35, 273, 45, 273, 57,
  0, 273, 68, 273, 79, 273, 90,
  0, 293, 97, 312, 108, 328, 122,
  0, 338, 116, 347, 111, 357, 105,
  0, 367, 99, 380, 101, 387, 110,
  0, 404, 130, 421, 152, 430, 176,
  0, 434, 187, 430, 199, 420, 205,
  0, 408, 211, 397, 217, 386, 222,
  0, 390, 243, 390, 265, 386, 286,
  0, 386, 286, 386, 286, 386, 286,
  1, 501, 132, 540, 161, 584, 117, 554, 79,
  0, 515, 49, 471, 93, 501, 132,
  0, 501, 132, 501, 132, 501, 132,
  1, 512, 191, 509, 195, 506, 200, 503, 205,
  0, 500, 210, 494, 212, 488, 210,
  0, 476, 206, 466, 200, 456, 192,
  0, 452, 188, 450, 181, 453, 176,
  0, 456, 171, 459, 166, 462, 162,
  0, 455, 154, 449, 144, 446, 134,
  0, 440, 134, 435, 134, 429, 134,
  0, 423, 134, 418, 130, 417, 124,
  0, 415, 112, 415, 99, 417, 87,
  0, 418, 81, 423, 76, 429, 76,
  0, 435, 76, 440, 76, 446, 76,
  0, 449, 66, 455, 57, 462, 49,
  0, 459, 44, 456, 39, 453, 35,
  0, 450, 29, 451, 23, 456, 19,
  0, 466, 11, 477, 5, 488, 0,
  0, 494, -1, 500, 0, 503, 6,
  0, 506, 11, 509, 15, 512, 20,
  0, 522, 18, 533, 18, 543, 20,
  0, 546, 15, 549, 11, 552, 6,
  0, 555, 1, 561, -1, 567, 0,
  0, 578, 5, 589, 11, 599, 19,
  0, 603, 23, 604, 30, 601, 35,
  0, 599, 39, 596, 44, 593, 49,
  0, 600, 57, 606, 66, 609, 76,
  0, 615, 76, 620, 76, 626, 76,
  0, 632, 76, 637, 81, 638, 87,
  0, 640, 99, 640, 111, 638, 124,
  0, 637, 130, 632, 134, 626, 134,
  0, 620, 134, 615, 134, 609, 134,
  0, 606, 144, 600, 154, 593, 162,
  0, 596, 166, 599, 171, 601, 176,
  0, 604, 181, 603, 188, 599, 192,
  0, 589, 199, 578, 206, 567, 210,
  0, 561, 212, 555, 210, 552, 205,
  0, 549, 200, 546, 195, 543, 191,
  0, 533, 192, 522, 192, 512, 191,
  0, 512, 191, 512, 191, 512, 191,
  2]);
export default Path;