const startServer = async() => {
    await connectDB();
    apply.listen (5000, () => 
    {

    })
}


function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Data recoeved');
        }, 2000)
    })
}

async function main(){
    const messgae = await fetchData();
    console.log(messgae)
}
main()