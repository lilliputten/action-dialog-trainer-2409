import React from 'react';

import { useResizeObserver } from './useResizeObserver';

export function useContainerWidth<T extends HTMLElement>() {
  // Container width
  const [width, setWidth] = React.useState<number | undefined>();
  // Resize handler to update container width...
  const onResize = React.useCallback((domNode: T) => {
    // Update width...
    setWidth(domNode.offsetWidth);
  }, []);
  const ref = useResizeObserver<T>(onResize);
  // Initialize container width...
  React.useEffect(() => {
    const domNode = ref.current;
    if (domNode) {
      const width = domNode.offsetWidth;
      // Set initial width...
      setWidth(width);
    }
  }, [ref]);
  // Memoized result...
  return React.useMemo(() => ({ ref, width }), [ref, width]);
}
