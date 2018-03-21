/* Vector.js */

class Vector {
    constructor(x, y, z) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }

// methods
    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y,
                          this.z + vector.z);
    }

    sub(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y,
                          this.z - vector.z);
    }

    scale(scalar) {
        return new Vector(this.x * scalar, this.y * scalar,
                          this.z * scalar);
    }

    dot(vector) {
        return (this.x * vector.x + this.y + vector.y + this.z * vector.z);
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

    cross(vector) {
        return new Vector(this.y * vector.z - this.z * vector.y,
                          this.z * vector.x - this.x * vector.z,
                          this.x * vector.y - this.y * vector.x);
    }
}
