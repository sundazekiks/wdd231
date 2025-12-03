export const data = async () => {
    try {
        const res = await fetch("https://raw.githubusercontent.com/sundazekiks/wdd231/refs/heads/main/final/data/data.json");
        const datus = await res.json();

        return datus;

    }catch(err){
        console.error(`Data not found ${err}`)
    }
}