let submit = document.querySelector("button");
let letterBox = document.querySelector(".letter-container");
let input = document.querySelector("input");
let incorrectAnswer = document.querySelector(".wrong-letter-container");
let wrongBox = document.querySelector("#h1-title");
let guessTitle = document.querySelector("#guess-h1");
let guessCounter = document.querySelector(".guess-counter");
let counter = 10;

// random word chosen
let randomWords = [
  "apple",
  "personalcomputer",
  "html",
  "javascript",
  "styling",
  "frustration",
  "pain",
  "sleepdeprived"
];

// the word that was chosen
// let wordInPlay = [];
var randomItem = randomWords[Math.floor(Math.random() * randomWords.length)];
// the splitting of the chosen word into an array
wordInPlay = randomItem.split("");
console.log(wordInPlay);
// chosen word turned into hyphens
let wordLength = wordInPlay.length;
console.log(wordLength);

function blankDivs() {
  for (let i = 0; i < wordLength; i++) {
    let letterBlank = document.createElement("div");
    letterBlank.classList.add("blank-style");
    console.dir(letterBlank);
    letterBox.appendChild(letterBlank);
  }
  blankLetters = document.querySelectorAll(".blank-style");
  for (let y = 0; y < wordLength; y++) {
    blankLetters[y].innerText = wordInPlay[y];
  }
}
blankDivs();

// border bottom to divs created in order to display the underscore for the letters
// find div to corresoping letter and then add that letter to div

// chosen letter from letters array
let singleLetter;
// wrong letters chosen get pushed to the wrong letters array and then displayed in html
// this is so that when a wrong letter is placed in box it does not get placed more than once
let wrongLetters = new Set();

// when you hit submit you input what you typed in into the innerHTML of the
// div box
let value;
let item;
submit.addEventListener("click", submitLetter);
let correctLetter = false;

function submitLetter(e) {
  // -->> THIS RUNS EVERYTIME YOU CLICK THE BUTTON.
  e.preventDefault(); // --> PREVENTS REFRESH.
  singleLetter = input.value[0];
  correctLetter = false;
  console.log(singleLetter);

  blankLetters.forEach((letter, i) => {
    // console.dir(letter);
    if (singleLetter == letter.innerText) {
      letter.style.fontSize = "40px";
      letter.classList.add("correct");
      letter.style.textTransform = "uppercase";
      input.value = "";
      correctLetter = true;
      wordBankValidator(blankLetters, document.querySelectorAll(".correct"));
      //
    } else if (i == blankLetters.length - 1 && correctLetter == false) {
      //this is so that the last inputted letter is then placed in the correct box
      wrongBox.style.opacity = "1";
      guessTitle.style.opacity = "1";
      counter -= 1;
      guessCounter.innerText = counter;

      wrongLetters.add(singleLetter);
      loser();
      value = "";

      // this allows the values of set object to be shown
      for (item of wrongLetters.values()) {
        value += item + " ";
      }
      incorrectAnswer.innerText = value;
      input.value = "";
    }
  });
}
//
const loser = () => {
  if (counter === 0) {
    alert("LOSER");
  }
};

const wordBankValidator = (word, answered) => {
  // --> word: array of the word
  if (word.length === answered.length) {
    let body = document.querySelector("body");
    body.insertAdjacentHTML("afterbegin", "<canvas id=c></canvas>");
    var gl = c.getContext("webgl", { preserveDrawingBuffer: true }),
      w = (c.width = window.innerWidth),
      h = (c.height = window.innerHeight),
      webgl = {},
      opts = {
        projectileAlpha: 0.8,
        projectileLineWidth: 1.3,
        fireworkAngleSpan: 0.5,
        baseFireworkVel: 3,
        addedFireworkVel: 3,
        gravity: 0.03,
        lowVelBoundary: -0.2,
        xFriction: 0.995,
        baseShardVel: 1,
        addedShardVel: 0.2,
        fireworks: 1000,
        baseShardsParFirework: 10,
        addedShardsParFirework: 10,
        shardFireworkVelMultiplier: 0.3,
        initHueMultiplier: 1 / 360,
        runHueAdder: 0.1 / 360
      };

    webgl.vertexShaderSource = `
uniform int u_mode;
uniform vec2 u_res;
attribute vec4 a_data;
varying vec4 v_color;

vec3 h2rgb( float h ){
	return clamp( abs( mod( h * 6. + vec3( 0, 4, 2 ), 6. ) - 3. ) -1., 0., 1. );
}
void clear(){
	gl_Position = vec4( a_data.xy, 0, 1 );
	v_color = vec4( 0, 0, 0, a_data.w );
}
void draw(){
	gl_Position = vec4( vec2( 1, -1 ) * ( ( a_data.xy / u_res ) * 2. - 1. ), 0, 1 );
	v_color = vec4( h2rgb( a_data.z ), a_data.w );
}
void main(){
	if( u_mode == 0 )
		draw();
	else
		clear();
}
`;
    webgl.fragmentShaderSource = `
precision mediump float;
varying vec4 v_color;

void main(){
	gl_FragColor = v_color;
}
`;

    webgl.vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(webgl.vertexShader, webgl.vertexShaderSource);
    gl.compileShader(webgl.vertexShader);

    webgl.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(webgl.fragmentShader, webgl.fragmentShaderSource);
    gl.compileShader(webgl.fragmentShader);

    webgl.shaderProgram = gl.createProgram();
    gl.attachShader(webgl.shaderProgram, webgl.vertexShader);
    gl.attachShader(webgl.shaderProgram, webgl.fragmentShader);

    gl.linkProgram(webgl.shaderProgram);
    gl.useProgram(webgl.shaderProgram);

    webgl.dataAttribLoc = gl.getAttribLocation(webgl.shaderProgram, "a_data");
    webgl.dataBuffer = gl.createBuffer();

    gl.enableVertexAttribArray(webgl.dataAttribLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, webgl.dataBuffer);
    gl.vertexAttribPointer(webgl.dataAttribLoc, 4, gl.FLOAT, false, 0, 0);

    webgl.resUniformLoc = gl.getUniformLocation(webgl.shaderProgram, "u_res");
    webgl.modeUniformLoc = gl.getUniformLocation(webgl.shaderProgram, "u_mode");

    gl.viewport(0, 0, w, h);
    gl.uniform2f(webgl.resUniformLoc, w, h);

    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.enable(gl.BLEND);

    gl.lineWidth(opts.projectileLineWidth);

    webgl.data = [];

    webgl.clear = function() {
      gl.uniform1i(webgl.modeUniformLoc, 1);
      var a = 0.1;
      webgl.data = [
        -1,
        -1,
        0,
        a,
        1,
        -1,
        0,
        a,
        -1,
        1,
        0,
        a,
        -1,
        1,
        0,
        a,
        1,
        -1,
        0,
        a,
        1,
        1,
        0,
        a
      ];
      webgl.draw(gl.TRIANGLES);
      gl.uniform1i(webgl.modeUniformLoc, 0);
      webgl.data.length = 0;
    };
    webgl.draw = function(glType) {
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(webgl.data),
        gl.STATIC_DRAW
      );
      gl.drawArrays(glType, 0, webgl.data.length / 4);
    };

    var fireworks = [],
      tick = 0,
      sins = [],
      coss = [],
      maxShardsParFirework =
        opts.baseShardsParFirework + opts.addedShardsParFirework,
      tau = 6.283185307179586476925286766559;

    for (var i = 0; i < maxShardsParFirework; ++i) {
      sins[i] = Math.sin((tau * i) / maxShardsParFirework);
      coss[i] = Math.cos((tau * i) / maxShardsParFirework);
    }

    function Firework() {
      this.reset();
      this.shards = [];
      for (var i = 0; i < maxShardsParFirework; ++i)
        this.shards.push(new Shard(this));
    }
    Firework.prototype.reset = function() {
      var angle = -Math.PI / 2 + (Math.random() - 0.5) * opts.fireworkAngleSpan,
        vel = opts.baseFireworkVel + opts.addedFireworkVel * Math.random();

      this.mode = 0;
      this.vx = vel * Math.cos(angle);
      this.vy = vel * Math.sin(angle);

      this.x = Math.random() * w;
      this.y = h;

      this.hue = tick * opts.initHueMultiplier;
    };
    Firework.prototype.step = function() {
      if (this.mode === 0) {
        var ph = this.hue,
          px = this.x,
          py = this.y;

        this.hue += opts.runHueAdder;

        this.x += this.vx *= opts.xFriction;
        this.y += this.vy += opts.gravity;

        webgl.data.push(
          px,
          py,
          ph,
          opts.projectileAlpha * 0.2,
          this.x,
          this.y,
          this.hue,
          opts.projectileAlpha * 0.2
        );

        if (this.vy >= opts.lowVelBoundary) {
          this.mode = 1;

          this.shardAmount =
            (opts.baseShardsParFirework +
              opts.addedShardsParFirework * Math.random()) |
            0;

          var baseAngle = Math.random() * tau,
            x = Math.cos(baseAngle),
            y = Math.sin(baseAngle),
            sin = sins[this.shardAmount],
            cos = coss[this.shardAmount];

          for (var i = 0; i < this.shardAmount; ++i) {
            var vel = opts.baseShardVel + opts.addedShardVel * Math.random();
            this.shards[i].reset(x * vel, y * vel);
            var X = x;
            x = x * cos - y * sin;
            y = y * cos + X * sin;
          }
        }
      } else if (this.mode === 1) {
        this.ph = this.hue;
        this.hue += opts.runHueAdder;

        var allDead = true;
        for (var i = 0; i < this.shardAmount; ++i) {
          var shard = this.shards[i];
          if (!shard.dead) {
            shard.step();
            allDead = false;
          }
        }

        if (allDead) this.reset();
      }
    };
    function Shard(parent) {
      this.parent = parent;
    }
    Shard.prototype.reset = function(vx, vy) {
      this.x = this.parent.x;
      this.y = this.parent.y;
      this.vx = this.parent.vx * opts.shardFireworkVelMultiplier + vx;
      this.vy = this.parent.vy * opts.shardFireworkVelMultiplier + vy;
      this.starty = this.y;
      this.dead = false;
      this.tick = 1;
    };
    Shard.prototype.step = function() {
      this.tick += 0.05;

      var px = this.x,
        py = this.y;

      this.x += this.vx *= opts.xFriction;
      this.y += this.vy += opts.gravity;

      var proportion = 1 - (this.y - this.starty) / (h - this.starty);

      webgl.data.push(
        px,
        py,
        this.parent.ph,
        opts.projectileAlpha / this.tick,
        this.x,
        this.y,
        this.parent.hue,
        opts.projectileAlpha / this.tick
      );

      if (this.y > h) this.dead = true;
    };

    function anim() {
      window.requestAnimationFrame(anim);

      webgl.clear();

      ++tick;

      if (fireworks.length < opts.fireworks) fireworks.push(new Firework());

      fireworks.map(function(firework) {
        firework.step();
      });

      webgl.draw(gl.LINES);
    }
    anim();

    window.addEventListener("resize", function() {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;

      gl.viewport(0, 0, w, h);
      gl.uniform2f(webgl.resUniformLoc, w, h);
    });
    window.addEventListener("click", function(e) {
      var firework = new Firework();
      firework.x = e.clientX;
      firework.y = e.clientY;
      firework.vx = 0;
      firework.vy = 0;
      fireworks.push(firework);
    });
  }
};
