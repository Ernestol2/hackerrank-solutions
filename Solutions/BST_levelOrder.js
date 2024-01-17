this.levelOrder = function(root) {

	let result = [];

	let queue = [];

	if(root)queue.push(root);

	while(queue.length) {

		let tree = queue.shift();

		result.push(tree.data);

		if(tree.left)queue.push(tree.left);
		if(tree.right)queue.push(tree.right);

	};

	console.log( result.join(" ") );

};