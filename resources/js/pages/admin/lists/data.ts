import { useParams } from 'react-router';
import {baseUrl,baseToken} from '../config/config'
import { BookType, userListTable } from '../../../type/type';

const getData = async () => {

    try {
        const response = await fetch(`${baseUrl}/api/book/list/`,{
            method:'GET',
            headers: {
                'Authorization': `Bearer ${baseToken}`,
                'Content-Type': 'application/json',
              },
        });
        if(response.ok){
            const data = await response.json();
            //console.log(data)
            return destructurList(data.booksList);
        }
    } catch (error) {
        console.log(error)
    }

}

const  destructurList =(list) => {
    const newList = list.map((item:BookType) => {
        return {
            id:Number(item.id),
            image:item.image,
            name:item.name,
            category_id:Number(item.category_id),
            outline:item.outline,

            description:item.description,
            plan:item.plan,
            sound:item.sound,
            author:item.author,
            created_at:item.created_at,
            updated_at:item.updated_at,

            }
    })
    return newList
}
export let booksList = await getData();
export let dUserList = [];
export let usersList = [
    {
        id:0,
        name: 'user zero',
        address: 'mohnyin',
        phone: '09789654',
        image: 'https://i.pinimg.com/1200x/ef/5d/fc/ef5dfc4edaa8cdb1f40adf4a776236a7.jpg',
        role: 'user',
        gender:'male',
        plan:'free',
        status: [
            {
              st1: 'free',
              st2: 'one@gmail.com',
              st3: '09893102188',
            },
            {
                st1: 'Homalin',
                st2: 'ShanNi State',
                st3: 'Chindwin st',
            },
          ],
    },
    {
        id:1,
        name: 'user one',
        address: 'mohnyin',
        phone: '09789654',
        image: 'https://yohohindi.com/wp-content/uploads/2022/08/2-girls-dp-yohohindi.com_.jpeg',
        role: 'user',
        gender:'male',
        plan:'free',
        status: [
            {
              st1: 'free',
              st2: 'one@gmail.com',
              st3: '09893102188',
            },
            {
                st1: 'Homalin',
                st2: 'ShanNi State',
                st3: 'Chindwin st',
            },
          ],
    },
    {
        id:2,
        name: 'user one',
        address: 'mohnyin',
        phone: '09789654',
        image: 'https://i.pinimg.com/474x/2a/63/7a/2a637ad55088ffa297ed62989b2061ff.jpg',
        role: 'user',
        gender:'male',
        plan:'free',
        status: [
            {
              st1: 'free',
              st2: 'one@gmail.com',
              st3: '09893102188',
            },
            {
                st1: 'Homalin',
                st2: 'ShanNi State',
                st3: 'Chindwin st',
            },
          ],
    },
    {
        id:3,
        name: 'user one',
        address: 'mohnyin',
        phone: '09789654',
        image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        role: 'user',
        gender:'male',
        plan:'free',
        status: [
            {
              st1: 'free',
              st2: 'one@gmail.com',
              st3: '09893102188',
            },
            {
                st1: 'Homalin',
                st2: 'ShanNi State',
                st3: 'Chindwin st',
            },
          ],
    },
    {
        id:4,
        name: 'user one',
        address: 'mohnyin',
        phone: '09789654',
        image: 'https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8=',
        role: 'user',
        gender:'male',
        plan:'free',
        status: [
            {
              st1: 'free',
              st2: 'one@gmail.com',
              st3: '09893102188',
            },
            {
                st1: 'Homalin',
                st2: 'ShanNi State',
                st3: 'Chindwin st',
            },
          ],
    },
    {
        id:5,
        name: 'user one',
        address: 'mohnyin',
        phone: '09789654',
        image: 'https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhZHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        role: 'user',
        gender:'male',
        plan:'free',
        status: [
            {
              st1: 'free',
              st2: 'one@gmail.com',
              st3: '09893102188',
            },
            {
                st1: 'Homalin',
                st2: 'ShanNi State',
                st3: 'Chindwin st',
            },
          ],
    },
    {
        id:6,
        name: 'user one',
        address: 'mohnyin',
        phone: '09789654',
        image: 'https://media.istockphoto.com/id/1281083606/photo/photo-of-attractive-charming-lady-cute-bobbed-hairdo-arms-crossed-self-confident-person.jpg?s=170667a&w=0&k=20&c=2MF4bnfC68Yvc_-qc1epxyqu3tZcx3vcuZIdP0CiySA=',
        role: 'user',
        gender:'male',
        plan:'free',
        status: [
            {
              st1: 'free',
              st2: 'one@gmail.com',
              st3: '09893102188',
            },
            {
                st1: 'Homalin',
                st2: 'ShanNi State',
                st3: 'Chindwin st',
            },
          ],
    },
]


const getUsers = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/usersLists`,{
            method:'GET',
            headers: {
                'Authorization': `Bearer ${baseToken}`,
                'Content-Type': 'application/json',
              },
        });
        if(response.ok){
            const resp = await response.json();
            dUserList = resp.data;
            return destructureUsersList(await resp.data);

        }
    } catch (error) {
        console.log(error)
    }
}
const destructureUsersList = (users) => {
    const formatedList = users.map((obj:userListTable)=>{
        return {
            id:Number(obj.id),
            name: obj.name,
            email:obj.email,
            address: obj.address,
            phone: obj.phone,
            image: obj.image?obj.image:`https://i.pinimg.com/1200x/ef/5d/fc/ef5dfc4edaa8cdb1f40adf4a776236a7.jpg`,
            role: obj.role,
            gender:obj.gender,
            plan:obj.plan,
            status: [
                {
                  st1: obj.plan,
                  st2:obj.email,
                  st3: obj.phone,
                },
                {
                    st1: obj.address,
                    st2:obj.archive?'Blocked':'Secure',
                    st3: obj.role,
                },
              ],
        }
    });
    // console.log(formatedList)
    return formatedList;
}
getUsers();
usersList = await getUsers();

