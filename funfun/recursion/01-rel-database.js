const categories = [
  { id: 'animals', parent: null },
  { id: 'mammals', parent: 'animals' },
  { id: 'cats', parent: 'mammals' },
  { id: 'dogs', parent: 'mammals' },
  { id: 'chihuahua', parent: 'dogs' },
  { id: 'labrador', parent: 'dogs' },
  { id: 'persian', parent: 'cats' },
  { id: 'siamese', parent: 'cats' },
];

// const catObj = {
//   animals: {
//     mammals: {
//       dogs: {
//         chihuahua: null,
//         labrador: null,
//       },
//       cats: {
//         persian: null,
//         siamese: null,
//       },
//     },
//   },
// };

let makeTree = (categories, parent) => {
  let node = {};
  categories
    .filter(category => category.parent === parent)
    .forEach(
      category => (node[category.id] = makeTree(categories, category.id))
    );
  return node;
};

console.log(JSON.stringify(makeTree(categories, null), null, 2));
