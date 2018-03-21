/* Sphere.js */

class Sphere {
    constructor (center, radius, material) {
        this.center = center;
        this.radius = radius;
        this.material = material;
        this.radiusSquared = this.radius * this.radius;
    }

// need intersection method
    intersection(ray) {
        Vector op = this.center - ray.origin
        let b = op.dot(ray.direction);
        let det = b * b - op.dot(op) + this.radiusSquared;
        if (det < 0) {
            return 0;
        } else {
            det = Math.pow(det, 0.5);
        }
        // return smaller positive value of t, the distance to the hitpoint
        let t1 = b - det;
        let t2 = b + det;
        if (t1 > 0 && t1 < t2) {
            return t1;
        } else {
            return t2;
        }
    }
}
