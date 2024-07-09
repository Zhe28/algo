// 单项链表
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(x: number) {
    this.val = x;
    this.next = null;
  }
}

function createLinkedList(nums: number[]): ListNode | null {
  if (nums === null || nums.length === 0) return null;

  const head = new ListNode(nums[0]);
  let current = head;

  for (let i = 1; i < nums.length; i++) {
    current.next = new ListNode(nums[i]);
    current = current.next;
  }
  return head;
}

export { ListNode, createLinkedList };
