import ReactDynamicImport from 'react-dynamic-import';

export function dynamicImportRouter(component) {
  const loader = f => import(`../pages/${f}/index.js`);
  return ReactDynamicImport({ name: component, loader });
}
