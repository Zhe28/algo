import { ListNode, createLinkedList } from "..";
import { test, expect } from "vitest";

const source = [1, 2, 3, 4, 5];

test("singleChain", async () => {
  const list = createLinkedList(source);
  expect(list).toBeInstanceOf(ListNode);
  console.log(`insertHeadList-->`);
  const insertHeadList = insertHead(source, 0);
  console.dir(insertHeadList, { depth: null });

  console.log(`insertTailList-->`);
  const insertTailList = insertTail(source, 6);
  console.dir(insertTailList, { depth: null });
});

// 头部插入一个新的节点
function insertHead(source: number[], addon: number) {
  let list = createLinkedList(source);

  const newHead = new ListNode(addon);
  newHead.next = list;
  return newHead;
}
// 尾部插入一个新的节点
function insertTail(source: number[], addon: number) {
  let list = createLinkedList(source);
  let _list = list;
  // 找到链表的最后一个节点
  while (_list?.next) {
    _list = _list.next;
  }

  _list!.next = new ListNode(addon);

  return list;
}

function insert(source: number[], index: number, addon: number) {
  let list = createLinkedList(source);
  let p = list;

  for (let i = 0; i < index; i++) {
    p = p!.next;
  }
}
