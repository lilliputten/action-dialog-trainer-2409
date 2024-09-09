import React from 'react';

import { useResizeObserver } from './useResizeObserver';

export function useContainerSize<T extends HTMLElement>() {
  // Container width
  const [width, setWidth] = React.useState<number | undefined>();
  const [height, setHeight] = React.useState<number | undefined>();
  // Resize handler to update container width...
  const onResize = React.useCallback((domNode: T) => {
    // Update width...
    setWidth(domNode.offsetWidth);
    setHeight(domNode.offsetHeight);
  }, []);
  const ref = useResizeObserver<T>(onResize);
  // Initialize container width...
  React.useEffect(() => {
    const domNode = ref.current;
    if (domNode) {
      setWidth(domNode.offsetWidth);
      setHeight(domNode.offsetHeight);
    }
  }, [ref]);
  // Memoized result...
  return React.useMemo(() => ({ ref, width, height }), [ref, width, height]);
}
