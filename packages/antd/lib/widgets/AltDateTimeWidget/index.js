import { jsx as _jsx } from "react/jsx-runtime";
export default function AltDateTimeWidget({ time = true, ...props }) {
    const { AltDateWidget } = props.registry.widgets;
    return _jsx(AltDateWidget, { time: time, ...props });
}
//# sourceMappingURL=index.js.map