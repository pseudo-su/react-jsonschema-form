import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Col, Row, Form, Input } from 'antd';
import { ADDITIONAL_PROPERTY_FLAG, UI_OPTIONS_KEY, TranslatableString, buttonId, } from '@rjsf/utils';
const VERTICAL_LABEL_COL = { span: 24 };
const VERTICAL_WRAPPER_COL = { span: 24 };
const INPUT_STYLE = {
    width: '100%',
};
/** The `WrapIfAdditional` component is used by the `FieldTemplate` to rename, or remove properties that are
 * part of an `additionalProperties` part of a schema.
 *
 * @param props - The `WrapIfAdditionalProps` for this component
 */
export default function WrapIfAdditionalTemplate(props) {
    const { children, classNames, style, disabled, displayLabel, id, label, onRemoveProperty, onKeyRenameBlur, readonly, required, registry, schema, uiSchema, } = props;
    const { colon, labelCol = VERTICAL_LABEL_COL, readonlyAsDisabled = true, rowGutter = 24, toolbarAlign = 'top', wrapperCol = VERTICAL_WRAPPER_COL, wrapperStyle, } = registry.formContext;
    const { templates, translateString } = registry;
    // Button templates are not overridden in the uiSchema
    const { RemoveButton } = templates.ButtonTemplates;
    const keyLabel = translateString(TranslatableString.KeyLabel, [label]);
    const additional = ADDITIONAL_PROPERTY_FLAG in schema;
    if (!additional) {
        return (_jsx("div", { className: classNames, style: style, children: children }));
    }
    // The `block` prop is not part of the `IconButtonProps` defined in the template, so put it into the uiSchema instead
    const uiOptions = uiSchema ? uiSchema[UI_OPTIONS_KEY] : {};
    const buttonUiOptions = {
        ...uiSchema,
        [UI_OPTIONS_KEY]: { ...uiOptions, block: true },
    };
    return (_jsx("div", { className: classNames, style: style, children: _jsxs(Row, { align: toolbarAlign, gutter: rowGutter, children: [_jsx(Col, { className: 'form-additional', flex: '1', children: _jsx("div", { className: 'form-group', children: _jsx(Form.Item, { colon: colon, className: 'form-group', hasFeedback: true, htmlFor: `${id}-key`, label: displayLabel ? keyLabel : undefined, labelCol: labelCol, required: required, style: wrapperStyle, wrapperCol: wrapperCol, children: _jsx(Input, { className: 'form-control', defaultValue: label, disabled: disabled || (readonlyAsDisabled && readonly), id: `${id}-key`, name: `${id}-key`, onBlur: !readonly ? onKeyRenameBlur : undefined, style: INPUT_STYLE, type: 'text' }) }) }) }), _jsx(Col, { className: 'form-additional', flex: '1', children: children }), _jsx(Col, { flex: '120px', style: { marginTop: displayLabel ? '40px' : undefined }, children: _jsx(RemoveButton, { id: buttonId(id, 'remove'), className: 'rjsf-object-property-remove', disabled: disabled || readonly, onClick: onRemoveProperty, uiSchema: buttonUiOptions, registry: registry }) })] }) }));
}
//# sourceMappingURL=index.js.map