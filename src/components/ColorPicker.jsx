import { forwardRef } from "react"

export const ColorPicker = forwardRef(function ColorPicker({style}, ref) {
    return (
        <div>
            <input
                type="text"
                ref={ref}
                style={style}
            />
        </div>
    )
})
