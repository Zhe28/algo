import { singlyListNode, createSinglyLinkedList } from "..";
import { test, expect } from "vitest";

const source = [1, 2, 3, 4, 5];

test("单链表 SinglyLinkedList", async () => {
	const list = createSinglyLinkedList(source);
	expect(list).toBeInstanceOf(singlyListNode);
	console.log(`insertHeadList-->`);
	const insertHeadList = insertHead(source, 0);
	console.dir(insertHeadList, { depth: null });

	console.log(`insertTailList-->`);
	const insertTailList = insertTail(source, 6);
	console.dir(insertTailList, { depth: null });

	console.dir(insert(source, 2, 6), { depth: null });
});

test("双链表 DoublyLinkedList", async () => {
	// todo: 双链表
});

// 头部插入一个新的节点
function insertHead(source: number[], addon: number) {
	let list = createSinglyLinkedList(source);

	const newHead = new singlyListNode(addon);
	newHead.next = list;
	return newHead;
}
// 尾部插入一个新的节点
function insertTail(source: number[], addon: number) {
	let list = createSinglyLinkedList(source);
	let _list = list;
	// 找到链表的最后一个节点
	while (_list?.next) {
		_list = _list.next;
	}

	_list!.next = new singlyListNode(addon);

	return list;
}

// todo: 链表插入 一个新的节点
// 先寻找前一个元素的指针，指向新的节点，新的节点指向下一个元素
function insert(source: number[], index: number, addon: number) {
	let list = createSinglyLinkedList(source);
	if (list === null) return list;
	let p = list;

	let newNode = new singlyListNode(addon);
	// 找到前置节点指针
	for (let i = 0; i < index; i++) {
		p = p.next!;
	}

	// 将前置节点的下一个指针地址传递到 newNode.next
	newNode.next = p!.next;
	// 把前置节点的下个节点修改成 newNode
	p.next = newNode;

	return list;
}
