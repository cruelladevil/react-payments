type ElementsMapKey = string | number;

export const useFocus = () => {
  const elements: Map<ElementsMapKey, HTMLElement> = new Map();

  const registerFocusRef = (key: ElementsMapKey) => {
    const ref: React.RefCallback<HTMLElement> = (node) => {
      if (node) {
        elements.set(key, node);
      }
    };
    return { ref };
  };

  const focus = (key: ElementsMapKey) => {
    if (elements.has(key)) {
      elements.get(key)?.focus();
    }
  };

  return { registerFocusRef, focus };
};
