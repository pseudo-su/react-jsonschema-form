import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col, Button } from 'antd';
import { DateElement, TranslatableString, useAltDateWidgetProps, } from '@rjsf/utils';
export default function AltDateWidget({ autofocus = false, disabled = false, options, readonly = false, time = false, ...props }) {
    const { id, name, onBlur, onFocus, registry } = props;
    const { formContext, translateString } = registry;
    const { rowGutter = 24 } = formContext;
    const realOptions = { yearsRange: [1900, new Date().getFullYear() + 2], ...options };
    const { elements, handleChange, handleClear, handleSetNow } = useAltDateWidgetProps({
        ...props,
        autofocus,
        options: realOptions,
    });
    return (_jsxs(Row, { gutter: [Math.floor(rowGutter / 2), Math.floor(rowGutter / 2)], children: [elements.map((elemProps, i) => {
                const elemId = `${id}_${elemProps.type}`;
                return (_jsx(Col, { flex: '88px', children: _jsx(DateElement, { rootId: id, name: name, select: handleChange, ...elemProps, disabled: disabled, readonly: readonly, registry: registry, onBlur: onBlur, onFocus: onFocus, autofocus: autofocus && i === 0 }) }, elemId));
            }), !options.hideNowButton && (_jsx(Col, { flex: '88px', children: _jsx(Button, { block: true, className: 'btn-now', onClick: handleSetNow, type: 'primary', children: translateString(TranslatableString.NowLabel) }) })), !options.hideClearButton && (_jsx(Col, { flex: '88px', children: _jsx(Button, { block: true, className: 'btn-clear', danger: true, onClick: handleClear, type: 'primary', children: translateString(TranslatableString.ClearLabel) }) }))] }));
}
//# sourceMappingURL=index.js.map