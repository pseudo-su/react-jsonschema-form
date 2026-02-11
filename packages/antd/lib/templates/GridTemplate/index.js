import { jsx as _jsx } from "react/jsx-runtime";
import { Col, Row } from 'antd';
/** Renders a `GridTemplate` for antd, which is expecting the column sizing information coming in via the
 * extra props provided by the caller, which are spread directly on the `Row`/`Col`.
 *
 * @param props - The GridTemplateProps, including the extra props containing the antd grid positioning details
 */
export default function GridTemplate(props) {
    const { children, column, ...rest } = props;
    if (column) {
        return _jsx(Col, { ...rest, children: children });
    }
    return _jsx(Row, { ...rest, children: children });
}
//# sourceMappingURL=index.js.map