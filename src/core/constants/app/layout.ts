import { Breakpoint } from '@mui/material';

// Adaptive breakpoints...

/** Medium layout treshold: for some elements */
export const mediumLayoutTreshold: Breakpoint = 'md';

/** Mobile layout treshold */
export const mobileLayoutTreshold: Breakpoint = 'sm';

/** Adaptive padding for page elements (to align with app header */
export const adaptivePageXPadding = { xs: 2, [mobileLayoutTreshold]: 3 };

/** Toolbar height */
export const layoutToolbarHeight = 48;
