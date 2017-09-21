/* classes */ 

// Color constructor
class Color {
    constructor(r,g,b,a) {
        try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw "color component not a number";
            else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                throw "color component less than 0";
            else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                throw "color component bigger than 255";
            else {
                this.r = r; this.g = g; this.b = b; this.a = a; 
            }
        } // end try
        
        catch (e) {
            console.log(e);
        }
    } // end Color constructor

        // Color change method
    change(r,g,b,a) {
        try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw "color component not a number";
            else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                throw "color component less than 0";
            else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                throw "color component bigger than 255";
            else {
                this.r = r; this.g = g; this.b = b; this.a = a; 
            }
        } // end throw
        
        catch (e) {
            console.log(e);
        }
    } // end Color change method
            // Color add method
    add(c) {
        try {
            if (!(c instanceof Color))
                throw "Color.add: non-color parameter";
            else {
                this.r += c.r; this.g += c.g; this.b += c.b; this.a += c.a;
                return(this);
            }
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end color add
    
        // Color subtract method
    subtract(c) {
        try {
            if (!(c instanceof Color))
                throw "Color.subtract: non-color parameter";
            else {
                this.r -= c.r; this.g -= c.g; this.b -= c.b; this.a -= c.a;
                return(this);
            }
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end color subgtract
    
        // Color scale method
    scale(s) {
        try {
            if (typeof(s) !== "number")
                throw "scale factor not a number";
            else {
                this.r *= s; this.g *= s; this.b *= s; this.a *= s; 
                return(this);
            }
        } // end throw
        
        catch (e) {
            console.log(e);
        }
    } // end Color scale method
    
        // Color copy method
    copy(c) {
        try {
            if (!(c instanceof Color))
                throw "Color.copy: non-color parameter";
            else {
                this.r = c.r; this.g = c.g; this.b = c.b; this.a = c.a;
                return(this);
            }
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end Color copy method
    
        // Color clone method
    clone() {
        var newColor = new Color();
        newColor.copy(this);
        return(newColor);
    } // end Color clone method
    
        // Send color to console
    toConsole() {
        console.log("rgba: "+ this.r +" "+ this.g +" "+ this.b +" "+ this.a);
    }  // end Color toConsole
} // end color class

// Vector class
class Vector {
    constructor(x=0,y=0,z=0) {
        this.set(x,y,z);
    } // end constructor
    
    // sets the components of a vector
    set(x,y,z) {
        try {
            if ((typeof(x) !== "number") || (typeof(y) !== "number") || (typeof(z) !== "number"))
                throw "vector component not a number";
            else
                this.x = x; this.y = y; this.z = z;
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end vector set
    
    // copy the passed vector into this one
    copy(v) {
        try {
            if (!(v instanceof Vector))
                throw "Vector.copy: non-vector parameter";
            else
                this.x = v.x; this.y = v.y; this.z = v.z;
        } // end try
        
        catch(e) {
            console.log(e);
        }
    }
    
    toConsole(prefix) {
        console.log(prefix+"["+this.x+","+this.y+","+this.z+"]");
    } // end to console
    
    // static dot method
    static dot(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.dot: non-vector parameter";
            else
                return(v1.x*v2.x + v1.y*v2.y + v1.z*v2.z);
        } // end try
        
        catch(e) {
            console.log(e);
            return(NaN);
        }
    } // end dot static method
    
    // static add method
    static add(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.add: non-vector parameter";
            else
                return(new Vector(v1.x+v2.x,v1.y+v2.y,v1.z+v2.z));
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end add static method
    
    // static subtract method, v1-v2
    static subtract(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.subtract: non-vector parameter";
            else {
                var v = new Vector(v1.x-v2.x,v1.y-v2.y,v1.z-v2.z);
                //v.toConsole("Vector.subtract: ");
                return(v);
            }
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end subtract static method
    
    // static scale method
    static scale(c,v) {
        try {
            if (!(typeof(c) === "number") || !(v instanceof Vector))
                throw "Vector.scale: malformed parameter";
            else
                return(new Vector(c*v.x,c*v.y,c*v.z));
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end scale static method
    // static scale method2
    static scale2(c,v) {
        try {
            if (!(c instanceof Vector) || !(v instanceof Vector))
                throw "Vector.scale2: malformed parameter";
            else
                return(new Vector(c.x*v.x,c.y*v.y,c.z*v.z));
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end scale static method
    
    // static normalize method
    static normalize(v) {
        try {
            if (!(v instanceof Vector))
                throw "Vector.normalize: parameter not a vector";
            else {
                var lenDenom = 1/Math.sqrt(Vector.dot(v,v));
                return(Vector.scale(lenDenom,v));
            }
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end scale static method
    
} // end Vector class
/* utility functions */

// draw a pixel at x,y using color
function drawPixel(imagedata,x,y,color) {
    try {
        if ((typeof(x) !== "number") || (typeof(y) !== "number"))
            throw "drawpixel location not a number";
        else if ((x<0) || (y<0) || (x>=imagedata.width) || (y>=imagedata.height)) {

            console.log("x" + x + "y" + y);
            throw "drawpixel location outside of image";    
        }
        else if (color instanceof Color) {
            var pixelindex = (y*imagedata.width + x) * 4;
            imagedata.data[pixelindex] = color.r;
            imagedata.data[pixelindex+1] = color.g;
            imagedata.data[pixelindex+2] = color.b;
            imagedata.data[pixelindex+3] = color.a;
        } else 
            throw "drawpixel color is not a Color";
    } // end try
    
    catch(e) {
        console.log(e);
    }
} // end drawPixel

// get the input ellipsoids from the standard class URL
function getInputEllipsoids() {
    const INPUT_ELLIPSOIDS_URL = 
        "https://ncsucgclass.github.io/prog1/ellipsoids.json";
        
    // load the ellipsoids file
    var httpReq = new XMLHttpRequest(); // a new http request
    httpReq.open("GET",INPUT_ELLIPSOIDS_URL,false); // init the request
    httpReq.send(null); // send the request
    var startTime = Date.now();
    while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
        if ((Date.now()-startTime) > 3000)
            break;
    } // until its loaded or we time out after three seconds
    if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
        console.log*("Unable to open input ellipses file!");
        return String.null;
    } else
        return JSON.parse(httpReq.response); 
} // end get input ellipsoids


// get the input lights from the standard class URL
function getInputLights() {
    const INPUT_ELLIPSOIDS_URL = 
        "https://ncsucgclass.github.io/prog1/lights.json";
        
    // load the ellipsoids file
    var httpReq = new XMLHttpRequest(); // a new http request
    httpReq.open("GET",INPUT_ELLIPSOIDS_URL,false); // init the request
    httpReq.send(null); // send the request
    var startTime = Date.now();
    while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
        if ((Date.now()-startTime) > 3000)
            break;
    } // until its loaded or we time out after three seconds
    if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
        console.log*("Unable to open input ellipses file!");
        return String.null;
    } else
        return JSON.parse(httpReq.response); 
}


function drawInputEllipsoidsWithLights(context) {
    var inputEllipsoids = getInputEllipsoids();
    var inputLights = getInputLights();
    var eyeLoc = new Vector(0.5, 0.5, -0.5);
    
    if (inputEllipsoids != String.null) { 
        var c = new Color(0,0,0,0); // the color at the pixel: black
        var w = context.canvas.width;
        var h = context.canvas.height;
        var n = inputEllipsoids.length; 
        //console.log("number of ellipsoids: " + n);

        var imagedata = context.createImageData(w, h);
        for (var i=0; i<1; i+=1/w) {
            for (var j=1/h; j<1; j+=1/h) {
                var expectObject = n;
                var t = 9999;

                for(var e=0; e<n; e++) {
                    var pixelPos = new Vector(i,j,0);
                    var center = new Vector(inputEllipsoids[e].x, inputEllipsoids[e].y, inputEllipsoids[e].z);

                    var test = calIntersection(center, pixelPos, eyeLoc, inputEllipsoids[e].a, inputEllipsoids[e].b, inputEllipsoids[e].c);

                    if(test < t) {
                        t = test;
                        expectObject = e;
                    }
                }

                 // part 1
                if(expectObject < n) {
                    var fillColor = new Color(inputEllipsoids[expectObject].diffuse[0]*255,
                                            inputEllipsoids[expectObject].diffuse[1]*255,
                                            inputEllipsoids[expectObject].diffuse[2]*255,
                                            255);
                    drawPixel(imagedata, i*w, (1-j)*h, fillColor);
                } else {
                    drawPixel(imagedata, i*w, (1-j)*h, new Color(0,0,0,255));
                }

                // part 2
                //Ka*La + Kd*Ld*(N•L) + Ks*Ls*(R•V)n = color
                //Ka*La + Kd*Ld*(N•L) + Ks*Ls*(N•H)n = color

                if(expectObject < n) {
                    var fillColor = new Color(0,0,0,1);
                    //ka* La, ambient
                    for (var l=0; l<inputLights.length;l++) {

                        var curObject = inputEllipsoids[expectObject];
                        var pixelPos = new Vector(i,j,0);
                        var ambientColor = new Color (
                            curObject.ambient[0] * inputLights[l].ambient[0],
                            curObject.ambient[1] * inputLights[l].ambient[1],
                            curObject.ambient[2] * inputLights[l].ambient[2],
                            1);
                        fillColor.add(ambientColor);

                        //Kd*Ld(N.L)
                        // var vectorLight = new Vector(inputLights[l].x, inputLights[l].y, inputLights[l].z);
                        var vectorLight = new Vector(inputLights[l].x, inputLights[l].y, inputLights[l].z);
                        //var surfacePos = new Vector(i,j,minZ);
                        surfacePos = calSurface(eyeLoc, pixelPos, t);

                        var vectorL = Vector.normalize(Vector.subtract(vectorLight, surfacePos));
                        var center = new Vector(curObject.x, curObject.y, curObject.z);
                        var vectorN = Vector.normalize(calNormal(center, surfacePos, curObject.a, curObject.b, curObject.c));

                        var NdotL = Math.max(0, Vector.dot(vectorN, vectorL));
                        var diffuseColor = new Color(
                            curObject.diffuse[0] * inputLights[l].diffuse[0] * NdotL,
                            curObject.diffuse[1] * inputLights[l].diffuse[1] * NdotL,
                            curObject.diffuse[2] * inputLights[l].diffuse[2] * NdotL,
                            1);
                        fillColor.add(diffuseColor);

                        // //Ks*Ls*(N•H)n
                        var vectorV = Vector.normalize(Vector.subtract(eyeLoc, surfacePos));
                        var vectorH = Vector.normalize(Vector.add(vectorL,vectorV));
                        var NdotH = Math.pow(Math.max(0, Vector.dot(vectorN, vectorH)),curObject.n);
                        var specularColor = new Color(
                            curObject.specular[0] * inputLights[l].specular[0] * NdotH,
                            curObject.specular[1] * inputLights[l].specular[1] * NdotH,
                            curObject.specular[2] * inputLights[l].specular[2] * NdotH,
                            1);
                        //console.log("this is " + NdotH);
                        fillColor.add(specularColor);
                    }

                    drawPixel(imagedata, i*w, (1-j)*h, fillColor.scale(255));
                } else {
                    drawPixel(imagedata, i*w, (1-j)*h, new Color(0,0,0,255));
                }
            }
        }
        context.putImageData(imagedata, 0, 0);
    } // end if ellipsoids found
}

function calNormal(center,surfacePos, a, b, c) {
    var temp = Vector.subtract(surfacePos,center);
    normal = Vector.scale2(temp, new Vector(2/a/a, 2/b/b, 2/c/c));
    return normal;

}

//If eyeline intersect with ellipsoid, return t, else return a max number
function calIntersection(center,pixelPos,eyeLoc,a,b,c){
    var cm = Vector.scale2(new Vector(1/a, 1/b, 1/c), center);
    var dm = Vector.scale2(new Vector(1/a, 1/b, 1/c), Vector.subtract(pixelPos, eyeLoc));
    var em = Vector.scale2(new Vector(1/a, 1/b, 1/c), eyeLoc);

    var ra = Vector.dot(dm,dm);
    var rb = 2*Vector.dot(Vector.subtract(em,cm),dm);
    var rc = (Vector.dot(Vector.subtract(em,cm),Vector.subtract(em,cm))-1);

    var temp = rb*rb - 4*ra*rc;
    if(temp < 0) {
        return 10000;
    } else {
        var root1 = (-rb + Math.sqrt(temp))/2/ra;
        var root2 = (-rb - Math.sqrt(temp))/2/ra;
        var tmp = Math.min(root1,root2);
        return Math.max(1,tmp);
    }
}

function calSurface(eyeLoc,pixelPos,t){
    var v = Vector.subtract(pixelPos, eyeLoc);
    return Vector.add(Vector.scale(t,v), eyeLoc);
}

/* main -- here is where execution begins after window load */

function main() {

    // Get the canvas and context
    var canvas = document.getElementById("viewport"); 
    var context = canvas.getContext("2d");

    drawInputEllipsoidsWithLights(context);

}