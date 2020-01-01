// prettier-ignore
const Path: Readonly<Int16Array> = new Int16Array([
  1, 491, 300, 492, 301, 494, 301, 496, 302,
  0, 496, 300, 497, 294, 497, 290,
  0, 496, 291, 492, 298, 491, 300,
  0, 491, 300, 491, 300, 491, 300,
  0, 491, 300, 491, 300, 491, 300,
  1, 467, 279, 465, 278, 458, 278, 455, 290,
  0, 453, 296, 455, 303, 461, 304,
  0, 465, 305, 470, 305, 473, 294,
  0, 475, 284, 471, 280, 467, 279,
  0, 467, 279, 467, 279, 467, 279,
  1, 529, 236, 530, 230, 529, 224, 522, 223,
  0, 512, 222, 506, 247, 505, 257,
  0, 504, 262, 503, 272, 511, 272,
  0, 515, 272, 520, 271, 529, 236,
  0, 529, 236, 529, 236, 529, 236,
  1, 318, 67, 260, 67, 212, 79, 203, 81,
  0, 203, 81, 203, 81, 203, 82,
  0, 211, 84, 217, 86, 224, 94,
  0, 225, 94, 225, 94, 226, 94,
  0, 232, 92, 275, 80, 336, 80,
  0, 516, 80, 638, 197, 638, 303,
  0, 638, 307, 638, 310, 638, 313,
  0, 638, 315, 638, 316, 639, 314,
  0, 639, 312, 640, 305, 640, 294,
  0, 640, 210, 543, 67, 318, 67,
  0, 318, 67, 318, 67, 318, 67,
  1, 347, 190, 345, 190, 320, 186, 313, 211,
  0, 321, 217, 328, 222, 335, 228,
  0, 339, 216, 343, 203, 347, 190,
  0, 347, 190, 347, 190, 347, 190,
  1, 203, 152, 203, 152, 205, 151, 207, 151,
  0, 210, 153, 213, 156, 217, 158,
  0, 216, 158, 213, 158, 205, 161,
  0, 205, 158, 204, 155, 203, 152,
  0, 203, 152, 203, 152, 203, 152,
  1, 611, 265, 600, 235, 550, 138, 419, 136,
  0, 366, 135, 325, 151, 286, 174,
  0, 315, 171, 343, 168, 372, 164,
  0, 341, 171, 311, 178, 280, 185,
  0, 289, 192, 297, 198, 306, 205,
  0, 304, 199, 303, 194, 302, 188,
  0, 309, 187, 341, 180, 368, 179,
  0, 361, 206, 354, 233, 346, 260,
  0, 360, 259, 365, 251, 366, 237,
  0, 368, 237, 369, 236, 371, 236,
  0, 371, 245, 371, 254, 371, 263,
  0, 349, 266, 334, 269, 322, 273,
  0, 326, 258, 330, 244, 335, 229,
  0, 314, 217, 294, 205, 273, 193,
  0, 274, 195, 275, 198, 276, 201,
  0, 279, 203, 282, 204, 286, 206,
  0, 292, 224, 305, 262, 306, 265,
  0, 308, 269, 309, 270, 318, 269,
  0, 319, 271, 319, 272, 319, 274,
  0, 303, 279, 296, 282, 280, 288,
  0, 279, 287, 279, 285, 278, 284,
  0, 282, 281, 287, 280, 283, 271,
  0, 260, 208, 262, 213, 261, 211,
  0, 261, 210, 262, 208, 263, 207,
  0, 274, 229, 285, 252, 296, 274,
  0, 293, 262, 298, 276, 263, 195,
  0, 250, 225, 236, 254, 222, 284,
  0, 223, 279, 225, 275, 226, 270,
  0, 214, 256, 202, 242, 190, 228,
  0, 200, 259, 209, 290, 218, 321,
  0, 214, 324, 210, 327, 206, 330,
  0, 95, 228, 101, 231, 93, 231,
  0, 87, 231, 79, 237, 79, 237,
  0, 77, 235, 76, 233, 74, 231,
  0, 105, 207, 106, 206, 133, 188,
  0, 134, 190, 135, 193, 137, 195,
  0, 137, 195, 131, 199, 129, 202,
  0, 123, 211, 131, 215, 191, 278,
  0, 184, 258, 178, 238, 172, 219,
  0, 185, 215, 198, 212, 212, 209,
  0, 220, 219, 229, 229, 237, 239,
  0, 239, 235, 240, 231, 242, 227,
  0, 240, 219, 238, 210, 237, 202,
  0, 241, 201, 245, 200, 250, 199,
  0, 250, 200, 250, 201, 250, 202,
  0, 252, 198, 253, 195, 254, 191,
  0, 223, 201, 191, 211, 160, 221,
  0, 164, 219, 167, 218, 171, 216,
  0, 166, 202, 162, 188, 157, 173,
  0, 163, 170, 169, 167, 175, 164,
  0, 185, 176, 195, 188, 205, 200,
  0, 214, 196, 224, 192, 233, 187,
  0, 232, 180, 231, 173, 229, 168,
  0, 234, 172, 240, 177, 246, 182,
  0, 247, 181, 249, 180, 251, 179,
  0, 231, 165, 211, 151, 191, 137,
  0, 199, 141, 207, 144, 215, 148,
  0, 233, 142, 240, 141, 247, 139,
  0, 248, 142, 248, 146, 249, 150,
  0, 237, 162, 251, 166, 256, 169,
  0, 251, 149, 247, 128, 242, 108,
  0, 246, 117, 250, 127, 254, 136,
  0, 259, 135, 262, 134, 262, 134,
  0, 263, 137, 263, 140, 264, 143,
  0, 264, 143, 261, 144, 258, 145,
  0, 261, 152, 264, 159, 267, 166,
  0, 278, 144, 289, 122, 301, 100,
  0, 294, 120, 287, 141, 280, 161,
  0, 322, 137, 361, 124, 412, 125,
  0, 479, 126, 579, 166, 612, 265,
  0, 613, 267, 612, 268, 611, 265,
  0, 611, 265, 611, 265, 611, 265,
  1, 575, 276, 574, 275, 573, 274, 572, 273,
  0, 573, 270, 574, 268, 575, 265,
  0, 575, 255, 563, 253, 563, 260,
  0, 563, 265, 571, 279, 571, 288,
  0, 571, 298, 565, 304, 557, 304,
  0, 549, 305, 537, 294, 537, 294,
  0, 539, 289, 540, 284, 542, 279,
  0, 543, 280, 544, 281, 545, 282,
  0, 542, 299, 562, 302, 558, 287,
  0, 557, 283, 539, 253, 560, 249,
  0, 574, 246, 583, 265, 583, 265,
  0, 581, 269, 578, 272, 575, 276,
  0, 575, 276, 575, 276, 575, 276,
  1, 548, 320, 546, 317, 547, 318, 544, 315,
  0, 544, 315, 543, 315, 543, 315,
  0, 541, 319, 538, 326, 535, 331,
  0, 533, 334, 534, 335, 534, 335,
  0, 534, 335, 534, 335, 534, 336,
  0, 532, 334, 530, 333, 528, 331,
  0, 528, 331, 528, 331, 528, 331,
  0, 529, 330, 530, 330, 530, 329,
  0, 533, 324, 537, 317, 539, 312,
  0, 539, 312, 539, 312, 539, 312,
  0, 537, 310, 538, 311, 533, 310,
  0, 533, 310, 533, 310, 533, 310,
  0, 534, 309, 536, 308, 537, 307,
  0, 537, 307, 537, 307, 537, 307,
  0, 541, 309, 547, 314, 549, 316,
  0, 549, 316, 549, 316, 549, 316,
  0, 549, 317, 549, 318, 548, 320,
  0, 548, 320, 548, 320, 548, 320,
  1, 527, 306, 527, 301, 521, 299, 519, 301,
  0, 518, 303, 520, 306, 522, 310,
  0, 523, 312, 525, 316, 523, 319,
  0, 520, 325, 511, 324, 508, 318,
  0, 508, 318, 507, 318, 509, 314,
  0, 510, 313, 510, 313, 510, 313,
  0, 510, 319, 516, 323, 519, 318,
  0, 520, 316, 518, 313, 516, 310,
  0, 515, 307, 513, 304, 515, 300,
  0, 517, 295, 526, 296, 529, 303,
  0, 529, 303, 529, 303, 529, 303,
  0, 528, 304, 528, 305, 527, 306,
  0, 527, 306, 527, 306, 527, 306,
  1, 498, 227, 509, 209, 528, 211, 532, 224,
  0, 534, 215, 537, 206, 539, 198,
  0, 542, 191, 536, 188, 535, 186,
  0, 535, 185, 536, 184, 537, 183,
  0, 549, 193, 553, 197, 559, 203,
  0, 533, 276, 528, 284, 534, 287,
  0, 534, 289, 533, 290, 533, 292,
  0, 526, 288, 524, 287, 515, 283,
  0, 516, 281, 516, 279, 517, 276,
  0, 517, 276, 513, 280, 507, 280,
  0, 488, 279, 484, 248, 498, 227,
  0, 498, 227, 498, 227, 498, 227,
  1, 502, 317, 500, 316, 495, 315, 494, 314,
  0, 494, 314, 494, 314, 494, 314,
  0, 494, 313, 495, 313, 495, 312,
  0, 496, 304, 496, 305, 495, 304,
  0, 491, 303, 489, 302, 488, 302,
  0, 487, 304, 486, 306, 485, 307,
  0, 484, 309, 484, 310, 484, 311,
  0, 484, 311, 484, 311, 484, 311,
  0, 483, 311, 480, 310, 478, 310,
  0, 478, 309, 478, 309, 478, 309,
  0, 479, 309, 480, 308, 481, 307,
  0, 484, 303, 490, 293, 494, 287,
  0, 494, 287, 494, 286, 494, 285,
  0, 495, 285, 495, 285, 495, 285,
  0, 497, 286, 500, 287, 503, 288,
  0, 503, 288, 503, 286, 501, 313,
  0, 501, 315, 501, 316, 502, 317,
  0, 502, 317, 502, 317, 502, 317,
  1, 460, 307, 452, 305, 446, 296, 449, 287,
  0, 453, 277, 462, 274, 468, 276,
  0, 477, 279, 481, 288, 479, 296,
  0, 476, 305, 470, 310, 460, 307,
  0, 460, 307, 460, 307, 460, 307,
  1, 449, 193, 449, 191, 449, 188, 449, 186,
  0, 450, 186, 469, 190, 477, 194,
  0, 476, 199, 476, 205, 475, 211,
  0, 475, 211, 486, 202, 491, 200,
  0, 496, 199, 506, 208, 506, 208,
  0, 502, 211, 498, 215, 494, 219,
  0, 482, 213, 475, 219, 474, 220,
  0, 468, 258, 465, 262, 478, 266,
  0, 478, 267, 478, 269, 478, 271,
  0, 460, 266, 459, 266, 441, 263,
  0, 441, 262, 441, 260, 442, 259,
  0, 449, 259, 449, 253, 449, 252,
  0, 449, 252, 454, 199, 454, 196,
  0, 454, 194, 449, 193, 449, 193,
  0, 449, 193, 449, 193, 449, 193,
  1, 443, 281, 437, 270, 424, 273, 422, 286,
  0, 419, 303, 436, 306, 442, 296,
  0, 442, 296, 442, 296, 443, 296,
  0, 442, 298, 441, 303, 441, 303,
  0, 441, 303, 440, 303, 440, 303,
  0, 430, 310, 412, 301, 415, 285,
  0, 417, 274, 429, 266, 443, 275,
  0, 443, 275, 444, 275, 444, 275,
  0, 444, 276, 443, 279, 443, 281,
  0, 443, 281, 443, 281, 443, 281,
  1, 406, 259, 402, 262, 398, 262, 395, 262,
  0, 395, 262, 384, 263, 378, 252,
  0, 371, 241, 377, 227, 383, 221,
  0, 392, 212, 406, 210, 412, 204,
  0, 420, 193, 399, 181, 382, 198,
  0, 381, 197, 380, 196, 379, 195,
  0, 381, 189, 383, 184, 385, 179,
  0, 410, 177, 430, 176, 435, 195,
  0, 436, 198, 435, 204, 434, 207,
  0, 434, 210, 433, 226, 432, 230,
  0, 432, 234, 432, 248, 432, 251,
  0, 432, 253, 432, 255, 433, 256,
  0, 435, 258, 439, 258, 439, 258,
  0, 439, 260, 438, 261, 438, 263,
  0, 426, 262, 428, 262, 418, 262,
  0, 414, 257, 415, 258, 414, 254,
  0, 414, 254, 409, 258, 406, 259,
  0, 406, 259, 406, 259, 406, 259,
  1, 395, 304, 395, 304, 395, 304, 395, 304,
  0, 390, 305, 381, 306, 373, 308,
  0, 373, 308, 372, 308, 372, 308,
  0, 373, 307, 373, 305, 373, 304,
  0, 372, 296, 370, 285, 368, 278,
  0, 368, 276, 367, 275, 366, 274,
  0, 366, 274, 366, 274, 366, 273,
  0, 376, 272, 387, 271, 391, 271,
  0, 391, 271, 391, 271, 392, 271,
  0, 392, 273, 392, 274, 393, 277,
  0, 393, 277, 393, 277, 393, 277,
  0, 392, 276, 389, 274, 377, 276,
  0, 377, 276, 376, 276, 376, 276,
  0, 377, 278, 377, 283, 378, 286,
  0, 378, 286, 378, 286, 378, 287,
  0, 388, 285, 383, 286, 389, 284,
  0, 389, 284, 389, 284, 389, 284,
  0, 389, 286, 389, 286, 389, 289,
  0, 389, 289, 389, 289, 389, 289,
  0, 384, 288, 386, 288, 378, 289,
  0, 378, 289, 378, 290, 378, 290,
  0, 378, 292, 380, 299, 380, 302,
  0, 380, 302, 380, 302, 381, 302,
  0, 382, 303, 395, 302, 397, 298,
  0, 397, 298, 397, 298, 397, 298,
  0, 396, 300, 396, 302, 395, 304,
  0, 395, 304, 395, 304, 395, 304,
  1, 363, 311, 359, 312, 358, 312, 354, 314,
  0, 353, 313, 353, 313, 353, 313,
  0, 353, 312, 354, 310, 354, 309,
  0, 353, 305, 351, 297, 350, 295,
  0, 350, 295, 350, 295, 350, 295,
  0, 346, 296, 341, 298, 337, 299,
  0, 337, 299, 337, 299, 337, 299,
  0, 338, 302, 340, 309, 341, 313,
  0, 342, 315, 343, 316, 344, 316,
  0, 344, 316, 344, 316, 344, 317,
  0, 340, 318, 337, 319, 334, 321,
  0, 334, 320, 333, 320, 333, 320,
  0, 334, 319, 334, 317, 334, 315,
  0, 333, 312, 326, 292, 324, 288,
  0, 324, 286, 323, 285, 322, 285,
  0, 322, 285, 322, 285, 322, 284,
  0, 325, 283, 328, 282, 333, 281,
  0, 333, 281, 333, 281, 333, 281,
  0, 333, 283, 333, 284, 333, 286,
  0, 334, 290, 335, 294, 336, 296,
  0, 336, 296, 336, 296, 336, 296,
  0, 340, 294, 345, 293, 349, 292,
  0, 349, 292, 349, 292, 349, 292,
  0, 348, 288, 347, 285, 346, 282,
  0, 346, 280, 345, 279, 344, 278,
  0, 344, 278, 344, 278, 344, 278,
  0, 348, 277, 351, 276, 355, 276,
  0, 355, 276, 355, 276, 355, 276,
  0, 354, 277, 354, 279, 354, 280,
  0, 356, 287, 359, 301, 361, 307,
  0, 361, 309, 362, 310, 363, 311,
  0, 363, 311, 363, 311, 363, 311,
  1, 318, 327, 315, 329, 312, 330, 309, 332,
  0, 308, 332, 308, 332, 308, 332,
  0, 310, 329, 309, 329, 296, 299,
  0, 296, 299, 296, 299, 296, 299,
  0, 296, 299, 287, 303, 286, 306,
  0, 286, 306, 286, 306, 286, 306,
  0, 285, 305, 285, 303, 285, 301,
  0, 285, 301, 285, 300, 285, 300,
  0, 292, 296, 310, 289, 313, 288,
  0, 313, 288, 313, 288, 313, 288,
  0, 314, 290, 315, 291, 316, 293,
  0, 316, 293, 316, 293, 316, 293,
  0, 313, 292, 309, 294, 304, 296,
  0, 304, 296, 304, 296, 304, 296,
  0, 316, 328, 316, 327, 318, 327,
  0, 318, 327, 318, 327, 318, 327,
  0, 318, 327, 318, 327, 318, 327,
  1, 263, 360, 263, 360, 263, 359, 263, 359,
  0, 265, 355, 260, 353, 245, 328,
  0, 244, 325, 242, 325, 241, 325,
  0, 241, 325, 241, 325, 241, 325,
  0, 249, 319, 256, 314, 266, 309,
  0, 266, 309, 266, 309, 267, 309,
  0, 268, 311, 269, 312, 270, 314,
  0, 270, 314, 270, 314, 270, 314,
  0, 269, 314, 267, 313, 265, 315,
  0, 262, 315, 257, 318, 252, 322,
  0, 252, 323, 252, 323, 252, 323,
  0, 254, 326, 256, 330, 258, 333,
  0, 258, 333, 258, 333, 258, 333,
  0, 268, 327, 266, 329, 270, 325,
  0, 270, 325, 270, 325, 270, 325,
  0, 271, 327, 271, 327, 272, 331,
  0, 272, 331, 272, 331, 272, 331,
  0, 269, 332, 267, 331, 260, 337,
  0, 260, 337, 260, 337, 260, 337,
  0, 270, 354, 271, 354, 273, 353,
  0, 273, 353, 273, 353, 273, 353,
  0, 271, 355, 267, 357, 263, 360,
  0, 263, 360, 263, 360, 263, 360,
  1, 245, 242, 248, 236, 251, 230, 254, 224,
  0, 258, 248, 262, 272, 266, 295,
  0, 262, 297, 257, 299, 253, 301,
  0, 245, 292, 237, 282, 229, 272,
  0, 233, 263, 238, 255, 243, 246,
  0, 244, 247, 245, 249, 246, 250,
  0, 246, 247, 245, 245, 245, 242,
  0, 245, 242, 245, 242, 245, 242,
  1, 243, 378, 231, 387, 218, 383, 212, 374,
  0, 204, 365, 205, 350, 216, 342,
  0, 231, 330, 243, 341, 247, 347,
  0, 248, 348, 259, 364, 243, 378,
  0, 243, 378, 243, 378, 243, 378,
  1, 342, 89, 137, 89, 13, 226, 0, 241,
  0, 0, 241, 0, 241, 1, 242,
  0, 62, 259, 157, 323, 197, 444,
  0, 198, 444, 198, 444, 198, 444,
  0, 254, 375, 339, 316, 435, 316,
  0, 516, 316, 565, 359, 565, 397,
  0, 565, 415, 559, 430, 543, 443,
  0, 543, 444, 543, 444, 544, 444,
  0, 559, 433, 571, 415, 571, 396,
  0, 571, 373, 559, 358, 559, 358,
  0, 566, 365, 570, 374, 570, 374,
  0, 576, 333, 597, 311, 597, 311,
  0, 595, 302, 590, 294, 590, 294,
  0, 598, 302, 605, 321, 605, 335,
  0, 605, 345, 601, 358, 592, 367,
  0, 592, 367, 592, 367, 592, 367,
  0, 600, 362, 609, 351, 609, 329,
  0, 609, 314, 604, 304, 604, 304,
  0, 610, 298, 615, 294, 620, 292,
  0, 621, 295, 622, 301, 622, 307,
  0, 622, 308, 623, 309, 624, 307,
  0, 624, 301, 623, 290, 623, 290,
  0, 629, 287, 633, 286, 633, 286,
  0, 617, 176, 489, 89, 342, 89,
  0, 342, 89, 342, 89, 342, 89,
  1, 392, 240, 393, 247, 396, 250, 401, 250,
  0, 406, 251, 410, 248, 411, 244,
  0, 412, 240, 414, 214, 414, 214,
  0, 414, 214, 402, 221, 399, 224,
  0, 395, 228, 391, 233, 392, 240,
  0, 392, 240, 392, 240, 392, 240,
  1, 555, 421, 555, 423, 555, 423, 556, 421,
  0, 558, 417, 560, 411, 561, 401,
  0, 564, 363, 521, 330, 460, 323,
  0, 405, 317, 335, 332, 271, 384,
  0, 271, 384, 271, 385, 271, 385,
  0, 273, 390, 276, 396, 274, 406,
  0, 274, 407, 275, 407, 275, 407,
  0, 339, 348, 406, 329, 459, 333,
  0, 518, 337, 559, 367, 559, 401,
  0, 559, 411, 557, 417, 555, 421,
  0, 555, 421, 555, 421, 555, 421,
  1, 219, 345, 217, 347, 208, 354, 218, 369,
  0, 223, 375, 233, 382, 240, 375,
  0, 247, 370, 248, 362, 240, 352,
  0, 235, 345, 226, 339, 219, 345,
  0, 219, 345, 219, 345, 219, 345,
  2]);
export default Path;