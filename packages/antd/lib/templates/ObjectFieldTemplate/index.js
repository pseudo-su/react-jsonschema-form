import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import isObject from 'lodash-es/isObject.js';
import isNumber from 'lodash-es/isNumber.js';
import isString from 'lodash-es/isString.js';
import { canExpand, getTemplate, getUiOptions, titleId, buttonId, } from '@rjsf/utils';
import { Col, Row, ConfigProvider } from 'antd';
import { useContext } from 'react';
/** The `ObjectFieldTemplate` is the template to use to render all the inner properties of an object along with the
 * title and description if available. If the object is expandable, then an `AddButton` is also rendered after all
 * the properties.
 *
 * @param props - The `ObjectFieldTemplateProps` for this component
 */
export default function ObjectFieldTemplate(props) {
    const { disabled, formData, fieldPathId, onAddProperty, optionalDataControl, properties, readonly, required, registry, schema, title, uiSchema, } = props;
    const uiOptions = getUiOptions(uiSchema);
    const TitleFieldTemplate = getTemplate('TitleFieldTemplate', registry, uiOptions);
    const { formContext } = registry;
    const showOptionalDataControlInTitle = !readonly && !disabled;
    // Button templates are not overridden in the uiSchema
    const { ButtonTemplates: { AddButton }, } = registry.templates;
    const { colSpan = 24, labelAlign = 'right', rowGutter = 24 } = formContext;
    const findSchema = (element) => element.content.props.schema;
    const findSchemaType = (element) => findSchema(element).type;
    const findUiSchema = (element) => element.content.props.uiSchema;
    const findUiSchemaField = (element) => getUiOptions(findUiSchema(element)).field;
    const findUiSchemaWidget = (element) => getUiOptions(findUiSchema(element)).widget;
    const calculateColSpan = (element) => {
        const type = findSchemaType(element);
        const field = findUiSchemaField(element);
        const widget = findUiSchemaWidget(element);
        const defaultColSpan = properties.length < 2 || // Single or no field in object.
            type === 'object' ||
            type === 'array' ||
            widget === 'textarea'
            ? 24
            : 12;
        if (isObject(colSpan)) {
            const colSpanObj = colSpan;
            if (isString(widget)) {
                return colSpanObj[widget];
            }
            if (isString(field)) {
                return colSpanObj[field];
            }
            if (isString(type)) {
                return colSpanObj[type];
            }
        }
        if (isNumber(colSpan)) {
            return colSpan;
        }
        return defaultColSpan;
    };
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('form');
    const labelClsBasic = `${prefixCls}-item-label`;
    const labelColClassName = classNames(labelClsBasic, labelAlign === 'left' && `${labelClsBasic}-left`);
    return (_jsxs("fieldset", { id: fieldPathId.$id, children: [_jsxs(Row, { gutter: rowGutter, children: [title && (_jsx(Col, { className: labelColClassName, span: 24, children: _jsx(TitleFieldTemplate, { id: titleId(fieldPathId), title: title, required: required, schema: schema, uiSchema: uiSchema, registry: registry, optionalDataControl: showOptionalDataControlInTitle ? optionalDataControl : undefined }) })), !showOptionalDataControlInTitle ? _jsx(Col, { span: 24, children: optionalDataControl }) : undefined, properties
                        .filter((e) => !e.hidden)
                        .map((element) => (_jsx(Col, { span: calculateColSpan(element), children: element.content }, element.name)))] }), canExpand(schema, uiSchema, formData) && (_jsx(Col, { span: 24, children: _jsx(Row, { gutter: rowGutter, justify: 'end', children: _jsx(Col, { flex: '120px', children: _jsx(AddButton, { id: buttonId(fieldPathId, 'add'), className: 'rjsf-object-property-expand', disabled: disabled || readonly, onClick: onAddProperty, uiSchema: uiSchema, registry: registry }) }) }) }))] }));
}
//# sourceMappingURL=index.js.map