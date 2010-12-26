/*
 * "THE BEER-WARE LICENSE" (Revision 42):
 * =============================================================================
 * <eirikb@eirkb.no> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return Eirik Brandtzæg
 * =============================================================================
 */
/**
 * 
 * @author eirikb
 */
OGE.Direction = function(cos, sin) {
    this.cos = cos;
    this.sin = sin;

}

OGE.Direction.create = function(x1, y1, x2, y2) {
    var a =  y2 - y1;
    var b =x2 - x1;
    var h = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    var sin = a / h;
    var cos = b / h;
    return new OGE.Direction(cos, sin);
}
