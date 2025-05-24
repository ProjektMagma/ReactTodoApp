export type TodoNoteProps = {
    title: string
    content: string
}

export default function TodoNote(
    {title, content}: TodoNoteProps
) {
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-bold mb-2 break-all">{title}</h2>
            <p className="text-gray-700 text-base break-all">{content}</p>
        </div>
    )
}