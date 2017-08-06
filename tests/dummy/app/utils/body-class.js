export default function bodyClass(newClass) {
  const bodyClassList = [
    'demo-1',
    'color-1',
    'color-2',
    'color-3',
    'color-4',
    'color-5',
    'color-6',
    'color-7',
    'color-8'
  ];

  bodyClassList.forEach((c) => document.body.classList.remove(c));
  document.body.classList.add(newClass);

  return true;
}
