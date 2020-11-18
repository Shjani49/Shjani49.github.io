const config = {
    colors: 'adele',
    fonts: 'heron',
    transition: 'fadeIn',
    controllers: {
      fullscreen: true,
      focus: true,
      swiper: true,
      markdown: true,
      preload: true,
      pagenum: true,
      progressbar: true,
      consoleNotes: {
        clear: true
      }
    },
    modules: {
      highlightjs: 'gradient-dark'
    },
    scenes: [
      {
        blocks: [
          {
            textVar: 'title',
            scale: 3.5,
            type: 'text',
            text: `<h1>Hello <b>Shivani &#128522;</b></h1>
              <p>press <mark>f</mark> to go fullscreen</p>
              <p><small>(How are guys!)</small></p>
            `
          }
        ],
        colorVar: 'sec',
        notes: 'Welcome to all our guests!'
      },
      {
        blocks: [
          {
            textVar: 'title',
            type: 'text',
            text: '<h2>Information About Covid-19</h2>'
          }
        ],
        colorVar: 'main',
        notes: 'This is the second slide, can you believe it?'
      },
      {
        blocks: [
          {
            textVar: 'text',
            type: 'text',
            step: 'li',
            responsive: true,
            text: `<h1>Covid-19 Facts</h1>
                    <h2>Symptoms of human coronaviruses can:</h2>
            <ul>
            <li>take up to 14 days to appear after exposure to the virus</li>
            <li>be very mild or more serious</li>
            <li>vary from person to person</li>
            </ul>
            <h2> Coronaviruses are most commonly spread from an infected person through:</h2>
            <ul>
                <li>respiratory droplets when you cough or sneeze</li>
                <li>close personal contact, such as touching or shaking hands</li>
                <li>touching something with the virus on it, then touching your eyes, nose or mouth before washing your hands</li>
            </ul>`
          },
          {
            type: "embed",
            url: 'https://shjani49.github.io/VideoJs/',
            autoplay: true,
            responsive: true,
          }
        ],
        notes: `I have a lot of things to say such as:
  
  First sentence
  
  Second sentence
  `
      },
      {
        blocks: [
          {
            textVar: 'text',
            type: 'text',
            step: 'li',
            responsive: true,
            text: `<h1>Covid-19 Facts</h1>
                    <h2>Symptoms of human coronaviruses can:</h2>
            <ul>
            <li>take up to 14 days to appear after exposure to the virus</li>
            <li>be very mild or more serious</li>
            <li>vary from person to person</li>
            </ul>
            <h2> Coronaviruses are most commonly spread from an infected person through:</h2>
            <ul>
                <li>respiratory droplets when you cough or sneeze</li>
                <li>close personal contact, such as touching or shaking hands</li>
                <li>touching something with the virus on it, then touching your eyes, nose or mouth before washing your hands</li>
            </ul>`,
            textVar: 'title'
          }
        ],
        colorVar: 'main'
      },
      {
        blocks: [
          {
            blockVar: '',
            type: 'embed',
            code: '<iframe src="https://editor.p5js.org/Shjani49/embed/8dcVAsAXV"></iframe>'
          },
          {
            blockVar: '',
            type: 'embed',
            code: '<iframe src="https://editor.p5js.org/Shjani49/embed/J5-cNrUr-"></iframe>'
          }
        ]
      },
      {
        blocks: [
          {
            type: 'text',
            textVar: 'title',
            text: `# The circle changes color when you click on it.
  
  Just edit <mark>config.js &#128522;</mark>`
          },
          {
            blockVar: '',
            type: 'embed',
            code: '<iframe src="https://editor.p5js.org/Shjani49/embed/7BFR8JPZS"></iframe>'
          }
          
        ]
      }
    ]
  }
  