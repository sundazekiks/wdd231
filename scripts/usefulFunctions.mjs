
export const capitalize = (data) => {
    const dataArray = data.split(' ')
    if(dataArray.length > 1){
        for (let i = 0; i < dataArray.length; i++) {
            dataArray[i] = dataArray[i].charAt(0).toUpperCase() + dataArray[i].slice(1);
        }
        return dataArray.join(' ');
    } else {
        return data.charAt(0).toUpperCase() + data.slice(1);
    }
}