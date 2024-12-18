import { useState } from 'react';
import DataContext from './dataContext';

const DataState = (props)=>{

    const host = "https://prime-workers.vercel.app";

    const [data,setData] = useState([]);

    const createData = async (dataitems)=>{
        
        try {
            
            const {title,tagline,description,coverImage,icon} = dataitems;

            // console.log(dataitems)

             // Check if all required fields are provided
             if (!title || !tagline || !description || !coverImage || !icon) {
                throw new Error("All fields are required.");
            }

            const response = await fetch(`${host}/api/data/createData`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({title,tagline,description,coverImage,icon})
            });

            if(!response)
            {
                const error = await response.text();
                throw new Error(`HTTP ERROR! status:${response.status} ,message:${error}`)
            }

            const json = await response.json();
            setData((prev)=>[...prev,json]);
            return true

        } catch (error) {
            console.log("Failed to Create Category",error);
        }
    }

    const getData = async (dataitem)=>{

        try {
            
            const title = dataitem;
            // console.log(dataitem+"\ntitle:"+title)

            if(!title)
            {
                throw new Error("All fields are required.");   
            }

            const response = await fetch(`${host}/api/data/getData/${title}`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            });

            if(!response)
            {
                const error = await response.text();
                throw new Error(`HTTP ERROR! status:${response.status} ,message:${error}`)
            }

            const data = await response.json();
        
            return data; 

        } catch (error) {
            console.log("Failed to Load Category",error);
        }

    }

    const getAllTitle = async ()=>{
        try {
            const response = await fetch(`${host}/api/data/getAllTitle`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                },
            });

            const json = await response.json();
            // setData(json);
            return json;
        } catch (error) {
            console.log("Failed to Load Title",error);
        }
    }

    const updateData = async (dataitems)=>{
        
        try {
            
            const {title,tagline,description,coverImage,icon} = dataitems;

             // Check if all required fields are provided
             if (!title || !tagline || !description || !coverImage || !icon) {
                throw new Error("All fields are required.");
            }

            const response = await fetch(`${host}/api/data/createData`,{
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({title,tagline,description,coverImage,icon})
            });

            if(!response)
            {
                const error = await response.text();
                throw new Error(`HTTP ERROR! status:${response.status} ,message:${error}`)
            }

            const json = await response.json();
            setData((prev)=>[...prev,json]);

        } catch (error) {
            console.log("Failed to Create Category",error);
        }
    }

    const getAllData = async ()=>{
        
        try {
            
            const response = await fetch(`${host}/api/data/getAllData`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                },
            });

            const json = await response.json();
            setData(json);
            return json;

        } catch (error) {
            console.log("Failed to Create Category",error);
        }
    }

    const deleteData = async (dataitems)=>{

        try {
            
            const title = dataitems;
            console.log(dataitems);

            if(!title)
            {
                throw new Error("All fields are required.");
            }

            const response = await fetch(`${host}/api/data/deleteData`,{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({title})
            });

            if(!response)
            {
                const error = await response.text();
                throw new Error(`HTTP ERROR! status:${response.status} ,message:${error}`)
            }

            const json = await response.json();
            return json;
            // console.log(json);
        } catch (error) {
            console.log("Failed to Create Category",error);
        }

    }


    const insertImage = async (dataitems)=>{

        try {
            
            const {title,images} = dataitems;
            // console.log(dataitems);
            // console.log("Title:"+title+"\nImages : "+images);
            

            if(!title || images.length === 0 )
            {
                throw new Error("All fields are required.");
            }

            const response = await fetch(`${host}/api/data/insertImages`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({title,images})
            });

            if(!response)
            {
                const error = await response.text();
                throw new Error(`HTTP ERROR! status:${response.status} ,message:${error}`)
            }

            const json = await response.json();
            setData((prev)=>[...prev,json]);

        } catch (error) {
            console.log("Failed to Create Category",error);
        }

    }

    const deleteImage = async (dataitems)=>{

        try {
            
            const {title,image} = dataitems;
            // console.log(dataitems)

            if(!title || !image)
            {
                throw new Error("All fields are required.");
            }

            const response = await fetch(`${host}/api/data/deleteImage`,{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({title,image})
            });

            if(!response)
            {
                const error = await response.text();
                throw new Error(`HTTP ERROR! status:${response.status} ,message:${error}`)
            }

            const json = await response.json();
            setData((prev)=>[...prev,json]);
            return json;
        } catch (error) {
            console.log("Failed to Create Category",error);
        }
    }


    const sendEmail = async (data)=>{

        try {
            
            const response = await fetch(`${host}/api/sendemail/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if(!response)
            {
                const error = await response.text();
                throw new Error(`HTTP ERROR! status:${response.status} ,message:${error}`)
            }

            const json = await response.json()
            return json;

        } catch (error) {
            console.log("Emial sending error"+error)
        }

    }

    return(
        <DataContext.Provider value={{data,createData,getAllTitle,getData,getAllData,updateData,deleteData,deleteImage,insertImage,sendEmail}}>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataState;
