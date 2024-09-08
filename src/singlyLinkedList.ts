// 单项链表
class singlyListNode {
	val: number;
	next: singlyListNode | null;

	constructor(x: number) {
		this.val = x;
		this.next = null;
	}
}

function createSinglyLinkedList(nums: number[]): singlyListNode | null {
	if (nums === null || nums.length === 0) return null;

	const head = new singlyListNode(nums[0]);
	let current = head;

	for (let i = 1; i < nums.length; i++) {
		current.next = new singlyListNode(nums[i]);
		current = current.next;
	}
	return head;
}

export { singlyListNode, createSinglyLinkedList };
