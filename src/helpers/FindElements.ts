export const findElements = (string: string, array: string[]) => {
  const elements = [];

  for (const element of array) {
    const index = string.toLowerCase().indexOf(element);
    if (index > -1) {
      elements.push({
        before: string.slice(0, index),
        element: element,
        after: string.slice(index + element.length),
      });
    }
  }

  return elements[0];
};
