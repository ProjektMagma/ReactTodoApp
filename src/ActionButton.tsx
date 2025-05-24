type ActionButtonProps = {
    text: string
    onClick: () => void
}

export default function ActionButton(
    {text, onClick}: ActionButtonProps
) {
    return (
        <input type="button"
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
               onClick={onClick}
               value={text}
        />
    )
}
