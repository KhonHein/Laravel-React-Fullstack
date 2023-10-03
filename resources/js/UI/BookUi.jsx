 import './bookUi.css'
import React from 'react'
//need to fetch the book
import Sound1 from '../data/voice/sound1.mp3'
import PlayBook from './PlayBook'
import { useParams } from 'react-router'
import { baseUrl,baseToken } from '../pages/admin/config/config'
//fetch the book from sever
import { booksList } from '../pages/admin/lists/data'

const book = {
    title:'Tessa Dear title',
    img:'https://i.pinimg.com/736x/ce/02/1f/ce021f9b7a5a52513cea38cbf34f51a1.jpg',
    sound:Sound1,
    bookCaption:'caption is caption sample',
    bookContent:`chapters Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquam ullam mollitia delectus quidem accusantium quam maxime dolorem suscipit. Fugit, voluptatem! Aspernatur id nesciunt, odio accusamus unde maxime! Corporis, provident?
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa cumque debitis, praesentium impedit ab cupiditate iusto ut dolorum. Et porro voluptatum aut atque modi odio voluptas rerum neque culpa hic.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa cumque debitis, praesentium impedit ab cupiditate iusto ut dolorum. Et porro voluptatum aut atque modi odio voluptas rerum neque culpa hic.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa cumque debitis, praesentium impedit ab cupiditate iusto ut dolorum. Et porro voluptatum aut atque modi odio voluptas rerum neque culpa hic.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa cumque debitis, praesentium impedit ab cupiditate iusto ut dolorum. Et porro voluptatum aut atque modi odio voluptas rerum neque culpa hic.`,
}
// interface PlayType{
//   title:string,
//   img:string,
//   sound:File,
//   bookContent:string,
// }
//    const bookDetals = null
// const getData = async (id) => {


const BookUi = () => {
    const param = useParams();
    const id = Number(param.id);

    const book = booksList.find(item=>{
        return item.id === id;
    });
console.log(book)
  return (
    <div className='playbook_container'>
        <div className="playbook_info">
            <div className="cover_photo">
                <img src={`${baseUrl}/storage/images/${book.image}`} alt="" />
            </div>
        </div>
        <div className="playbook_info">
            <PlayBook
            title={book.name}
            img={book.image}
            sound={`${baseUrl}/storage/sounds/${book.sound}`}
            bookContent={book.description}
            />
        </div>
        <div className="playbook_info">
            <div className="chapters read_book">
                <h3 className='color-1'>{book.name}</h3>
                <p>{book.description}</p>
            </div>
        </div>
    </div>
  )
}

export default BookUi
