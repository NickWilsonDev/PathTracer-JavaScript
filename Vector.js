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

    length() {
        return Math.pow((this.x * this.x + this.y * this.y + this.z * this.z), 0.5);
    }
    
    normalize() {
        var length = length();
        this.x /= length;
        this.y /= length;
        this.z /= length;
    }
}
