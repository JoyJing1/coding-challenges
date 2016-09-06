// Find the intersection of two linked lists

function intersection(link1, link2) {
  const len1 = length(link1);
  const len2 = length(link2);
  let p1 = link1;
  let p2 = link2;

  if (len1 > len2) {
    for (let i = 0; i < len1 - len2; i++) { p1 = p1.next; }
  } else {
    for (let i = 0; i < len2 - len1; i++) { p2 = p2.next; }
  }

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
}


function length(link) {
  let len = 1;

  while (link.next !== undefined) {
    len += 1;
    link = link.next;
  }
  return len;
}
