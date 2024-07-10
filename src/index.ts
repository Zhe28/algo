// 单项链表
class listNode {
  val: number;
  next: listNode | null;

  constructor(x: number) {
    this.val = x;
    this.next = null;
  }
}

function createLinkedList(nums: number[]): listNode | null {
  if (nums === null || nums.length === 0) return null;

  const head = new listNode(nums[0]);
  let current = head;

  for (let i = 1; i < nums.length; i++) {
    current.next = new listNode(nums[i]);
    current = current.next;
  }
  return head;
}

export { listNode, createLinkedList };
