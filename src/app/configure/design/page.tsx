interface PageProps{
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

const Page = async ({searchParams}: PageProps) => {
    // make db call 
    const {id} = searchParams
    return <p>hi</p>
}
 
export default Page