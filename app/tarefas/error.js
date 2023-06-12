'use client'
export default function TarefaErro({error}) {
    return (
        <h1>{error.message}</h1>
    )
}