/*
    Xplorer 2019 - by Henrique Vianna
    an arcade game in 1kB of JavaScript - for JS1k 2019 "X"

    https://github.com/hvianna/Xplorer2019

    Variable map: (uppercase letters used mostly for constants and functions)

    _ - function argument (local scope)
    a - canvas (from shim)               A - auxiliary canvas
    b - bats array                       B - abbreviation function
    c - 2D context (from shim)           C - auxiliary 2D context
    d - player dead?                     D
    e - energy                           E
    f - difficulty factor                F - shorthand for 'fillRect'
    g - gravity acceleration             G
    h - high score                       H - 1080 (canvas height, ship X-coordinate)
    i - loop iterator                    I - 10 (scroll step, score increment, etc..)
    j                                    J - 100
    k - keyboard buffer                  K - 200
    l - laser phase (0-5)                L - shorthand for localStorage
    m                                    M - 540 (max energy, bats Y-coord variation)
    n                                    N - audio context
    o                                    O - audio oscillator
    p                                    P
    q                                    Q
    r - ship recharging?                 R - shorthand for Math.random()
    s - score                            S
    t - temporary data inside loops      T
    u - accent color (crystals, laser)   U
    v                                    V
    w                                    W - 1920 (canvas width)
    x                                    X
    y - ship Y-coordinate                Y
    z                                    Z - 150 (cave height variation)

    Abbreviated methods and properties:

    cO - createOscillator                fx - fillText
    da - destination                     fy - fillStyle
    da - drawImage (after getContext)    gg - getImageData
    fc - fillRect                        sC - shadowColor
    fn - frequency                       sO - shadowOffsetY

*/

// NOTE: if you delete every comment and blank line below, the resulting code
//       should have the same byte count as the submitted one-liner version

// abbreviation function - this is yonatan's variant of Marijn Haverbeke's technique
// see https://codepen.io/y0natan/pen/MVvxBM?editors=0010
B=_=>{for(t in _)this[t[0]+t[6]]=t}

// create audio context and oscillator, and a shorthand for localStorage
B(N=new AudioContext);B(O=N[cO](L=localStorage));O.connect(N[da])

// set canvas size and create an auxiliary canvas and context for the background
A=a.cloneNode(a.width=W=1920,a.height=H=1080);B(C=A.getContext`2d`)

// set the flag for player dead, read high score from local storage and set font size
h=L[d=1]|0
c.font='4em"'

// animation function begins here - scroll the auxiliary canvas 10 pixels to the right
setInterval(_=>{C[da](A,I=10,0)

// draw a new segment of the cave
// defining a shorthand for Math.random inside the fillRect call saves a couple of bytes
C[fy]='#456'
C[F=fc](0,R={valueOf:Math.random},I,H)

// clear the scoreboard area and set fill color to black
C[F](0,0,W,Z=150)
C[fy]='#000'

// if player is dead clear the canvas, reset variables and save high score to localStorage
// also pick a random "accent" color, avoiding dark blues (poor contrast)
if(d)C[F](l=s=d=0,k=[b=[]],W,H),e=y=M=540,L[f=1]=h,c[sC]=C[sC]=u=`hsl(${R*280+280},100%,50%)`

// increment score and update high score as needed
h=(s+=I)>h?s:h

// increment the difficulty factor by .1 on every 5000 points scored
f+=f<2&&!(s%5e3)/I

// set the shadow offset to create random "crystals" - the equation can return 3 values:
// -8 = crystal at the top, 0 = no crystal in this segment, or 8 = crystal at the bottom
C[sO]=R*4-2<<3

// draw the cave opening
C.fill(new Path2D(`M0 ${(K=200)*f+R*Z} l10 ${R*K-(J=100)} v${900-K*f} l-10 ${R*K-J}`))

// copy the auxiliary canvas' contents to the main (visible) canvas
c[da](A,0,0)

// check keystrokes - the laser is triggered on keyup
// since webkit requires user interaction to play sound, we start the oscillator here
onkeydown=onkeyup=_=>(k[t=_.which]=!!_.type[5])||O.start(l=(t==32&&e>50)*5)

// update ship's Y-coordinate according to user controls
// when out of energy, gravity takes place and increases on every frame
y+=e?(g=0,k[90]?5:k[65]?-5:0):++g

// add a new random bat
R>.98&&b.push({x:0,y:400+R*M})

// update bats positions - bats hit by the laser have their X-coordinate moved off-screen
b.forEach(t=>c[fx]('🦇',t.x+=15*f-R*18+l*!((t.y-y)**2>>9)*W,t.y+=9-R*18))

// ship collision detection
// read a block of pixels at ship position and check for any non-zero value on every 4th byte
d=c[gg](H,y-53,I,60).data.some((t,i)=>!(i%4)&&t)

// set shadow when ship is recharging / flying low
c[sO]=R*I*(r=y>735)

// draw the ship, with added "turbulence" when flying low
c[fx]('🛸',H,y+r*R*6-3)

// play sounds (laser, recharging, background humming)
O[fn].value=K*l||R*(r?400:J)

// draw the laser beam, or full screen flash on death
c[fy]=u
c[F](C[sO]=c[sO]=0,d?0:y-20,d?W:H,d?H:l&&l--)

// update energy and draw energy bar
// energy recharges 3 units per frame, laser consumes 40 units over 4 frames
c[F](Z,50,e+=(e<M)*r*3-!!e-l*4,50)

// draw scoreboard and set animation interval to 16ms (60 fps)
c[fx]('⚡ 👽'+s+' 🥇'+h,650,J)},16)
