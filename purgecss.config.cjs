
module.exports = {
  content: [
    './index.html',
    './assets/maugallery.js',
    './assets/scripts.js'
  ],

  css: [
    './assets/bootstrap/bootstrap.min.css'
  ],

  output: './assets/bootstrap/optimized/',

  safelist: {
    standard: [
      'active',
      'active-tag',
      'img-fluid',
      'show',
      'fade',
      'collapsing'
    ],
    greedy: [
      /^carousel/,
      /^modal/,
      /^collapse/,
      /^navbar/,
      /^dropdown/
    ]
  }
}

