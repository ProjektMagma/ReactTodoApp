export type TextBoxProps = {
    value: string
    onChangeCallback: (value: string) => void
    placeholder?: string
}


export default function TextBox(
    {value, onChangeCallback, placeholder = ''}: TextBoxProps
) {
    return (
        <input type="text"
               className="shadow appearance-none border rounded w-1/3 py-2 px-3 m-2 text-gray-700 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline"
               value={value}
               onChange={(e) => onChangeCallback(e.target.value)}
               placeholder={placeholder}
        />
    )
}
