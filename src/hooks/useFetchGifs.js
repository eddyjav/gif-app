import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState(
        {
            data:[],
            loading: true
        }
    );      
    //comen

    useEffect( ()=>{
        getGifs( category )
            .then( imgs => {               
                    console.log(imgs)
                    setState({
                        data: imgs,
                        loading: false
                    })       
            })
            //.then(setImages)
    }, [category])


    return state; //{ data:[], loading:true };

}