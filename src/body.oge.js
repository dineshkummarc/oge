OGE.Body = function(x, y, width, height) {

    OGE.assert(this instanceof arguments.callee, "Constructor called as a function");

    this.x = typeof (x) != 'undefined' ? x : 0;
    this.y = typeof (y) != 'undefined' ? y : 0;
    this.width = typeof (width) != 'undefined' ? width : 1;
    this.height = typeof (height) != 'undefined' ? height : 1;

    this.speed = 0;
    this.direction = null;
    this.slide = false;

    var active = false;

    var onActive = new Array();
    var onDeactive = new Array();
    var onCollision = new Array();

    this.setDirection = function(x2, y2) {
        this.direction = OGE.Direction.create(this.x, this.y, x2, y2);
    };

    this.clearEvents = function() {
        onActivate = new Array();
        onDeactive = new Array();
    };

    this.isActive = function() {
        return active;
    };

    this.setActive = function(newActive) {
        if (active !== newActive) {
            active = newActive;
            if (active) {
                for (var i = 0; i < onActive.length; i++) {
                    onActive[i]();
                }
            } else {
                for (var i = 0; i < onDeactive.length; i++) {
                    onDeactive[i]();
                }
            }
        }
    };

    this.onActive = function(onActiveEvent) {
        onActive.push(onActiveEvent);
    };

    this.onDeactive = function(onDeactiveEvent) {
        onDeactive.push(onDeactiveEvent);
    };

    this.onCollision = function(onCollisionEvent) {
        onCollision.push(onCollisionEvent);
    };

    this.collide = function(body) {
        var collide = true;
        for (var i = 0; i < onCollision.length; i++) {
            if (onCollision[i](body) === false) {
                collide = false;
            }
        }
        return collide;
    };

    this.intersects = function(bodyOrX, y, width, height) {
        var x, body;
        x = body = bodyOrX;
        if (arguments.length === 1) {
            x = body.x;
            y = body.y;
            width = body.width;
            height = body.height;
        }

        return this.x < x + width
            && this.x + this.width > x
            && this.y < y + height
            && this.y + this.height > y;
    };

    this.intersection = function(bodyOrX, y, width, height) {
        var x, body;
        x = body = bodyOrX;
        if (arguments.length === 1) {
            x = body.x;
            y = body.y;
            width = body.width;
            height = body.height;
        }

        var sx, ex, sy, ey;
        sx = this.x > x ? this.x : x;
        ex = this.x + this.width < x + width ? this.x + this.width : x + width;
        sy = this.y > y ? this.y : y;
        ey = this.y + this.height < y + height ? this.y + this.width : y + height; 
        return (ex - sx) * (ey - sy);
    };

}
