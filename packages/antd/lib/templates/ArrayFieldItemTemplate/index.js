import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Col, Row, Space } from 'antd';
import { getUiOptions, getTemplate, } from '@rjsf/utils';
const BTN_GRP_STYLE = {
    width: '100%',
    justifyContent: 'flex-end',
};
const BTN_STYLE = {
    width: 'calc(100% / 4)',
};
/** The `ArrayFieldItemTemplate` component is the template used to render an items of an array.
 *
 * @param props - The `ArrayFieldItemTemplateProps` props for the component
 */
export default function ArrayFieldItemTemplate(props) {
    const { children, buttonsProps, displayLabel, hasDescription, hasToolbar, index, registry, uiSchema } = props;
    const uiOptions = getUiOptions(uiSchema);
    const ArrayFieldItemButtonsTemplate = getTemplate('ArrayFieldItemButtonsTemplate', registry, uiOptions);
    const { rowGutter = 24, toolbarAlign = displayLabel ? 'middle' : 'top' } = registry.formContext;
    const margin = hasDescription ? -8 : 16;
    return (_jsxs(Row, { align: toolbarAlign, gutter: rowGutter, children: [_jsx(Col, { flex: '1', children: children }), hasToolbar && (_jsx(Col, { flex: '120px', style: { marginTop: displayLabel ? `${margin}px` : undefined }, children: _jsx(Space.Compact, { style: BTN_GRP_STYLE, children: _jsx(ArrayFieldItemButtonsTemplate, { ...buttonsProps, style: BTN_STYLE }) }) }))] }, `rjsf-array-item-${index}`));
}
//# sourceMappingURL=index.js.map