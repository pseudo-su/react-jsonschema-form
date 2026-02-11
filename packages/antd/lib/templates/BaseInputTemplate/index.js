import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from 'react';
import { Input, InputNumber } from 'antd';
import { ariaDescribedByIds, examplesId, getInputProps, } from '@rjsf/utils';
// import { SchemaExamples } from '@rjsf/core';
const INPUT_STYLE = {
    width: '100%',
};
/** The `BaseInputTemplate` is the template to use to render the basic `<input>` component for the `core` theme.
 * It is used as the template for rendering many of the <input> based widgets that differ by `type` and callbacks only.
 * It can be customized/overridden for other themes or individual implementations as needed.
 *
 * @param props - The `WidgetProps` for this template
 */
export default function BaseInputTemplate(props) {
    const { disabled, registry, id, htmlName, onBlur, onChange, onChangeOverride, onFocus, options, placeholder, readonly, schema, value, type, } = props;
    const { formContext } = registry;
    // InputNumber doesn't use a native <input type="number"> directly - it wraps it and controls the stepping behavior
    // through its own props. The step prop in Ant Design expects a number, not the string "any"
    const inputProps = getInputProps(schema, type, options, false);
    const { readonlyAsDisabled = true } = formContext;
    const { ClearButton } = registry.templates.ButtonTemplates;
    const handleNumberChange = (nextValue) => onChange(nextValue);
    const handleTextChange = onChangeOverride
        ? onChangeOverride
        : ({ target }) => onChange(target.value === '' ? options.emptyValue : target.value);
    const handleBlur = ({ target }) => onBlur(id, target && target.value);
    const handleFocus = ({ target }) => onFocus(id, target && target.value);
    const handleClear = useCallback((e) => {
        var _a;
        e.preventDefault();
        e.stopPropagation();
        onChange((_a = options.emptyValue) !== null && _a !== void 0 ? _a : '');
    }, [onChange, options.emptyValue]);
    const input = inputProps.type === 'number' || inputProps.type === 'integer' ? (_jsx(InputNumber, { disabled: disabled || (readonlyAsDisabled && readonly), id: id, name: htmlName || id, onBlur: !readonly ? handleBlur : undefined, onChange: !readonly ? handleNumberChange : undefined, onFocus: !readonly ? handleFocus : undefined, placeholder: placeholder, style: INPUT_STYLE, list: schema.examples ? examplesId(id) : undefined, ...inputProps, value: value, "aria-describedby": ariaDescribedByIds(id, !!schema.examples) })) : (_jsx(Input, { disabled: disabled || (readonlyAsDisabled && readonly), id: id, name: htmlName || id, onBlur: !readonly ? handleBlur : undefined, onChange: !readonly ? handleTextChange : undefined, onFocus: !readonly ? handleFocus : undefined, placeholder: placeholder, style: INPUT_STYLE, list: schema.examples ? examplesId(id) : undefined, ...inputProps, value: value, "aria-describedby": ariaDescribedByIds(id, !!schema.examples) }));
    return (_jsxs(_Fragment, { children: [input, options.allowClearTextInputs && !readonly && !disabled && value && (_jsx(ClearButton, { registry: registry, onClick: handleClear }))] }));
}
//# sourceMappingURL=index.js.map