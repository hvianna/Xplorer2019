# Xplorer 2019
## An arcade game in 1kB of JavaScript

Use **A** & **Z** keys to move ship, **Spacebar** to fire.
Mind your energy! Fly closer to the ground to recharge. How far can you get?

<canvas style="width:100%; height:auto;"></canvas>
<script>
// these are provided by the JS1k shim
var a = document.getElementsByTagName('canvas')[0],
    c = a.getContext('2d');
var AudioContext = AudioContext || webkitAudioContext;
document.onkeydown = e => { if (e.which == 32) e.preventDefault(); }
// game code
B=_=>{for(t in _)this[t[0]+t[6]]=t};B(N=new AudioContext);B(O=N[cO](L=localStorage));O.connect(N[da]);A=a.cloneNode(a.width=W=1920,a.height=H=1080);B(C=A.getContext`2d`);h=L[d=1]|0;setInterval(_=>{c.font='4em"';C[fy]='#456';C[F=fc](0,R={valueOf:Math.random},I=10,H);C[F](0,0,W,Z=150);C[fy]='#000';if(d)C[F](l=s=d=0,k=[b=[]],W,H),e=y=M=540,L[f=1]=h,c[sC]=C[sC]=`hsl(${R*(K=200)},100%,50%)`;h=(s+=I)>h?s:h;f+=f<2&&!(s%5e3)/I;C[sO]=R*4-2<<3;C.fill(new Path2D(`M0 ${K*f+R*Z} l10 ${R*K-(J=100)} v${900-K*f} l-10 ${R*K-J}`));C[da](A,I,0);c[da](A,0,0);onkeydown=onkeyup=_=>(k[t=_.which]=!!_.type[5])||O.start(l=(t==32&&e>50)*5);y+=e?(g=0,k[90]?5:k[65]?-5:0):++g;R>.98&&b.push({x:0,y:400+R*M});b.forEach(t=>c[fx]('🦇',t.x+=15*f-R*18+l*!((t.y-y)**2>>9)*W,t.y+=9-R*18));d=c[gg](H,y-53,I,60).data.some((t,i)=>!(i%4)&&t);c[sO]=R*9*(r=y>735);c[fx]('🛸',H,y+r*R*6-3);O[fn].value=K*l||R*(r?400:J);c[fy]=c[sC];c[F](C[sO]=c[sO]=0,d?0:y-20,d?W:H,d?H:l&&l--);c[F](Z,50,e+=(e<M)*r*3-!!e-l*4,50);c[fx]('⚡ 👽'+s+' 🥇'+h,650,J)},16)
</script>


### Features:

- Full HD resolution graphics running at 60fps
- Increasing difficulty - cave gets narrower and bats become more aggressive over time
- Minimalistic sound effects
- Random colored crystals on every run
- Persistent high score, saved on your browser's local storage

### Source code:

```
B=_=>{for(t in _)this[t[0]+t[6]]=t};B(N=new AudioContext);B(O=N[cO](L=localStorage));O.connect(N[da]);A=a.cloneNode(a.width=W=1920,a.height=H=1080);B(C=A.getContext`2d`);h=L[d=1]|0;setInterval(_=>{c.font='4em"';C[fy]='#456';C[F=fc](0,R={valueOf:Math.random},I=10,H);C[F](0,0,W,Z=150);C[fy]='#000';if(d)C[F](l=s=d=0,k=[b=[]],W,H),e=y=M=540,L[f=1]=h,c[sC]=C[sC]=`hsl(${R*(K=200)},100%,50%)`;h=(s+=I)>h?s:h;f+=f<2&&!(s%5e3)/I;C[sO]=R*4-2<<3;C.fill(new Path2D(`M0 ${K*f+R*Z} l10 ${R*K-(J=100)} v${900-K*f} l-10 ${R*K-J}`));C[da](A,I,0);c[da](A,0,0);onkeydown=onkeyup=_=>(k[t=_.which]=!!_.type[5])||O.start(l=(t==32&&e>50)*5);y+=e?(g=0,k[90]?5:k[65]?-5:0):++g;R>.98&&b.push({x:0,y:400+R*M});b.forEach(t=>c[fx]('🦇',t.x+=15*f-R*18+l*!((t.y-y)**2>>9)*W,t.y+=9-R*18));d=c[gg](H,y-53,I,60).data.some((t,i)=>!(i%4)&&t);c[sO]=R*9*(r=y>735);c[fx]('🛸',H,y+r*R*6-3);O[fn].value=K*l||R*(r?400:J);c[fy]=c[sC];c[F](C[sO]=c[sO]=0,d?0:y-20,d?W:H,d?H:l&&l--);c[F](Z,50,e+=(e<M)*r*3-!!e-l*4,50);c[fx]('⚡ 👽'+s+' 🥇'+h,650,J)},16)
```

> The game code runs on the [JS1k shim](https://js1k.com/2019-x/shim.html), which provides the basic HTML and a few global variables.