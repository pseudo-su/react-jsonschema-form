import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import classNames from 'classnames';
import { Col, Divider, Row, ConfigProvider } from 'antd';
import { useContext } from 'react';
/** The `TitleField` is the template to use to render the title of a field
 *
 * @param props - The `TitleFieldProps` for this component
 */
export default function TitleField({ id, required, registry, title, optionalDataControl, }) {
    const { formContext } = registry;
    const { colon = true } = formContext;
    let labelChildren = title;
    if (colon && typeof title === 'string' && title.trim() !== '') {
        labelChildren = title.replace(/[：:]\s*$/, '');
    }
    const handleLabelClick = () => {
        if (!id) {
            return;
        }
        const control = document.querySelector(`[id="${id}"]`);
        if (control && control.focus) {
            control.focus();
        }
    };
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('form');
    const labelClassName = classNames({
        [`${prefixCls}-item-required`]: required,
        [`${prefixCls}-item-no-colon`]: !colon,
    });
    let heading = title ? (_jsx("label", { className: labelClassName, htmlFor: id, onClick: handleLabelClick, title: typeof title === 'string' ? title : '', children: labelChildren })) : null;
    if (optionalDataControl) {
        heading = (_jsxs(Row, { children: [_jsx(Col, { flex: 'auto', children: heading }), _jsx(Col, { flex: 'none', children: optionalDataControl })] }));
    }
    return (_jsxs(_Fragment, { children: [heading, _jsx(Divider, { size: 'small', style: { marginBlock: '1px' /* pull the margin right up against the label */ } })] }));
}
//# sourceMappingURL=index.js.map