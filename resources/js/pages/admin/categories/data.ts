import { baseToken, baseUrl } from "../config/config";

export let categories = [
    {
        id:0,
        name:'Politic',
        archive:false,
    },
    {
        id:1,
        name:'History',
        archive:false,
    },
    {
        id:2,
        name:'Economy',
        archive:false,
    },
    {
        id:3,
        name:'Psychology',
        archive:false,
    },
    {
        id:4,
        name:'Stories',
        archive:false,
    },
    {
        id:5,
        name:'Magazines',
        archive:false,
    },
]


const url= `${baseUrl}/api/category`;
    try {
        const response = await fetch(url,{
            method:'GET',
            headers: {
                'Authorization': `Bearer ${baseToken}`,
                'Content-Type': 'application/json',
              },
        });
        if(response.ok){
            const data = await response.json();
            categories = data.categories
        }else {
            const data = await response.json();
            console.log(data)
            console.log("auth nedd to login token")
        }
    } catch (error) {
        console.log(error)
    }





