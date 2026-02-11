import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTemplate, getUiOptions, buttonId, } from '@rjsf/utils';
import classNames from 'classnames';
import { Col, Row, ConfigProvider } from 'antd';
import { useContext } from 'react';
/** The `ArrayFieldTemplate` component is the template used to render all items in an array.
 *
 * @param props - The `ArrayFieldTemplateProps` props for the component
 */
export default function ArrayFieldTemplate(props) {
    const { canAdd, className, disabled, fieldPathId, items, optionalDataControl, onAddClick, readonly, registry, required, schema, title, uiSchema, } = props;
    const uiOptions = getUiOptions(uiSchema);
    const ArrayFieldTitleTemplate = getTemplate('ArrayFieldTitleTemplate', registry, uiOptions);
    const showOptionalDataControlInTitle = !readonly && !disabled;
    const { formContext } = registry;
    // Button templates are not overridden in the uiSchema
    const { ButtonTemplates: { AddButton }, } = registry.templates;
    const { labelAlign = 'right', rowGutter = 24 } = formContext;
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('form');
    const labelClsBasic = `${prefixCls}-item-label`;
    const labelColClassName = classNames(labelClsBasic, labelAlign === 'left' && `${labelClsBasic}-left`);
    return (_jsx("fieldset", { className: className, id: fieldPathId.$id, children: _jsxs(Row, { gutter: rowGutter, children: [(uiOptions.title || title) && (_jsx(Col, { className: labelColClassName, span: 24, children: _jsx(ArrayFieldTitleTemplate, { fieldPathId: fieldPathId, required: required, title: uiOptions.title || title, schema: schema, uiSchema: uiSchema, registry: registry, optionalDataControl: showOptionalDataControlInTitle ? optionalDataControl : undefined }) })), _jsxs(Col, { className: 'row array-item-list', span: 24, children: [!showOptionalDataControlInTitle ? optionalDataControl : undefined, items] }), canAdd && (_jsx(Col, { span: 24, children: _jsx(Row, { gutter: rowGutter, justify: 'end', children: _jsx(Col, { flex: '120px', children: _jsx(AddButton, { id: buttonId(fieldPathId, 'add'), className: 'rjsf-array-item-add', disabled: disabled || readonly, onClick: onAddClick, uiSchema: uiSchema, registry: registry }) }) }) }))] }) }));
}
//# sourceMappingURL=index.js.map