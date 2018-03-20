/* Vector.js */

class Vector {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

// methods
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
    }

    sub(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;
    }

    scale(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
    }

    dot(vector) {
        return this.x * vector.x + this.y + vector.y + this.z * vector.z;
    }

}
