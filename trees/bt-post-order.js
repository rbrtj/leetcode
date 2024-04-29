const binaryTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 8,
        left: null,
        right: null,
      },
      right: {
        val: 9,
        left: null,
        right: null,
      },
    },
    right: {
      val: 5,
      left: {
        val: 10,
        left: null,
        right: null,
      },
      right: {
        val: 11,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: {
        val: 12,
        left: null,
        right: null,
      },
      right: {
        val: 13,
        left: null,
        right: null,
      },
    },
    right: {
      val: 7,
      left: {
        val: 14,
        left: null,
        right: null,
      },
      right: {
        val: 15,
        left: null,
        right: null,
      },
    },
  },
};
function walk(curr, path) {
  if (!curr) return path;
  walk(curr.left, path);
  walk(curr.right, path);
  path.push(curr.val);
  console.log(path);
  return path;
}
const postOrderTraversal = (root) => {
  walk(root, []);
};
postOrderTraversal(binaryTree);
