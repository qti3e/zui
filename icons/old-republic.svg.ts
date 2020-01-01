// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 428, 161, 429, 163, 430, 165, 431, 167,
  0, 433, 171, 435, 176, 437, 180,
  0, 445, 199, 449, 219, 450, 239,
  0, 450, 241, 450, 243, 450, 244,
  0, 450, 254, 449, 264, 447, 273,
  0, 446, 277, 446, 280, 444, 284,
  0, 440, 298, 434, 313, 426, 325,
  0, 418, 338, 407, 349, 394, 357,
  0, 388, 360, 382, 363, 376, 366,
  0, 370, 368, 364, 370, 358, 371,
  0, 352, 372, 345, 373, 339, 372,
  0, 331, 372, 323, 370, 316, 367,
  0, 314, 367, 312, 366, 310, 365,
  0, 310, 364, 310, 362, 310, 361,
  0, 312, 355, 313, 349, 316, 344,
  0, 319, 340, 322, 335, 326, 332,
  0, 328, 330, 331, 329, 334, 327,
  0, 337, 326, 341, 325, 345, 325,
  0, 352, 323, 359, 321, 366, 318,
  0, 377, 313, 386, 306, 394, 298,
  0, 395, 296, 397, 295, 399, 293,
  0, 402, 289, 405, 286, 408, 282,
  0, 416, 272, 421, 260, 425, 248,
  0, 427, 243, 428, 238, 429, 232,
  0, 430, 229, 430, 226, 431, 223,
  0, 432, 217, 432, 211, 433, 205,
  0, 433, 198, 433, 192, 432, 185,
  0, 431, 177, 430, 169, 428, 161,
  0, 428, 161, 428, 161, 428, 161,
  1, 65, 168, 66, 166, 67, 163, 68, 161,
  0, 66, 169, 65, 177, 64, 184,
  0, 64, 192, 63, 200, 64, 208,
  0, 65, 228, 69, 247, 78, 265,
  0, 81, 271, 84, 277, 88, 283,
  0, 95, 290, 101, 297, 108, 304,
  0, 113, 308, 118, 311, 124, 314,
  0, 127, 316, 130, 318, 134, 319,
  0, 139, 321, 144, 323, 149, 324,
  0, 153, 325, 157, 326, 161, 327,
  0, 166, 328, 170, 331, 174, 335,
  0, 179, 340, 182, 347, 184, 354,
  0, 185, 357, 186, 360, 186, 363,
  0, 186, 364, 186, 364, 186, 365,
  0, 180, 368, 173, 370, 166, 371,
  0, 162, 372, 158, 372, 154, 372,
  0, 143, 373, 133, 371, 123, 367,
  0, 120, 366, 116, 364, 112, 363,
  0, 104, 359, 97, 354, 90, 348,
  0, 87, 346, 84, 343, 82, 340,
  0, 72, 330, 65, 319, 60, 306,
  0, 57, 301, 55, 295, 53, 289,
  0, 52, 285, 51, 282, 50, 278,
  0, 49, 275, 49, 272, 48, 269,
  0, 48, 266, 48, 264, 47, 262,
  0, 46, 257, 46, 251, 46, 246,
  0, 46, 240, 46, 233, 47, 227,
  0, 47, 224, 48, 221, 48, 219,
  0, 49, 213, 50, 207, 52, 202,
  0, 55, 190, 59, 179, 65, 168,
  0, 65, 168, 65, 168, 65, 168,
  1, 251, 123, 251, 123, 251, 123, 252, 123,
  0, 253, 127, 253, 131, 254, 135,
  0, 255, 136, 255, 138, 255, 139,
  0, 258, 139, 260, 139, 263, 139,
  0, 268, 139, 273, 139, 278, 139,
  0, 279, 139, 280, 139, 281, 139,
  0, 281, 140, 281, 140, 281, 140,
  0, 279, 141, 277, 141, 275, 142,
  0, 271, 143, 268, 145, 264, 146,
  0, 263, 146, 263, 146, 262, 146,
  0, 262, 147, 262, 147, 262, 148,
  0, 263, 148, 264, 149, 265, 149,
  0, 270, 151, 274, 152, 279, 154,
  0, 280, 154, 280, 154, 281, 154,
  0, 281, 154, 281, 155, 281, 155,
  0, 279, 156, 277, 155, 276, 155,
  0, 271, 155, 265, 155, 260, 155,
  0, 259, 155, 257, 155, 255, 156,
  0, 255, 157, 255, 159, 254, 161,
  0, 253, 164, 253, 168, 252, 172,
  0, 251, 172, 251, 172, 251, 172,
  0, 250, 170, 250, 168, 250, 166,
  0, 250, 154, 250, 141, 250, 128,
  0, 250, 126, 250, 125, 251, 123,
  0, 251, 123, 251, 123, 251, 123,
  1, 245, 123, 245, 123, 245, 123, 246, 123,
  0, 246, 125, 246, 126, 246, 128,
  0, 246, 141, 246, 154, 246, 166,
  0, 246, 168, 246, 170, 246, 172,
  0, 245, 172, 245, 172, 245, 172,
  0, 244, 168, 243, 164, 242, 160,
  0, 242, 159, 241, 157, 241, 156,
  0, 239, 155, 237, 155, 236, 155,
  0, 231, 155, 226, 155, 221, 155,
  0, 219, 155, 217, 156, 216, 155,
  0, 216, 155, 215, 154, 216, 154,
  0, 217, 154, 218, 153, 220, 153,
  0, 223, 152, 227, 151, 230, 150,
  0, 231, 149, 233, 149, 234, 148,
  0, 234, 147, 234, 147, 234, 146,
  0, 233, 146, 232, 145, 230, 145,
  0, 227, 144, 224, 143, 221, 142,
  0, 219, 141, 217, 141, 216, 140,
  0, 216, 140, 215, 140, 215, 139,
  0, 221, 139, 226, 139, 231, 139,
  0, 234, 139, 237, 139, 241, 139,
  0, 241, 139, 241, 138, 241, 138,
  0, 242, 133, 244, 128, 245, 123,
  0, 245, 123, 245, 123, 245, 123,
  1, 213, 121, 214, 120, 215, 119, 216, 118,
  0, 216, 119, 215, 120, 215, 121,
  0, 211, 125, 209, 129, 207, 134,
  0, 207, 137, 206, 140, 206, 144,
  0, 206, 146, 206, 149, 206, 151,
  0, 207, 159, 210, 166, 215, 172,
  0, 217, 175, 219, 178, 222, 180,
  0, 223, 181, 225, 182, 227, 183,
  0, 230, 184, 233, 186, 236, 188,
  0, 239, 190, 241, 194, 241, 197,
  0, 241, 271, 241, 344, 241, 418,
  0, 241, 419, 240, 421, 241, 422,
  0, 241, 424, 241, 425, 242, 426,
  0, 243, 428, 244, 430, 245, 431,
  0, 246, 432, 247, 432, 248, 432,
  0, 250, 432, 251, 431, 252, 430,
  0, 253, 428, 254, 426, 254, 425,
  0, 255, 423, 255, 420, 255, 418,
  0, 255, 414, 255, 410, 255, 406,
  0, 255, 400, 255, 394, 255, 388,
  0, 255, 385, 255, 381, 255, 377,
  0, 255, 373, 255, 369, 255, 365,
  0, 255, 359, 255, 353, 255, 347,
  0, 255, 344, 255, 340, 255, 337,
  0, 255, 333, 255, 329, 255, 325,
  0, 255, 319, 255, 313, 255, 307,
  0, 256, 303, 255, 299, 256, 295,
  0, 256, 296, 256, 298, 256, 299,
  0, 256, 303, 256, 307, 257, 310,
  0, 257, 314, 257, 317, 258, 321,
  0, 258, 324, 258, 327, 258, 330,
  0, 259, 334, 259, 338, 260, 342,
  0, 261, 351, 263, 360, 265, 369,
  0, 266, 374, 267, 379, 269, 383,
  0, 272, 391, 275, 399, 279, 406,
  0, 281, 409, 283, 411, 286, 413,
  0, 286, 413, 286, 414, 286, 414,
  0, 287, 414, 288, 414, 288, 413,
  0, 289, 412, 289, 411, 290, 410,
  0, 294, 403, 298, 395, 302, 387,
  0, 303, 386, 304, 385, 305, 384,
  0, 306, 382, 309, 381, 311, 380,
  0, 314, 379, 317, 378, 320, 377,
  0, 326, 377, 333, 378, 339, 379,
  0, 343, 380, 347, 381, 350, 381,
  0, 354, 381, 358, 381, 362, 380,
  0, 370, 380, 379, 378, 387, 374,
  0, 392, 372, 397, 369, 402, 366,
  0, 413, 359, 423, 350, 432, 339,
  0, 433, 338, 434, 336, 435, 335,
  0, 434, 338, 433, 341, 431, 344,
  0, 430, 347, 428, 350, 427, 353,
  0, 422, 363, 416, 372, 409, 380,
  0, 405, 386, 401, 390, 396, 395,
  0, 389, 401, 382, 406, 373, 410,
  0, 365, 413, 356, 414, 347, 413,
  0, 344, 412, 340, 411, 337, 410,
  0, 334, 409, 332, 408, 329, 406,
  0, 325, 405, 322, 403, 319, 400,
  0, 322, 403, 325, 406, 328, 409,
  0, 332, 413, 337, 416, 342, 419,
  0, 345, 422, 350, 424, 354, 425,
  0, 356, 425, 357, 425, 359, 425,
  0, 358, 426, 356, 427, 355, 428,
  0, 345, 435, 335, 440, 324, 445,
  0, 303, 453, 281, 459, 258, 460,
  0, 254, 460, 249, 460, 244, 460,
  0, 239, 460, 234, 460, 229, 460,
  0, 218, 459, 207, 457, 196, 454,
  0, 186, 452, 176, 448, 166, 444,
  0, 157, 440, 149, 435, 141, 430,
  0, 139, 429, 137, 427, 136, 426,
  0, 142, 425, 149, 423, 155, 419,
  0, 160, 417, 166, 413, 170, 408,
  0, 173, 406, 175, 404, 176, 401,
  0, 173, 403, 170, 405, 166, 407,
  0, 161, 409, 157, 411, 152, 412,
  0, 146, 414, 140, 414, 134, 413,
  0, 126, 412, 119, 409, 112, 404,
  0, 108, 401, 104, 398, 100, 394,
  0, 90, 384, 82, 372, 74, 360,
  0, 70, 354, 67, 348, 63, 341,
  0, 62, 339, 61, 337, 60, 335,
  0, 63, 338, 66, 341, 68, 344,
  0, 77, 353, 87, 361, 98, 368,
  0, 105, 373, 113, 378, 122, 379,
  0, 125, 380, 128, 380, 132, 380,
  0, 134, 381, 137, 380, 140, 381,
  0, 145, 381, 150, 381, 155, 380,
  0, 159, 380, 162, 380, 166, 379,
  0, 168, 379, 170, 379, 172, 378,
  0, 176, 377, 180, 377, 184, 379,
  0, 189, 381, 192, 384, 195, 388,
  0, 198, 391, 199, 395, 201, 398,
  0, 202, 400, 203, 403, 205, 405,
  0, 206, 407, 207, 410, 208, 412,
  0, 209, 413, 209, 414, 211, 414,
  0, 212, 414, 212, 412, 213, 411,
  0, 215, 407, 216, 403, 218, 398,
  0, 220, 392, 222, 385, 223, 378,
  0, 225, 369, 226, 359, 227, 350,
  0, 228, 346, 228, 342, 229, 338,
  0, 230, 327, 231, 317, 231, 306,
  0, 231, 304, 231, 302, 231, 301,
  0, 231, 296, 232, 292, 232, 288,
  0, 232, 285, 232, 283, 232, 280,
  0, 232, 275, 231, 270, 231, 265,
  0, 231, 259, 231, 252, 230, 245,
  0, 229, 240, 228, 234, 227, 228,
  0, 225, 220, 221, 213, 217, 206,
  0, 214, 201, 210, 196, 206, 192,
  0, 202, 188, 197, 185, 192, 184,
  0, 191, 183, 189, 183, 187, 183,
  0, 188, 180, 188, 177, 189, 174,
  0, 190, 166, 193, 159, 195, 152,
  0, 197, 148, 199, 144, 201, 140,
  0, 204, 133, 208, 127, 213, 121,
  0, 213, 121, 213, 121, 213, 121,
  1, 314, 63, 317, 64, 320, 65, 322, 66,
  0, 329, 68, 335, 70, 341, 74,
  0, 354, 80, 366, 88, 377, 99,
  0, 387, 108, 395, 120, 402, 133,
  0, 403, 136, 405, 138, 406, 141,
  0, 412, 156, 416, 172, 417, 189,
  0, 417, 193, 417, 198, 417, 202,
  0, 417, 214, 416, 226, 413, 237,
  0, 411, 244, 409, 251, 405, 258,
  0, 402, 265, 399, 271, 394, 277,
  0, 387, 288, 379, 297, 369, 305,
  0, 358, 312, 346, 318, 333, 320,
  0, 330, 321, 326, 321, 323, 321,
  0, 321, 321, 319, 321, 317, 321,
  0, 317, 319, 317, 317, 317, 315,
  0, 317, 311, 317, 307, 317, 303,
  0, 317, 296, 317, 289, 317, 282,
  0, 317, 280, 317, 278, 317, 275,
  0, 317, 270, 317, 265, 317, 260,
  0, 318, 257, 317, 254, 318, 251,
  0, 319, 248, 320, 246, 321, 244,
  0, 325, 237, 332, 231, 339, 226,
  0, 344, 221, 349, 217, 354, 212,
  0, 361, 203, 368, 194, 372, 184,
  0, 375, 178, 377, 171, 378, 165,
  0, 379, 161, 379, 156, 379, 152,
  0, 379, 144, 378, 136, 375, 129,
  0, 374, 123, 371, 117, 368, 112,
  0, 364, 105, 360, 99, 354, 93,
  0, 344, 82, 333, 73, 320, 66,
  0, 318, 65, 316, 64, 314, 63,
  0, 314, 63, 314, 63, 314, 63,
  1, 139, 83, 152, 74, 167, 68, 182, 63,
  0, 179, 65, 176, 66, 173, 68,
  0, 161, 75, 151, 83, 142, 93,
  0, 135, 100, 129, 108, 125, 118,
  0, 122, 124, 119, 132, 118, 139,
  0, 117, 144, 117, 149, 117, 154,
  0, 117, 168, 122, 181, 128, 193,
  0, 134, 203, 142, 212, 151, 220,
  0, 156, 224, 161, 228, 166, 233,
  0, 168, 235, 170, 237, 172, 240,
  0, 175, 243, 177, 247, 178, 251,
  0, 179, 254, 179, 257, 179, 260,
  0, 179, 264, 179, 268, 179, 272,
  0, 179, 276, 179, 279, 179, 283,
  0, 179, 285, 179, 288, 179, 290,
  0, 179, 296, 179, 302, 179, 307,
  0, 179, 310, 179, 313, 179, 316,
  0, 179, 318, 179, 319, 179, 321,
  0, 178, 321, 177, 321, 177, 321,
  0, 166, 321, 155, 319, 145, 314,
  0, 139, 312, 133, 308, 127, 304,
  0, 122, 300, 116, 295, 112, 290,
  0, 105, 283, 100, 275, 95, 266,
  0, 94, 264, 93, 262, 92, 260,
  0, 91, 257, 89, 255, 88, 252,
  0, 84, 243, 82, 232, 80, 222,
  0, 80, 217, 79, 213, 79, 209,
  0, 78, 193, 80, 177, 84, 162,
  0, 86, 154, 88, 146, 92, 138,
  0, 98, 124, 107, 111, 118, 100,
  0, 125, 94, 131, 88, 139, 83,
  0, 139, 83, 139, 83, 139, 83,
  1, 244, 34, 235, 34, 225, 35, 216, 36,
  0, 209, 37, 202, 39, 195, 41,
  0, 181, 44, 167, 49, 154, 55,
  0, 144, 60, 134, 66, 124, 72,
  0, 120, 75, 116, 78, 112, 81,
  0, 107, 85, 102, 90, 97, 94,
  0, 94, 96, 92, 99, 90, 101,
  0, 62, 130, 41, 166, 32, 206,
  0, 30, 214, 29, 223, 28, 231,
  0, 27, 240, 26, 249, 26, 258,
  0, 27, 265, 27, 272, 28, 280,
  0, 28, 287, 29, 294, 31, 301,
  0, 32, 305, 33, 310, 34, 315,
  0, 40, 338, 51, 360, 64, 380,
  0, 73, 393, 83, 405, 94, 416,
  0, 110, 432, 129, 445, 150, 455,
  0, 157, 459, 164, 462, 172, 465,
  0, 177, 467, 182, 469, 187, 470,
  0, 198, 473, 210, 476, 221, 477,
  0, 224, 477, 227, 478, 230, 478,
  0, 244, 479, 258, 479, 272, 477,
  0, 276, 477, 281, 476, 285, 476,
  0, 289, 475, 292, 474, 296, 474,
  0, 300, 473, 304, 472, 308, 471,
  0, 335, 463, 360, 451, 382, 434,
  0, 398, 423, 412, 409, 424, 393,
  0, 427, 389, 430, 385, 433, 380,
  0, 436, 375, 440, 370, 443, 365,
  0, 445, 361, 447, 356, 450, 352,
  0, 455, 339, 460, 327, 463, 314,
  0, 466, 304, 468, 294, 469, 284,
  0, 471, 270, 471, 256, 471, 243,
  0, 470, 239, 470, 235, 470, 231,
  0, 467, 212, 463, 193, 456, 175,
  0, 450, 160, 442, 146, 433, 132,
  0, 420, 114, 405, 97, 387, 82,
  0, 362, 62, 333, 48, 302, 40,
  0, 294, 38, 286, 37, 278, 36,
  0, 274, 35, 270, 35, 266, 35,
  0, 259, 34, 251, 34, 244, 34,
  0, 244, 34, 244, 34, 244, 34,
  1, 235, 10, 243, 9, 250, 9, 258, 10,
  0, 261, 10, 265, 10, 269, 10,
  0, 273, 11, 278, 11, 283, 12,
  0, 286, 12, 289, 13, 292, 13,
  0, 300, 15, 308, 17, 315, 19,
  0, 328, 22, 340, 27, 351, 32,
  0, 378, 44, 402, 61, 423, 82,
  0, 443, 102, 459, 125, 472, 151,
  0, 473, 154, 474, 156, 475, 159,
  0, 478, 165, 481, 172, 483, 179,
  0, 487, 191, 490, 203, 492, 216,
  0, 493, 219, 493, 223, 494, 226,
  0, 494, 230, 494, 233, 495, 237,
  0, 496, 246, 496, 254, 495, 262,
  0, 495, 267, 495, 272, 495, 277,
  0, 494, 281, 494, 284, 494, 287,
  0, 493, 290, 493, 293, 493, 296,
  0, 492, 301, 491, 306, 490, 311,
  0, 486, 330, 479, 348, 471, 365,
  0, 455, 398, 432, 427, 404, 450,
  0, 387, 464, 368, 476, 347, 485,
  0, 341, 487, 335, 490, 328, 492,
  0, 325, 493, 321, 494, 318, 495,
  0, 311, 497, 304, 499, 298, 500,
  0, 293, 501, 288, 502, 284, 503,
  0, 278, 504, 273, 504, 268, 505,
  0, 261, 505, 255, 506, 248, 505,
  0, 241, 506, 234, 505, 227, 505,
  0, 224, 504, 221, 504, 218, 504,
  0, 215, 503, 212, 503, 209, 503,
  0, 205, 502, 201, 501, 197, 500,
  0, 193, 499, 189, 499, 184, 497,
  0, 176, 495, 167, 492, 159, 489,
  0, 148, 485, 138, 481, 128, 475,
  0, 126, 474, 124, 473, 122, 471,
  0, 111, 465, 100, 457, 90, 449,
  0, 55, 421, 29, 383, 14, 340,
  0, 11, 332, 8, 323, 6, 314,
  0, 4, 308, 3, 301, 2, 295,
  0, 2, 293, 2, 290, 1, 288,
  0, 1, 284, 1, 280, 0, 276,
  0, 0, 267, 0, 257, 0, 248,
  0, 0, 244, 0, 241, 0, 237,
  0, 1, 234, 1, 231, 1, 228,
  0, 2, 225, 2, 222, 2, 219,
  0, 3, 215, 4, 211, 5, 207,
  0, 8, 191, 13, 175, 20, 159,
  0, 21, 156, 22, 153, 24, 150,
  0, 32, 134, 42, 118, 53, 103,
  0, 73, 78, 98, 57, 126, 41,
  0, 134, 37, 142, 33, 149, 30,
  0, 165, 23, 182, 18, 199, 14,
  0, 202, 14, 206, 13, 209, 12,
  0, 212, 12, 215, 12, 217, 11,
  0, 221, 11, 224, 11, 228, 10,
  0, 230, 10, 233, 10, 235, 10,
  2]);
export default Path;
