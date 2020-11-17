let vid;
let playing = true;

function setup() {
  createCanvas(400, 400);
  // noCanvas();

  vid = createVideo("earth.mp4");
  vid.size(400, 400);
  vid.volume(0);
  vid.loop();
  vid.hide(); // hides the html video loader
  // vid.position(0.0);
  let s = 'The quick brown fox jumped over the lazy dog.';
fill(50);
text(s, 10, 10, 70, 80); // Text wraps within text box

}

function draw() {
  background(220);
  let img = vid.get();
  image(img, 0, 0); // redraws the video frame by frame in   
}

