const books = [
    { title: "O senhor dos Aneis", author: "J.R.R. Tolkien" },
    { title: "Harry Potter", author: "J.K. Rowling" },
    { title: "O poderoso chefão", author: "Mario Puzo" },
    { title: "Nada será como antes", author: "Miguel Nicolelis" },
    { title: "Cemiterio de Dragões", author: "Raphael Draccon" }
]


export async function GET() {
    await new Promise((resolve) => setTimeout(resolve, 500))

    return new Response(JSON.stringify(books), {
        headers: {
            "content-Type": "application/json",
        },

    })
}

export async function POST(request: Request) {
    try {
        const body = await request.json()

        if (!body.title || !body.author) {
            return new Response(JSON.stringify({ _error: "Titulo e autor são obrigatorios" }), {
                status: 400,
                headers: {
                    "content-Type": "application/json",
                },
            })
        }

        const newBook = {
            title: body.title,
            author: body.author,
        }

        books.push(newBook)

        return new Response(JSON.stringify(newBook), {
            status: 201,
            headers: {
                "content-Type": "application/json",
            },
        })
    } catch (_error) {
        return new Response(JSON.stringify({ _error: "Erro ao processar requisição" }), {
            status: 500,
            headers: {
                "content-Type": "application/json",
            },
        })
    }
}

export async function DELETE(request: Request) {
    try {
        const url = new URL(request.url)
        const indexParam = url.searchParams.get("index")
        const index = indexParam ? Number.parseInt(indexParam) : -1


        if (isNaN(index) || index < 0 || index >= books.length) {
            return new Response(JSON.stringify({ _error: "Livro não encontrado" }), {
                status: 404,
                headers: {
                    "content-Type": "application/json",
                },
            })
        }

        const removeBook = books.splice(index, 1)[0]

        return new Response(JSON.stringify(removeBook), {
            headers: {
                    "content-Type": "application/json",
                },
        })

    } catch (_error) {
        return new Response(JSON.stringify({_error: "Erro ao processar a requisição"}), {
            status: 500,
            headers: {
                    "content-Type": "application/json",
                },
        })
    }
}