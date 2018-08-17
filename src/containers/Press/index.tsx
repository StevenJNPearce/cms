/*
 * this file imports the blog component and exports it with route data
 *
 * why do this? running the component through withRouteData() causes tons of
 * issues with enzyme test code. the vanilla component is imported for testing
 * directly from ./Blog.tsx and fed custom testing props, while this version is
 * imported for use in the app.
 */
import { withRouteData } from 'react-static';
import Press from './Press';

export default withRouteData(Press);
