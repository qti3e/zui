// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 278, 256, 293, 271, 308, 286, 323, 301,
  0, 338, 286, 354, 271, 369, 256,
  0, 354, 240, 338, 225, 323, 210,
  0, 308, 225, 293, 240, 278, 256,
  0, 278, 256, 278, 256, 278, 256,
  1, 442, 295, 438, 299, 435, 303, 431, 306,
  0, 428, 310, 423, 310, 420, 306,
  0, 410, 297, 401, 288, 391, 278,
  0, 376, 293, 361, 308, 346, 323,
  0, 357, 335, 369, 346, 380, 357,
  0, 386, 352, 391, 346, 397, 340,
  0, 400, 337, 405, 337, 408, 340,
  0, 412, 344, 416, 348, 420, 352,
  0, 423, 355, 423, 360, 420, 363,
  0, 414, 369, 408, 374, 403, 380,
  0, 408, 386, 414, 391, 420, 397,
  0, 423, 400, 423, 405, 420, 408,
  0, 416, 412, 412, 416, 408, 420,
  0, 405, 423, 400, 423, 397, 420,
  0, 391, 414, 386, 408, 380, 403,
  0, 374, 408, 369, 414, 363, 420,
  0, 360, 423, 355, 423, 352, 420,
  0, 348, 416, 344, 412, 340, 408,
  0, 337, 405, 337, 400, 340, 397,
  0, 346, 391, 352, 386, 357, 380,
  0, 346, 369, 335, 357, 323, 346,
  0, 308, 361, 293, 376, 278, 391,
  0, 288, 401, 297, 410, 306, 420,
  0, 310, 423, 310, 428, 306, 431,
  0, 303, 435, 299, 438, 295, 442,
  0, 292, 445, 287, 445, 284, 442,
  0, 274, 433, 265, 423, 256, 414,
  0, 246, 423, 237, 433, 227, 442,
  0, 224, 445, 219, 445, 216, 442,
  0, 212, 438, 208, 435, 205, 431,
  0, 201, 428, 201, 423, 205, 420,
  0, 214, 410, 223, 401, 233, 391,
  0, 218, 376, 203, 361, 188, 346,
  0, 176, 357, 165, 369, 154, 380,
  0, 159, 386, 165, 391, 171, 397,
  0, 174, 400, 174, 405, 171, 408,
  0, 167, 412, 163, 416, 159, 420,
  0, 156, 423, 151, 423, 148, 420,
  0, 142, 414, 137, 408, 131, 403,
  0, 125, 408, 120, 414, 114, 420,
  0, 111, 423, 106, 423, 103, 420,
  0, 99, 416, 95, 412, 91, 408,
  0, 88, 405, 88, 400, 91, 397,
  0, 97, 391, 103, 386, 108, 380,
  0, 103, 374, 97, 369, 91, 363,
  0, 88, 360, 88, 355, 91, 352,
  0, 95, 348, 99, 344, 103, 340,
  0, 106, 337, 111, 337, 114, 340,
  0, 120, 346, 125, 352, 131, 357,
  0, 142, 346, 154, 335, 165, 323,
  0, 150, 308, 135, 293, 120, 278,
  0, 110, 288, 101, 297, 91, 306,
  0, 88, 310, 83, 310, 80, 306,
  0, 76, 303, 73, 299, 69, 295,
  0, 66, 292, 66, 287, 69, 284,
  0, 78, 274, 88, 265, 97, 256,
  0, 88, 246, 78, 237, 69, 227,
  0, 66, 224, 66, 219, 69, 216,
  0, 73, 212, 76, 208, 80, 205,
  0, 83, 201, 88, 201, 91, 205,
  0, 101, 214, 110, 223, 120, 233,
  0, 135, 218, 150, 203, 165, 188,
  0, 154, 176, 142, 165, 131, 154,
  0, 125, 159, 120, 165, 114, 171,
  0, 111, 174, 106, 174, 103, 171,
  0, 99, 167, 95, 163, 91, 159,
  0, 88, 156, 88, 151, 91, 148,
  0, 97, 142, 103, 137, 108, 131,
  0, 103, 125, 97, 120, 91, 114,
  0, 88, 111, 88, 106, 91, 103,
  0, 95, 99, 99, 95, 103, 91,
  0, 106, 88, 111, 88, 114, 91,
  0, 120, 97, 125, 103, 131, 108,
  0, 137, 103, 142, 97, 148, 91,
  0, 151, 88, 156, 88, 159, 91,
  0, 163, 95, 167, 99, 171, 103,
  0, 174, 106, 174, 111, 171, 114,
  0, 165, 120, 159, 125, 154, 131,
  0, 165, 142, 176, 154, 188, 165,
  0, 203, 150, 218, 135, 233, 120,
  0, 223, 110, 214, 101, 205, 91,
  0, 201, 88, 201, 83, 205, 80,
  0, 208, 76, 212, 73, 216, 69,
  0, 219, 66, 224, 66, 227, 69,
  0, 237, 78, 246, 88, 256, 97,
  0, 265, 88, 274, 78, 284, 69,
  0, 287, 66, 292, 66, 295, 69,
  0, 299, 73, 303, 76, 306, 80,
  0, 310, 83, 310, 88, 306, 91,
  0, 297, 101, 288, 110, 278, 120,
  0, 293, 135, 308, 150, 323, 165,
  0, 335, 154, 346, 142, 357, 131,
  0, 352, 125, 346, 120, 340, 114,
  0, 337, 111, 337, 106, 340, 103,
  0, 344, 99, 348, 95, 352, 91,
  0, 355, 88, 360, 88, 363, 91,
  0, 369, 97, 374, 103, 380, 108,
  0, 386, 103, 391, 97, 397, 91,
  0, 400, 88, 405, 88, 408, 91,
  0, 412, 95, 416, 99, 420, 103,
  0, 423, 106, 423, 111, 420, 114,
  0, 414, 120, 408, 125, 403, 131,
  0, 408, 137, 414, 142, 420, 148,
  0, 423, 151, 423, 156, 420, 159,
  0, 416, 163, 412, 167, 408, 171,
  0, 405, 174, 400, 174, 397, 171,
  0, 391, 165, 386, 159, 380, 154,
  0, 369, 165, 357, 176, 346, 188,
  0, 361, 203, 376, 218, 391, 233,
  0, 401, 223, 410, 214, 420, 205,
  0, 423, 201, 428, 201, 431, 205,
  0, 435, 208, 438, 212, 442, 216,
  0, 445, 219, 445, 224, 442, 227,
  0, 433, 237, 423, 246, 414, 256,
  0, 423, 265, 433, 274, 442, 284,
  0, 445, 287, 445, 292, 442, 295,
  0, 442, 295, 442, 295, 442, 295,
  1, 256, 0, 114, 0, 0, 114, 0, 256,
  0, 0, 397, 114, 512, 256, 512,
  0, 397, 512, 512, 397, 512, 256,
  0, 512, 114, 397, 0, 256, 0,
  0, 256, 0, 256, 0, 256, 0,
  1, 210, 323, 225, 338, 240, 354, 256, 369,
  0, 271, 354, 286, 338, 301, 323,
  0, 286, 308, 271, 293, 256, 278,
  0, 240, 293, 225, 308, 210, 323,
  0, 210, 323, 210, 323, 210, 323,
  1, 301, 188, 286, 173, 271, 157, 256, 142,
  0, 240, 157, 225, 173, 210, 188,
  0, 225, 203, 240, 218, 256, 233,
  0, 271, 218, 286, 203, 301, 188,
  0, 301, 188, 301, 188, 301, 188,
  1, 188, 210, 173, 225, 157, 240, 142, 256,
  0, 157, 271, 173, 286, 188, 301,
  0, 203, 286, 218, 271, 233, 256,
  0, 218, 240, 203, 225, 188, 210,
  0, 188, 210, 188, 210, 188, 210,
  2]);
export default Path;