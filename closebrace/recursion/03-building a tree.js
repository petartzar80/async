const dogs = [
  [
    'Dogs',
    'https://wikipedia.org/wiki/Dog',
    [
      [
        'Spaniels',
        'https://wikipedia.org/wiki/Spaniels',
        [
          [
            'American Cocker Spaniel',
            'https://wikipedia.org/wiki/American_Cocker_Spaniel',
          ],
          ['Papillon', 'https://wikipedia.org/wiki/Papillon_(dog)'],
        ],
      ],
      [
        'Scent Hounds',
        'https://wikipedia.org/wiki/Scent-hound',
        [
          ['Basset Hound', 'https://wikipedia.org/wiki/Basset-Hound'],
          ['Dachshund', 'https://wikipedia.org/wiki/Dachshund'],
        ],
      ],
    ],
  ],
];

const buildTree = data => {
  // Open this level's <ul>
  let html = '<ul>';

  // Loop through the array of data.
  // At the "dogs" level this length is one
  // At the next level, it's two: spaniels and scent hounds
  // At the next level, it's also two. For example, American Cocker Spaniel and Papillon
  for (let i = 0; i < data.length; i++) {
    // The children array is always in position 2
    let children = data[i][2];

    // Build our <li> and <a> tags
    html += '<li><a href="' + data[i][1] + '">';
    html += data[i][0] + '</a>';

    // Don't close the <li> if there's data in the children array. Instead, recurse the function
    if (children) {
      // Note how we're adding ALL of the returned HTML from the recursive function to this iteration's html string
      html += buildTree(children);
    }

    // Now that all children have been accounted for, close this level's <li>
    html += '</li>';
  }

  // close this level's <ul>
  html += '</ul>';

  // Return the complete HTML
  return html;
};

document.getElementById('dogs').innerHTML = buildTree(dogs);
