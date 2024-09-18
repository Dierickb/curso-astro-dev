export const idError = (id: string) => {
    return {
        success: false,
        flight_number: -1,
        links: {patch: {small: "https://midu.dev/images/this-is-fine-404.gif"}},
        id: id,
        details: "El id solicitado no existe"
    }
}