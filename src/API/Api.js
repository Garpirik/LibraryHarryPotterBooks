import axios from "axios";

const instance = axios.create({
    withCredentials : false,
    baseURL : "https://potterapi-fedeperin.vercel.app/en/books",
    // headers:{
    //     "API-KEY" : "d90f918de6c71ba6c8a150491b180191"
    // }
})

export const boredAPi = {
    async book(){
        try{
        const  response =  await instance.get()
        return response.data
        }
        catch(error){
            console.log("error", error)
        }
        // .then(response =>{
        //     return response.data;
        // })
    },
    async getBook(id){
        try{
            const  response = await instance.get()
            return response.data[id]
        }
        catch(error){
            console.log("error",error)
        }
    },
    // properties(work){
    //     return instance.get(`?${work}`)
    // }

}
boredAPi.book().then(title => console.log(title));
// boredAPi.getBook().then(index => index.forEach(el=>{
//     console.log("Hello, index",  index[el.index])
// }));
boredAPi.getBook(2).then(index => console.log("With id" , index))